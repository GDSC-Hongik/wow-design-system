import { promises as fs } from "fs";
import path from "path";

const SVG_DIR = "../wow-icons/src/svg";
const COMPONENT_DIR = "../wow-icons/src/react";

type SvgComponentMap = { [key: string]: string };

const generateSvgComponentMap = async () => {
  const svgFiles = (await fs.readdir(SVG_DIR)).reduce<SvgComponentMap>(
    (map, svgFile) => {
      const componentName = path
        .basename(svgFile, ".svg")
        .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());
      map[componentName] = svgFile;

      return map;
    },
    {}
  );

  return svgFiles;
};

const deleteUnusedComponentFiles = async (svgComponentMap: SvgComponentMap) => {
  const componentFiles = await fs.readdir(COMPONENT_DIR);
  const componentFilesToDelete = componentFiles.filter((componentFile) => {
    const componentName = path.basename(componentFile, ".tsx");
    return !(componentName in svgComponentMap);
  });

  await Promise.all(
    componentFilesToDelete.map((file) => {
      const componentFilePath = path.resolve(COMPONENT_DIR, file);
      return fs.unlink(componentFilePath);
    })
  );
};

const createComponentContent = (
  componentName: string,
  svgContent: string
): string => {
  const modifiedSvgContent = svgContent
    .replace(/width="(\d+)"/g, `width={width}`)
    .replace(/height="(\d+)"/g, `height={height}`)
    .replace(/viewBox="(.*?)"/g, `viewBox={viewBox}`)
    .replace(/fill="([^"]+)"/g, `fill={fill}`)
    .replace(/stroke="([^"]+)"/g, `stroke={stroke}`)
    .replace(/-(\w)/g, (_, letter) => letter.toUpperCase());

  return `
    import { Ref } from 'react';
    import type { IconProps } from "../types/Icon.ts";

    const ${componentName} = (
      { className, width = 24, height = 24, viewBox = "0 0 24 24", fill = "#E4E4E5", stroke = "#E4E4E5", ...rest }: IconProps,
      ref: Ref<HTMLSpanElement>
    ) => {
      return (
        <span
          ref={ref}
          style={{ display: "inline-flex", width: width, height: height }}
          className={className}
          {...rest}
        >
          ${modifiedSvgContent}
        </span>
      );
    };

    export default ${componentName};
  `;
};

const generateComponentFiles = async (svgComponentMap: SvgComponentMap) => {
  const components = [];

  for (const [componentName, svgFile] of Object.entries(svgComponentMap)) {
    const svgFilePath = path.resolve(SVG_DIR, svgFile);
    const svgContent = (await fs.readFile(svgFilePath)).toString();

    const componentContent = createComponentContent(componentName, svgContent);
    const componentFilePath = path.resolve(
      COMPONENT_DIR,
      `${componentName}.tsx`
    );

    await fs.writeFile(componentFilePath, componentContent);
    components.push(componentName);
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
  try {
    const svgComponentMap = await generateSvgComponentMap();
    await deleteUnusedComponentFiles(svgComponentMap);
    const components = await generateComponentFiles(svgComponentMap);
    await generateEntryFile(components);
  } catch (error) {
    console.log("Error generating components:", error);
  }
})();
