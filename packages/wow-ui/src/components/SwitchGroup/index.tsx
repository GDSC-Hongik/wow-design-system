"use client";

import { Flex } from "@styled-system/jsx";
import type { ReactElement, ReactNode } from "react";
import { cloneElement, useMemo, useState } from "react";

import { extractChildrenArray } from "@/utils/extractChildrenArray";

const init = (value: boolean[], childrenArray: ReactElement[]) => {
  const initialValue = value.slice(0, childrenArray.length);
  const remainingLength = childrenArray.length - initialValue.length;

  return [
    ...initialValue,
    ...Array.from(
      { length: remainingLength },
      (_, index) =>
        childrenArray[index]?.props.isChecked ??
        childrenArray[index]?.props.defaultChecked ??
        false
    ),
  ];
};

/**
 * @param {ReactNode} children 렌더링할 자식 요소 (Switch 컴포넌트)
 * @param {boolean[]} [value] 외부에서 제어할 활성 상태.
 * @param {(index: number) => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 */
export interface SwitchGroupProps {
  children: ReactNode;
  value?: boolean[];
  onChange?: (index: number) => void;
}

const SwitchGroup = ({ children, value = [], onChange }: SwitchGroupProps) => {
  const childrenArray = useMemo(
    () => extractChildrenArray(children),
    [children]
  );

  const [checkedStates, setCheckedStates] = useState(() =>
    init(value, childrenArray)
  );
  const [disabledStates] = useState(() =>
    childrenArray.map((child) => !!child.props.isDisabled)
  );

  const handleChange = (index: number) => {
    if (!disabledStates[index]) {
      setCheckedStates((prevStates) =>
        prevStates.map((prevState, i) => (i === index ? !prevState : prevState))
      );
      onChange?.(index);
    }
  };

  return (
    <Flex direction="column" display="inline-flex" gap={8}>
      {childrenArray.map((child, index) => {
        return cloneElement(child, {
          key: index,
          isChecked: checkedStates[index],
          isDisabled: disabledStates[index],
          onChange: () => handleChange(index),
        });
      })}
    </Flex>
  );
};

export default SwitchGroup;
