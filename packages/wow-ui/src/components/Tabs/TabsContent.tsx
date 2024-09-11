"use client";

import { forwardRef, type PropsWithChildren } from "react";

import { useTabContext } from "./contexts/TabContext";

interface TabsContentProps extends PropsWithChildren {
  value: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value: tabValue, children }: TabsContentProps, ref) => {
    const { value, label } = useTabContext();
    const selected = tabValue === value;
    if (!selected) return null;

    return (
      <div
        aria-labelledby={`${label}-tab-trigger-${value}`}
        id={`${label}-tab-content-${value}`}
        ref={ref}
        role="tabpanel"
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = "TabsContent";
