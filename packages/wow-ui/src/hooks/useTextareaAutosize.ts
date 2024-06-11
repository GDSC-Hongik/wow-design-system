import { type RefObject, useEffect } from "react";

const TEXTAREA_LINE_HEIGHT = 2.625;
const MAX_TEXTAREA_HEIGHT = 120;

export const useTextareaAutosize = (ref: RefObject<HTMLTextAreaElement>) => {
  useEffect(() => {
    const textareaElement = ref.current;
    if (!textareaElement) return;

    const placeholderLines = textareaElement.placeholder.split("\n").length;
    const placeholderHeight = placeholderLines * TEXTAREA_LINE_HEIGHT;

    const setInitialHeight = () => {
      textareaElement.style.height = `${placeholderHeight}rem`;
    };

    const handleResize = () => {
      textareaElement.style.height = "auto";
      textareaElement.style.height = `${Math.max(placeholderHeight, textareaElement.scrollHeight)}px`;
    };

    const handleOverflow = () => {
      textareaElement.style.overflowY =
        textareaElement.scrollHeight > MAX_TEXTAREA_HEIGHT
          ? "scroll"
          : "hidden";
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
