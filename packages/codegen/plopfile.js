export default async function (plop) {
  plop.setGenerator("Story", {
    description: "Create a story file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "스토리를 작성할 컴포넌트 이름을 입력해주세요",
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
