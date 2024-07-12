import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import { isValidElement, useEffect, useMemo, useState } from "react";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
  children: ReactNode[];
  onChange?: (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => void;
}

const useDropDownState = ({
  value,
  defaultValue,
  children,
  onChange,
}: DropDownStateProps) => {
  const options = useMemo(() => {
    const opts: { [key: string]: ReactNode } = {};
    children.forEach((child) => {
      if (isValidElement(child)) {
        opts[child.props.value] = child.props.text;
      }
    });
    return opts;
  }, [children]);

  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [selectedText, setSelectedText] = useState(
    defaultValue ? options[defaultValue] : ""
  );
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
      setSelectedText(options[value]);
    }
  }, [options, value]);

  const handleSelect = (option: string) => {
    if (value === undefined) {
      setSelectedValue(option);
      setSelectedText(options[option]);
    }
    setOpen(false);
    if (onChange) {
      onChange({ selectedValue: option, selectedText: options[option] });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!open) return;

    const { key } = event;

    if (key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null ? 0 : (prevIndex + 1) % children.length
      );
      event.preventDefault();
    } else if (key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null
          ? children.length - 1
          : (prevIndex - 1 + children.length) % children.length
      );
      event.preventDefault();
    } else if (key === "Enter" && focusedIndex !== null) {
      const child = children[focusedIndex] as ReactElement;
      handleSelect(child.props.value);
      event.preventDefault();
    }
  };

  return {
    selectedValue,
    selectedText,
    open,
    setOpen,
    focusedIndex,
    setFocusedIndex,
    handleSelect,
    handleKeyDown,
  };
};

export default useDropDownState;
