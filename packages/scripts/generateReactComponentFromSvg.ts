import { existsSync, promises as fs } from "fs";
import path from "path";

const SVG_DIR = "../wow-icons/src/svg";
const COMPONENT_DIR = "../wow-icons/src/component";

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
  if (!existsSync(COMPONENT_DIR)) {
    fs.mkdir(COMPONENT_DIR);
    return;
  }

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

const extractSvgAttributes = (svgContent: string) => {
  const widthMatch = svgContent.match(/width="(\d+)"/g);
  const heightMatch = svgContent.match(/height="(\d+)"/g);
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/g);

  return {
    width: widthMatch ? widthMatch[0] : "width = 24",
    height: heightMatch ? heightMatch[0] : "height = 24",
    viewBox: viewBoxMatch ? viewBoxMatch[0] : "viewBox = 0 0 24 24",
  };
};

const createComponentContent = (
  componentName: string,
  svgContent: string,
  svgFile: string
): string => {
  const iconName = path.basename(svgFile, ".svg");
  const hasStroke = svgContent.includes("stroke=");
  const fillAttributes = (svgContent.match(/fill="([^"]*)"/g) || []).filter(
    (attr) => attr !== 'fill="none"'
  );
  const hasFill = fillAttributes.length;
  const { width, height, viewBox } = extractSvgAttributes(svgContent);
  const propsString = `{ className, ${width}, ${height}, ${viewBox}${hasStroke || hasFill ? ` ${hasStroke ? ', stroke = "white"' : ""}${hasFill ? ', fill = "white"' : ""}` : ""}, ...rest }`;
  const modifiedSvgContent = svgContent
    .replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/width="(\d+)"/g, `width={width}`)
    .replace(/height="(\d+)"/g, `height={height}`)
    .replace(/viewBox="(.*?)"/g, `viewBox={viewBox}`)
    .replace(/<svg([^>]*)fill="[^"]*"([^>]*)>/, "<svg$1$2>")
    .replace(/fill="([^"]+)"/g, `fill={color[fill]}`)
    .replace(/stroke="([^"]+)"/g, `stroke={color[stroke]}`)
    .replace(
      /<svg([^>]*)>/,
      `<svg$1 aria-label="${iconName} icon" fill="none" ref={ref} className={className} {...rest}>`
    );

  return `
    import { forwardRef } from 'react';
    import { color } from "wowds-tokens";
    
    import type { IconProps } from "@/types/Icon.ts";

    const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
      (${propsString}, ref) => {
        return (
          ${modifiedSvgContent}
        );
      }
    );    

    ${componentName}.displayName = '${componentName}';
    export default ${componentName};
  `;
};

const generateComponentFiles = async (svgComponentMap: SvgComponentMap) => {
  const components: string[] = [];

  for (const [componentName, svgFile] of Object.entries(svgComponentMap)) {
    const componentFilePath = path.resolve(
      COMPONENT_DIR,
      `${componentName}.tsx`
    );

    if (existsSync(componentFilePath)) {
      components.push(componentName);
      continue;
    }

    const svgFilePath = path.resolve(SVG_DIR, svgFile);
    const svgContent = (await fs.readFile(svgFilePath)).toString();

    const componentContent = createComponentContent(
      componentName,
      svgContent,
      svgFile
    );

    await fs.writeFile(componentFilePath, componentContent);
    components.push(componentName);
  }

  return components;
};

const generateExportFile = async (components: string[]) => {
  const EXPORT_FILE_PATH = "../wow-icons/src/component/index.ts";
  const exportFileContent = components
    .map(
      (component) =>
        `export { default as ${component} } from "./${component}.tsx";`
    )
    .join("\n");

  await fs.writeFile(EXPORT_FILE_PATH, exportFileContent);
};

(async () => {
  try {
    const svgComponentMap = await generateSvgComponentMap();
    await deleteUnusedComponentFiles(svgComponentMap);
    const components = await generateComponentFiles(svgComponentMap);
    await generateExportFile(components);
  } catch (error) {
    console.log("Error generating components:", error);
  }
})();
