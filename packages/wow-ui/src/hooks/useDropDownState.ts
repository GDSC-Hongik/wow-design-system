import type { KeyboardEvent, ReactElement } from "react";
import { Children, isValidElement, useEffect, useState } from "react";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
  children: React.ReactNode;
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

  useEffect(() => {
    if (open) {
      const selectedIndex = Children.toArray(children).findIndex(
        (child) => isValidElement(child) && child.props.value === selected
      );
      setFocusedIndex(selectedIndex !== -1 ? selectedIndex : null);
    } else {
      setFocusedIndex(null);
    }
  }, [open, children, selected]);

  const handleSelect = (option: string) => {
    if (value === undefined) {
      setSelected(option);
    }
    setOpen(false);
    onChange && onChange(option);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        setOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          const nextIndex =
            prevIndex === null ? 0 : (prevIndex + 1) % Children.count(children);
          return nextIndex;
        });
        event.preventDefault();
        break;
      case "ArrowUp":
        setFocusedIndex((prevIndex) => {
          const nextIndex =
            prevIndex === null
              ? Children.count(children) - 1
              : (prevIndex - 1 + Children.count(children)) %
                Children.count(children);
          return nextIndex;
        });
        event.preventDefault();
        break;
      case "Enter":
        if (focusedIndex !== null) {
          const child = Children.toArray(children)[
            focusedIndex
          ] as ReactElement;
          handleSelect(child.props.value);
        }
        event.preventDefault();
        break;
      default:
        break;
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
