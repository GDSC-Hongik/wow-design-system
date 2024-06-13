"use client";

import { Flex } from "@styled-system/jsx";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import MultiGroupContext from "@/components/MultiGroup/MultiGroupContext";

export type VariantType = "checkbox" | "switch";
type PositionType = "vertical" | "horizontal";

/**
 * @description 여러 체크박스, 또는 스위치 컴포넌트를 하나의 그룹으로 묶는 컴포넌트입니다.
 */
export interface MultiGroupProps<T extends VariantType> {
  variant: T;
  position?: T extends "checkbox" ? PositionType : undefined;
  gap?: T extends "checkbox" ? number : undefined;
  children: ReactNode;
  name?: string;
  defaultValue?: string[];
  checked?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MultiGroup = <T extends VariantType>({
  position,
  gap: gapProp,
  children,
  name,
  defaultValue,
  checked: checkedProp,
  onChange,
  disabled,
  ...rest
}: MultiGroupProps<T>) => {
  const [checked, setChecked] = useState<string[]>(
    checkedProp || defaultValue || []
  );

  useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value);
      } else {
        if (!checked.includes(value)) {
          setChecked((prev) => [...prev, value]);
        } else {
          setChecked((prev) => prev.filter((item) => item !== value));
        }
      }
    },
    [checked, onChange]
  );

  const contextValue = useMemo(
    () => ({
      name,
      checked,
      onChange: handleChange,
      disabled,
    }),
    [name, checked, handleChange, disabled]
  );

  return (
    <Flex
      direction={position === "horizontal" ? "row" : "column"}
      gap={gapProp ? gapProp : "xs"}
      width="fit-content"
      {...rest}
    >
      <MultiGroupContext.Provider value={contextValue}>
        {children}
      </MultiGroupContext.Provider>
    </Flex>
  );
};

export default MultiGroup;
