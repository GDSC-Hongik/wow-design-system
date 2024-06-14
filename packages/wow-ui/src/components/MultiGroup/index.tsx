"use client";

import { Flex } from "@styled-system/jsx";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import MultiGroupContext from "@/components/MultiGroup/MultiGroupContext";

export type VariantType = "checkbox" | "switch";
type PositionType = "vertical" | "horizontal";

/**
 * @description 여러 체크박스 또는 스위치 컴포넌트를 하나의 그룹으로 묶는 컴포넌트입니다.
 *
 * @template T 체크박스 또는 스위치 타입.
 *
 * @param {T} variant 체크박스 또는 스위치 타입.
 * @param {T extends "checkbox" ? PositionType : undefined} [position] 체크박스 그룹의 방향. (가로 또는 세로).
 * @param {T extends "checkbox" ? number : undefined} [gap] 체크박스 사이의 간격.
 * @param {ReactNode} children 그룹 내에 포함될 체크박스 또는 스위치 컴포넌트들.
 * @param {string} [name] 그룹명.
 * @param {string[]} [defaultValue] 기본으로 선택된 값들의 배열.
 * @param {string[]} [checked] 외부에서 제어할 활성 상태.
 * @param {(value: string) => void} [onChange] 외부 활성 상태가 변경될 때 호출되는 함수.
 * @param {boolean} [disabled] 그룹 내 모든 체크박스 또는 스위치가 비활성화되어 있는지 여부.
 * @param {string} [className] 그룹에 전달하는 커스텀 클래스.
 * @param {CSSProperties} [style] 그룹의 커스텀 스타일.
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
  gap,
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
      gap={gap ? gap : "xs"}
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
