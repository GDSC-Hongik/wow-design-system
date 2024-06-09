import { promises as fs } from "fs";
import path from "path";

import packageJSON from "../wow-ui/package.json";

const COMPONENT_PATH = "./src/components";

type ExportsKey = string;
type ExportsValue =
  | {
      types: string;
      require: string;
      import: string;
    }
  | string;
type ExportsObject = { [key: ExportsKey]: ExportsValue };

type EntryFileKey = string;
type EntryFileValue = string;
type EntryFileObject = { [key: EntryFileKey]: EntryFileValue };

const getFilteredComponentFiles = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath, { recursive: true });

  return files.filter(
    (file) =>
      file.endsWith(".tsx") &&
      !file.includes("test") &&
      !file.includes("stories")
  );
};

const createPaths = (type: "entryFile" | "exports", file: string) => {
  const componentDirName = file.split("/")[0] ?? "";
  const componentName = file.split("/")[1]?.slice(0, -4) ?? "";
  const isComponent = file.endsWith("index.tsx");

  const typesPath = `./dist/components/${componentDirName}/${isComponent ? "index" : componentName}.d.ts`;
  const importPath = `./dist/${isComponent ? componentDirName : componentName}.js`;
  const requirePath = `./dist/${isComponent ? componentDirName : componentName}.cjs`;
  const componentPath = `./src/components/${componentDirName}${isComponent ? "" : `/${componentName}`}`;

  const entryFileKey = isComponent
    ? `./${componentDirName}`
    : `./${componentName}`;
  const exportsKey = isComponent ? componentDirName : componentName;
  const exportsValue = {
    types: typesPath,
    require: requirePath,
    import: importPath,
  };
  const entryFileValue = componentPath;

  return type === "entryFile"
    ? { key: exportsKey, value: entryFileValue }
    : { key: entryFileKey, value: exportsValue };
};

const createExportsObject = async (files: string[]): Promise<ExportsObject> => {
  const exports = files.reduce(
    (prev, file) => {
      const { key, value } = createPaths("exports", file);

      return { ...prev, [key]: value };
    },
    { "./styles.css": "./dist/styles.css" }
  );

  return exports;
};

const applyExportsToPackageJSON = async (exportsObject: ExportsObject) => {
  const PACKAGEJSON_PATH = "package.json";

  packageJSON.exports = Object.create(null);
  Object.assign(packageJSON.exports, exportsObject);

  await fs.writeFile(PACKAGEJSON_PATH, JSON.stringify(packageJSON));
};

const generateRollupEntryFileObject = (
  files: string[]
): { [key: EntryFileKey]: EntryFileValue } => {
  const entryFileObject = files
    .map((file) => {
      const { key, value } = createPaths("entryFile", file);

      return { key, value };
    })
    .reduce(
      (prev, { key, value }) => ({
        ...prev,
        [key]: value,
      }),
      {}
    );

  return entryFileObject;
};

const applyEntryFilesToRollupConfig = async (
  entryFileObject: EntryFileObject
) => {
  const ROLLUP_CONFIG_PATH = "rollup.config.js";

  const dirname = path.resolve();
  const rollupConfigPath = path.join(dirname, ROLLUP_CONFIG_PATH);
  let rollupConfigContent = await fs.readFile(rollupConfigPath, "utf-8");

  rollupConfigContent = rollupConfigContent.replace(
    /input:\s*{[^}]*}/m,
    `input: ${JSON.stringify(entryFileObject)}`
  );

  await fs.writeFile(ROLLUP_CONFIG_PATH, rollupConfigContent);
};

(async () => {
  const directoryPath = COMPONENT_PATH;
  const filteredComponentFiles = await getFilteredComponentFiles(directoryPath);
  const exportsObject = await createExportsObject(filteredComponentFiles);
  await applyExportsToPackageJSON(exportsObject);

  const entryFileObject = generateRollupEntryFileObject(filteredComponentFiles);
  applyEntryFilesToRollupConfig(entryFileObject);
})();
