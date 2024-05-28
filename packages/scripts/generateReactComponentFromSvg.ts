import { promises as fs } from "fs";
import path from "path";

const generateReactComponentFromSvg = async () => {
  const SVG_DIR = "../wow-icons/src/svg";
  const COMPONENT_DIR = "../wow-icons/src/react";

  const svgFiles = (await fs.readdir(SVG_DIR)).filter((file) =>
    file.endsWith(".svg")
  );
  const componentFiles = (await fs.readdir(COMPONENT_DIR)).filter((file) =>
    file.endsWith(".tsx")
  );
  const componentFilesToDelete = componentFiles.filter((file) => {
    const componentName = path
      .basename(file, ".tsx")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();
    return !svgFiles.includes(`${componentName}.tsx`);
  });

  for (const file of componentFilesToDelete) {
    const componentFilePath = path.resolve(COMPONENT_DIR, file);
    await fs.unlink(componentFilePath);
  }

  const components = [];

  for (const file of svgFiles) {
    const componentName = path
      .basename(file, ".svg")
      .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());
    components.push(componentName);
    const svgFilePath = path.resolve(SVG_DIR, file);
    const svgContent = (await fs.readFile(svgFilePath)).toString();

    const componentContent = `
      import { Ref } from 'react';
      import type { IconProps } from "../types/Icon.ts";

      const ${componentName} = (
        { className, width = 24, height = 24 }: IconProps,
        ref: Ref<HTMLSpanElement>
      ) => {
        return (
          <span
            ref={ref}
            style={{ display: "inline-flex", width: width, height: height }}
            className={className}
          >
            ${svgContent.replace(/-(\w)/g, (_, letter) => letter.toUpperCase())}
          </span>
        );
      };

      export default ${componentName};
    `;
    const componentFilePath = path.resolve(
      COMPONENT_DIR,
      `${componentName}.tsx`
    );

    await fs.writeFile(componentFilePath, componentContent);
  }

  return components;
};

const generateEntryFile = async (components: string[]) => {
  const ENTRY_FILE_PATH = "../wow-icons/src/react/index.ts";
  const entryFileContent = components
    .map(
      (component) =>
        `export { default as ${component} } from "./${component}.tsx";`
    )
    .join("\n");

  await fs.writeFile(ENTRY_FILE_PATH, entryFileContent);
};

(async () => {
  const components = await generateReactComponentFromSvg();
  generateEntryFile(components);
})();
