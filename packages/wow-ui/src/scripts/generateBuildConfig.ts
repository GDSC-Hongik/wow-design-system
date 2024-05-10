import { promises as fs } from "fs";
import packageJSON from "package.json";
import path from "path";

type ExportItem =
  | {
      types: string;
      require: string;
      import: string;
    }
  | string;

type ExportObject = { [key: string]: ExportItem };

type EntryFileObject = { [key: string]: string };

const generateExports = (files: string[]) => {
  const exportsObj: ExportObject = {};

  for (const file of files) {
    const filePath = `./${file}`;
    const distPath = `./dist/${file}`;
    exportsObj[filePath] = {
      types: `${distPath}/index.d.ts`,
      require: `${distPath}.cjs`,
      import: `${distPath}.js`,
    };
  }

  return exportsObj;
};

const applyExportsToPackageJSON = async (exportsObj: ExportObject) => {
  packageJSON.exports = packageJSON.exports || {};
  Object.assign(packageJSON.exports, exportsObj);

  await fs.writeFile("package.json", JSON.stringify(packageJSON));
};

const generateRollupEntryFiles = (files: string[]) => {
  const entryFileObj: EntryFileObject = {};

  for (const file of files) {
    entryFileObj[file] = `./src/components/${file}`;
  }

  return entryFileObj;
};

const applyEntryFilesToRollupConfig = async (entryFileObj: EntryFileObject) => {
  const __dirname = path.resolve();
  const rollupConfigPath = path.join(__dirname, "rollup.config.js");
  let rollupConfigContent = await fs.readFile(rollupConfigPath, "utf-8");

  rollupConfigContent = rollupConfigContent.replace(
    /input:\s*{[^}]*}/m,
    `input: ${JSON.stringify(entryFileObj)}`
  );

  await fs.writeFile("rollup.config.js", rollupConfigContent);
};

(async () => {
  const directoryPath = "./src/components";
  const files = await fs.readdir(directoryPath);

  const exportsObj = generateExports(files);
  await applyExportsToPackageJSON(exportsObj);

  const entryFileObj = generateRollupEntryFiles(files);
  applyEntryFilesToRollupConfig(entryFileObj);
})();
