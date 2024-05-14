import postcss from "postcss";

export const removeUnusedKeyframes = (css: string) => {
  const root = postcss.parse(css);

  const keyframes = new Map<string, boolean>();

  root.walk((node) => {
    if (node.type === "atrule" && node.name === "keyframes") {
      keyframes.set(node.params, false);
    } else if (node.type === "decl") {
      const decl = node;
      const animationName =
        decl.prop === "animation" ? decl.value.split(" ")[0] || "" : decl.value;

      if (
        (decl.prop === "animation" || decl.prop === "animation-name") &&
        keyframes.has(animationName)
      ) {
        keyframes.set(animationName, true);
      }
    }
  });

  root.walkAtRules("keyframes", (rule) => {
    if (keyframes.get(rule.params) === false) {
      rule.remove();
    }
  });

  return root.toString();
};
