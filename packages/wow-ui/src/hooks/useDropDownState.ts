import type { KeyboardEvent, ReactNode } from "react";
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

interface SelectedOption {
  selectedValue: string;
  selectedText: ReactNode;
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

  const getDefaultSelectedOption = () => {
    if (defaultValue && options[defaultValue]) {
      return {
        selectedValue: defaultValue,
        selectedText: options[defaultValue],
      };
    }
    return { selectedValue: "", selectedText: "" };
  };

  const [selectedOption, setSelectedOption] = useState<SelectedOption>(
    getDefaultSelectedOption()
  );
  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

  useEffect(() => {
    if (value !== undefined && options[value]) {
      setSelectedOption({ selectedValue: value, selectedText: options[value] });
    }
  }, [options, value]);

  const handleSelect = (selectedValue: string) => {
    const selectedText = options[selectedValue];
    if (value === undefined) {
      setSelectedOption({ selectedValue, selectedText });
    }
    if (onChange) {
      onChange({ selectedValue, selectedText });
    }
    setOpen(false);
  };

  const updateFocusedValue = (direction: number) => {
    const values = Object.keys(options);
    setFocusedValue((prevValue) => {
      const currentIndex = values.indexOf(prevValue ?? "");
      const nextIndex =
        (currentIndex + direction + values.length) % values.length;
      return values[nextIndex] ?? "";
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!open) return;

    const { key } = event;

    if (key === "ArrowDown") {
      updateFocusedValue(1);
      event.preventDefault();
    } else if (key === "ArrowUp") {
      updateFocusedValue(-1);
      event.preventDefault();
    } else if (key === "Enter" && focusedValue !== null) {
      handleSelect(focusedValue);
      event.preventDefault();
    }
  };

  return {
    selectedValue: selectedOption.selectedValue,
    selectedText: selectedOption.selectedText,
    open,
    setOpen,
    focusedValue,
    setFocusedValue,
    handleSelect,
    handleKeyDown,
  };
};

export default useDropDownState;
