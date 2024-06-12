import { promises as fs } from "fs";
import { exit } from "process";

export default async function async(plop) {
  const COMPONENT_DIR = "../wow-ui/src/components";
  const files = await fs.readdir(COMPONENT_DIR);

  plop.setGenerator("Story", {
    description: "Create a story file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "스토리를 작성할 컴포넌트 이름을 입력해주세요",
        validate: (input) => {
          if (!files.includes(input)) {
            console.log("\n만들어진 컴포넌트 이름을 입력해주세요.");
            exit(1);
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "../wow-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/Story.tsx.hbs",
      },
    ],
  });
}
