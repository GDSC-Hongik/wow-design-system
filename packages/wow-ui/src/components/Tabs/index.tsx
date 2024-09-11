"use client";

import { css } from "@styled-system/css";
import { clsx } from "clsx";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

import { CollectionProvider } from "@/components/Tabs/contexts/CollectionContext";
import { TabsContext } from "@/components/Tabs/contexts/TabsContext";
import type { DefaultProps } from "@/types/DefaultProps";

/**
 * @description Tabs 컴포넌트는 탭을 통해 콘텐츠를 선택할 수 있는 컴포넌트입니다.
 * @param {string} [defaultValue] - 탭의 기본값입니다.
 * @param {string} [value] - 현재 선택된 탭의 값입니다.
 * @param {string} [label] - 각 탭을 구분할 수 있는 레이블입니다.
 * @param {(value: string) => void} [onChange] - 탭이 변경될 때 호출되는 함수입니다.
 * @param {CSSProperties} [style] - 탭 컴포넌트의 커스텀 스타일.
 * @param {string} [className] - 탭 컴포넌트에 전달할 커스텀 클래스.
 */
export interface TabsProps extends PropsWithChildren, DefaultProps {
  defaultValue?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}
const Tabs = ({
  defaultValue,
  value,
  label = "default-tab",
  children,
  onChange,
  className,
  style,
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
    <div className={clsx(tabsContainerStyle, className)} style={style}>
      <TabsContext.Provider
        value={{
          value: selectedValue,
          setSelectedValue: handleSelect,
          label,
        }}
      >
        <CollectionProvider>{children}</CollectionProvider>
      </TabsContext.Provider>
    </div>
  );
};

export default Tabs;

const tabsContainerStyle = css({
  width: "100%",
});
