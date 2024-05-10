import { promises as fs } from "fs";
import packageJSON from "package.json";

type ExportItem =
  | {
      types: string;
      require: string;
      import: string;
    }
  | string;

type ExportObject = { [key: string]: ExportItem };

const generateExports = async (directoryPath: string) => {
  const files = await fs.readdir(directoryPath);
  const exportsObj: ExportObject = {
    ["./styles.css"]: "./dist/styles.css",
  };

  for (const file of files) {
    exportsObj[`./${file}`] = {
      types: `./dist/types/${file}/index.d.ts`,
      require: `./dist/${file}.cjs`,
      import: `./dist/${file}.js`,
    };
  }

  return exportsObj;
};

(async () => {
  const exportsObj = await generateExports("./src/components");
  packageJSON.exports = packageJSON.exports || {};
  Object.assign(packageJSON.exports, exportsObj);

  await fs.writeFile("package.json", JSON.stringify(packageJSON));
})();
