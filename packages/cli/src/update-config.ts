import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

type ExportPaths = {
  key: string;
  value: string | { types: string; require: string; import: string };
};

const rootDir: string = path.resolve("..", "..");
const wowUiDir: string = path.join(rootDir, "packages", "wow-ui");
const componentsDir: string = path.join(wowUiDir, "src", "components");

function listDirectories(dir: string): string[] {
  const files: string[] = fs.readdirSync(dir);
  return files
    .map((file) => path.join(dir, file))
    .filter((file) => fs.statSync(file).isDirectory());
}

function listFiles(dir: string): string[] {
  const files: string[] = fs.readdirSync(dir);

  return files
    .filter(
      (file) =>
        (file.endsWith(".tsx") || file.endsWith(".ts")) &&
        !file.includes("test") &&
        !file.includes("stories")
    )
    .map((file) => path.join(dir, file));
}

const createPaths = (
  type: "entryFile" | "exports",
  file: string
): ExportPaths => {
  const parsedPath = path.parse(file);
  const componentDirName = path.relative(componentsDir, parsedPath.dir) || "";
  const componentName = parsedPath.name;
  const defaultComponent = componentName === "index";

  const typesPath = `./dist/components/${componentDirName}/${defaultComponent ? "index" : componentName}.d.ts`;
  const importPath = `./dist/${defaultComponent ? componentDirName : componentName}.js`;
  const requirePath = `./dist/${defaultComponent ? componentDirName : componentName}.cjs`;
  const componentPath = `./src/components/${componentDirName}${defaultComponent ? "" : `/${componentName}`}`;

  const entryFileKey = defaultComponent
    ? `./${componentDirName}`
    : `./${componentName}`;
  const exportsKey = defaultComponent ? componentDirName : componentName;
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

function updatePackageJson(files: string[]): void {
  const packageJsonPath: string = path.join(wowUiDir, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  packageJson.exports = packageJson.exports || {};

  files.forEach((file) => {
    const { key, value } = createPaths("exports", file);
    if (!packageJson.exports[key]) {
      packageJson.exports[key] = value;
    } else {
      Object.assign(packageJson.exports[key], value);
    }
  });

  const sortedExports = Object.keys(packageJson.exports)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = packageJson.exports[key];
        return acc;
      },
      {} as Record<string, unknown>
    );

  packageJson.exports = sortedExports;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`package.json 업데이트 되었습니다`);
}

//TODO: tsup 으로 수정 필요
function updateRollupConfig(files: string[]): void {
  const rollupConfigPath: string = path.join(wowUiDir, "rollup.config.js");
  let rollupConfig: string = fs.readFileSync(rollupConfigPath, "utf8");

  const inputRegex = /input:\s*{([^}]*)}/s;
  const inputMatch = rollupConfig.match(inputRegex);
  if (inputMatch && inputMatch[1]) {
    const existingEntries = inputMatch[1]
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => entry);
    const newEntries = files.map((file) => {
      const { key, value } = createPaths("entryFile", file);
      return `${key}: "${value}"`;
    });

    const mergedEntries = [...existingEntries];
    newEntries.forEach((newEntry) => {
      const newKey = newEntry.split(":")[0]?.trim();
      const existingIndex = mergedEntries.findIndex((entry) =>
        entry.startsWith(`${newKey}:`)
      );
      if (existingIndex >= 0) {
        mergedEntries[existingIndex] = newEntry;
      } else {
        mergedEntries.push(newEntry);
      }
    });

    mergedEntries.sort();

    const updatedInput = `input: {\n    ${mergedEntries.join(",\n    ")}\n  }`;
    rollupConfig = rollupConfig.replace(inputRegex, updatedInput);

    fs.writeFileSync(rollupConfigPath, rollupConfig);
    console.log(`rollup.config.js 업데이트 되었습니다.`);
  }
}

// 사용자에게 선택을 요청하는 함수
async function promptUser(
  choices: string[],
  message: string
): Promise<string[]> {
  console.log(message);
  choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("선택할 번호를 입력하세요: ", (answer) => {
      rl.close();
      const choiceIndices = answer
        .split(",")
        .map((num) => parseInt(num.trim(), 10) - 1);
      const validChoices = choiceIndices
        .filter((index) => index >= 0 && index < choices.length)
        .map((index) => choices[index]);
      if (validChoices.length > 0) {
        resolve(
          validChoices.filter(
            (choice): choice is string => choice !== undefined
          )
        );
      } else {
        console.log("잘못된 선택입니다.");
        process.exit(1);
      }
    });
  });
}

async function main(): Promise<void> {
  const components = listDirectories(componentsDir).map((file) =>
    path.basename(file)
  );
  const selectedComponents = await promptUser(
    components,
    "업데이트할 컴포넌트를 선택하세요:"
  );

  const tsxFiles: string[] = [];
  for (const selectedComponent of selectedComponents) {
    const componentDir = path.join(componentsDir, selectedComponent);
    const files = listFiles(componentDir).map((file) => path.basename(file));
    if (files.length === 0) {
      console.log(`${selectedComponent}에 .tsx 파일이 없습니다.`);
    } else {
      const selectedFiles = await promptUser(
        files,
        ` ${selectedComponent}에서 업데이트할 .tsx 파일을 선택하세요:`
      );
      tsxFiles.push(
        ...selectedFiles.map((file) => path.join(componentDir, file))
      );
    }
  }

  if (tsxFiles.length === 0) {
    console.log("업데이트할 .tsx 파일이 선택되지 않았습니다.");
    process.exit(1);
  }

  updatePackageJson(tsxFiles);
  updateRollupConfig(tsxFiles);
}

main().catch((error) => console.error(error));
