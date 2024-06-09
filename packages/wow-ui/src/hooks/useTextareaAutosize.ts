import { type RefObject, useEffect } from "react";

export const useTextareaAutosize = (ref: RefObject<HTMLTextAreaElement>) => {
  useEffect(() => {
    const textareaElement = ref.current;
    if (!textareaElement) return;

    const placeholderLines = textareaElement.placeholder.split("\n").length;
    const placeholderHeight = placeholderLines * 2.625;

    const setInitialHeight = () => {
      textareaElement.style.height = `${placeholderHeight}rem`;
    };

    const handleResize = () => {
      textareaElement.style.height = "auto";
      textareaElement.style.height = `${Math.max(placeholderHeight, textareaElement.scrollHeight)}px`;
    };

    const handleOverflow = () => {
      textareaElement.style.overflowY =
        textareaElement.scrollHeight > 120 ? "scroll" : "hidden";
    };

    setInitialHeight();
    handleResize();
    handleOverflow();

    textareaElement.addEventListener("input", handleResize);
    textareaElement.addEventListener("input", handleOverflow);

    return () => {
      textareaElement.removeEventListener("input", handleResize);
      textareaElement.removeEventListener("input", handleOverflow);
    };
  }, [ref]);
};
