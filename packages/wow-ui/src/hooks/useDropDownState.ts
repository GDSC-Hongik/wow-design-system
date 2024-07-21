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
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

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
    const values = Object.keys(options);

    if (key === "ArrowDown") {
      setFocusedValue((prevValue) => {
        const currentIndex = values.indexOf(prevValue ?? "");
        const nextIndex =
          currentIndex === -1 ? 0 : (currentIndex + 1) % values.length;
        return values[nextIndex];
      });
      event.preventDefault();
    } else if (key === "ArrowUp") {
      setFocusedValue((prevValue) => {
        const currentIndex = values.indexOf(prevValue ?? "");
        const nextIndex =
          currentIndex === -1
            ? values.length - 1
            : (currentIndex - 1 + values.length) % values.length;
        return values[nextIndex];
      });
      event.preventDefault();
    } else if (key === "Enter" && focusedValue !== null) {
      handleSelect(focusedValue);
      event.preventDefault();
    }
  };
  return {
    selectedValue,
    selectedText,
    open,
    setOpen,
    focusedValue,
    setFocusedValue,
    handleSelect,
    handleKeyDown,
  };
};

export default useDropDownState;
