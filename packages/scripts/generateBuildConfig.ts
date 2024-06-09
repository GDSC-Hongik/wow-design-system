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

const createPaths = (
  type: "entryFile" | "exports",
  file: string
): [EntryFileKey, EntryFileValue] | [ExportsKey, ExportsValue] => {
  const componentDirName = file.split("/")[0]!;
  const componentName = file.split("/")[1]?.slice(0, -4)!;
  const typesPath = file.endsWith("index.tsx")
    ? `./dist/components/${componentDirName}.tsx`
    : `./dist/components/${componentDirName}/${componentName}.tsx`;
  const componentPath = file.endsWith("index.tsx")
    ? `./dist/${componentDirName}.tsx`
    : `./dist/${componentDirName}/${componentName}.tsx`;

  const key = file.endsWith("index.tsx") ? componentDirName : componentName;
  const exportsValue = {
    types: typesPath,
    require: componentPath,
    import: componentPath,
  };
  const entryFileValue = componentPath;

  return type === "entryFile" ? [key, entryFileValue] : [key, exportsValue];
};

const createExportsObject = async (files: string[]): Promise<ExportsObject> => {
  const exports = files.reduce((prev, file) => {
    const [key, value] = createPaths("exports", file);

    return { ...prev, [key]: value };
  }, {});

  return exports;
};

const applyExportsToPackageJSON = async (exportsObj: ExportsObject) => {
  const PACKAGEJSON_PATH = "package.json";

  packageJSON.exports = packageJSON.exports || {};
  Object.assign(packageJSON.exports, exportsObj);

  await fs.writeFile(PACKAGEJSON_PATH, JSON.stringify(packageJSON));
};

const generateRollupEntryFileObject = (files: string[]) => {
  const entryFileObject = files
    .map((file) => {
      const [key, value] = createPaths("entryFile", file);

      return [key, value];
    })
    .reduce(
      (prev, [componentDirName, componentPath]) => ({
        ...prev,
        [componentDirName as EntryFileKey]: componentPath,
      }),
      {}
    );

  return entryFileObject;
};

const applyEntryFilesToRollupConfig = async (entryFileObj: EntryFileObject) => {
  const ROLLUP_CONFIG_PATH = "rollup.config.js";

  const dirname = path.resolve();
  const rollupConfigPath = path.join(dirname, ROLLUP_CONFIG_PATH);
  let rollupConfigContent = await fs.readFile(rollupConfigPath, "utf-8");

  rollupConfigContent = rollupConfigContent.replace(
    /input:\s*{[^}]*}/m,
    `input: ${JSON.stringify(entryFileObj)}`
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
