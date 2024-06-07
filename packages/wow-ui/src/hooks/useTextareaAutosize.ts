import type { RefObject } from "react";

export const useTextareaAutosize = (ref: RefObject<HTMLTextAreaElement>) => {
  const textareaElement = ref.current;
  if (!textareaElement) return;

  const handleResize = () => {
    textareaElement.style.height = "auto";
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  };

  const handleOverflow = () => {
    textareaElement.style.overflowY =
      textareaElement.scrollHeight > 120 ? "scroll" : "hidden";
  };

  textareaElement.addEventListener("input", handleResize);
  textareaElement.addEventListener("input", handleOverflow);

  return () => {
    textareaElement.removeEventListener("input", handleResize);
    textareaElement.removeEventListener("input", handleOverflow);
  };
};
