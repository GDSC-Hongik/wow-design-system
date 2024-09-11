"use client";

import { cva } from "@styled-system/css";
import { forwardRef, type PropsWithChildren, useEffect, useRef } from "react";

import { useMergeRefs } from "@/hooks/useMergeRefs";

import { useCollectionContext } from "./contexts/CollectionContext";
import { useTabContext } from "./contexts/TabContext";

interface TapTriggerProps extends PropsWithChildren {
  value: string;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TapTriggerProps>(
  ({ value, children }: TapTriggerProps, ref) => {
    const { value: selectedValue, setSelectedValue, label } = useTabContext();
    const selected = selectedValue === value;

    const handleClickTabTrigger = () => {
      setSelectedValue(value);
    };

    const { values } = useCollectionContext();
    const internalButtonRef = useRef<HTMLButtonElement>(null);
    const buttonRef = useMergeRefs(ref, internalButtonRef);

    useEffect(() => {
      const currentItem = values?.find((item) => item === value);
      if (!currentItem) {
        values?.push(value);
      }
      if (selected && internalButtonRef.current) {
        internalButtonRef.current.focus();
      }
    }, [values, selected, value]);

    return (
      <button
        aria-controls={`${label}-tab-content-${value}`}
        aria-selected={selected}
        className={tabTriggerStyle({ type: selected ? "selected" : "default" })}
        id={`${label}-tab-trigger-${value}`}
        ref={buttonRef}
        role="tab"
        tabIndex={selected ? 0 : -1}
        onClick={handleClickTabTrigger}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

const tabTriggerStyle = cva({
  base: {
    textStyle: "label1",
    paddingY: "sm",
    paddingX: "14px",
    borderBottom: "1px solid",
    borderColor: "outline",
    color: "sub",
    outline: "none",
    cursor: "pointer",
  },
  variants: {
    type: {
      selected: {
        color: "primary",
        borderColor: "primary",
      },
      default: {},
    },
  },
});
