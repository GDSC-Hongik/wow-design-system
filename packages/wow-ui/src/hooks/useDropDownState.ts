import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => void;
}

const useDropDownState = ({
  value,
  defaultValue,
  onChange,
}: DropDownStateProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelect = (selectedValue: string, selectedText: ReactNode) => {
    if (value === undefined) {
      setSelectedValue(selectedValue);
    }
    if (onChange) {
      onChange({ selectedValue, selectedText });
    }
    setOpen(false);
  };

  return {
    selectedValue,
    open,
    setOpen,
    focusedValue,
    setFocusedValue,
    handleSelect,
  };
};

export default useDropDownState;
