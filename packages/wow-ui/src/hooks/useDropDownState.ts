import type { KeyboardEvent, ReactNode } from "react";
import { isValidElement, useEffect, useMemo, useState } from "react";

import { useCollectionContext } from "../components/DropDown/context/CollectionContext";

interface DropDownStateProps {
  value?: string;
  defaultValue?: string;
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
  onChange,
}: DropDownStateProps) => {
  // const options = useMemo(() => {
  //   const opts: { [key: string]: ReactNode } = {};
  //   children.forEach((child) => {
  //     if (isValidElement(child)) {
  //       opts[child.props.value] = child.props.text;
  //     }
  //   });
  //   return opts;
  // }, [children]);

  // const getDefaultSelectedOption = () => {
  //   if (defaultValue && options[defaultValue]) {
  //     return {
  //       selectedValue: defaultValue,
  //       selectedText: options[defaultValue],
  //     };
  //   }
  //   return { selectedValue: "", selectedText: "" };
  // };

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
    selectedValue: selectedValue,
    open,
    setOpen,
    focusedValue,
    setFocusedValue,
    handleSelect,
    //handleKeyDown,
  };
};

export default useDropDownState;
