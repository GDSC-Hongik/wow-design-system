import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => void;
  dropdownId?: string;
}

const useDropDownState = ({
  value,
  defaultValue,
  onChange,
  dropdownId,
}: DropDownStateProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
    if (defaultValue !== undefined) {
      setSelectedValue(defaultValue);
    }
  }, [value, defaultValue]);

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
    dropdownId,
  };
};

export default useDropDownState;
