import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import { useEffect, useState } from "react";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
  children: ReactNode[];
  onChange?: (value: string) => void;
}

const useDropDownState = ({
  value,
  defaultValue,
  children,
  onChange,
}: DropDownStateProps) => {
  const [selected, setSelected] = useState(defaultValue || "");
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const handleSelect = (option: string) => {
    if (value === undefined) {
      setSelected(option);
    }
    setOpen(false);
    onChange && onChange(option);
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
    selected,
    open,
    setOpen,
    focusedIndex,
    setFocusedIndex,
    handleSelect,
    handleKeyDown,
  };
};

export default useDropDownState;
