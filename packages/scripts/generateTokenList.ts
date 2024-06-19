import fs from "fs";

const TOKEN_DIR = "../wow-tokens/src/color.ts";
const outputFile = "../theme/src/config/colorTokenList.ts";

const extractTokenName = async (filePath: string): Promise<string[]> => {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    const regex = /export const (\w+) =/g;
    const matches = data.match(regex);

    if (!matches) {
      throw new Error("찾는 토큰이 파일에 존재하지 않습니다.");
    }

    const tokenNames = matches.map((match) => {
      let tokenName = match.replace(/export const (\w+) =/, "$1").trim();

      tokenName = tokenName.replace(/([a-zA-Z])([0-9])/g, "$1.$2");

      return tokenName;
    });

    return tokenNames;
  } catch (error) {
    console.error("Error extracting or saving variable names:", error);
    return [];
  }
};

const generateColorTokenFiles = async (tokenNames: string[]) => {
  const returnValue = `export const colorTokenList = ${JSON.stringify(tokenNames, null, 2)}`;
  await fs.promises.writeFile(outputFile, returnValue, "utf-8");
};

(async () => {
  try {
    const tokenNames = await extractTokenName(TOKEN_DIR);
    await generateColorTokenFiles(tokenNames);
  } catch (error) {
    console.log("Error generating TokenList:", error);
  }
})();
