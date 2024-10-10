"use client";

import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

import type { DefaultProps } from "@/types/DefaultProps";

import { useTabsContext } from "./contexts/TabsContext";

/**
 * @description TabsContent 컴포넌트는 각 Tab에 해당하는 콘텐츠입니다.
 * @param {string} value - TabTrigger의 value와 일치하는 값입니다.
 * @param {string} [className] - TabsContent에 전달할 커스텀 클래스.
 * @param {CSSProperties} [style] - TabsContent에 전달할 커스텀 스타일.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 * @param {ReactNode} children - TabsContent의 자식 요소.
 */
interface TabsContentProps extends PropsWithChildren, DefaultProps {
  value: string;
}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value: tabValue, children }: TabsContentProps, ref) => {
    const { value, label } = useTabsContext();
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

export default TabsContent;
