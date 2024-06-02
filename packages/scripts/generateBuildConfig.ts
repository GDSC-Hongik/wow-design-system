import { promises as fs } from "fs";
import path from "path";

import packageJSON from "../wow-ui/package.json";

type ExportItem =
  | {
      types: string;
      require: string;
      import: string;
    }
  | string;
type ExportObject = { [key: string]: ExportItem };
type EntryFileObject = { [key: string]: string };

const COMPONENT_PATH = "./src/components";

const generateExports = (files: string[]) => {
  const exportsObj: ExportObject = {
    "./styles.css": "./dist/styles.css",
  };

  for (const file of files) {
    const filePath = `./${file}`;
    const distPath = `./dist/${file}`;
    const typePath = `./dist/components/${file}`;

    exportsObj[filePath] = {
      types: `${typePath}/index.d.ts`,
      require: `${distPath}.cjs`,
      import: `${distPath}.js`,
    };
  }

  return exportsObj;
};

const applyExportsToPackageJSON = async (exportsObj: ExportObject) => {
  const PACKAGEJSON_PATH = "package.json";

  packageJSON.exports = packageJSON.exports || {};
  Object.assign(packageJSON.exports, exportsObj);

  await fs.writeFile(PACKAGEJSON_PATH, JSON.stringify(packageJSON));
};

const generateRollupEntryFiles = (files: string[]) => {
  const entryFileObj: EntryFileObject = {};

  for (const file of files) {
    entryFileObj[file] = `${COMPONENT_PATH}/${file}`;
  }

  return entryFileObj;
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
  const files = await fs.readdir(directoryPath);

  const exportsObj = generateExports(files);
  await applyExportsToPackageJSON(exportsObj);

  const entryFileObj = generateRollupEntryFiles(files);
  applyEntryFilesToRollupConfig(entryFileObj);
})();
