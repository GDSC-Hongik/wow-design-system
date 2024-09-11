"use client";

import type { PropsWithChildren } from "react";

import { useTabContext } from "./contexts/TabContext";

interface TabsContentProps extends PropsWithChildren {
  value: string;
}
export const TabsContent = ({
  value: tabValue,
  children,
}: TabsContentProps) => {
  const { value, label } = useTabContext();
  const selected = tabValue === value;
  if (!selected) return;

  return (
    <div
      aria-labelledby={`${label}-tab-trigger-${value}`}
      id={`${label}-tab-content-${value}`}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  );
};
