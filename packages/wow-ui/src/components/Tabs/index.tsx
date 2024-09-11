"use client";

import { type PropsWithChildren, useEffect, useState } from "react";

import { CollectionProvider } from "@/components/Tabs/contexts/CollectionContext";
import { TabContext } from "@/components/Tabs/contexts/TabContext";

interface TabsProps extends PropsWithChildren {
  defaultValue?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}
export const Tabs = ({
  defaultValue,
  value,
  label = "default-tab",
  children,
  onChange,
}: TabsProps) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue ?? value ?? ""
  );
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);
  const handleSelect = (selectedValue: string) => {
    if (value === undefined) {
      setSelectedValue(selectedValue);
    }
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <TabContext.Provider
      value={{
        value: selectedValue,
        setSelectedValue: handleSelect,
        label,
      }}
    >
      <CollectionProvider>{children}</CollectionProvider>
    </TabContext.Provider>
  );
};
