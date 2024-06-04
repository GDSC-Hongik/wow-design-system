"use client";
import { Flex } from "@styled-system/jsx";
import type { ChangeEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import type { RadioContextProps } from "./RadioContext";
import RadioContext from "./RadioContext";

/**
 * @description 라디오 버튼들을 하나의 그룹으로 묶는 라디오그룹 컴포넌트의 속성을 정의합니다.
 *
 * @param {ReactNode} children - 라디오 그룹의 자식 요소들.
 * @param {string} defaultValue - 라디오 그룹의 초기 선택값.
 */

export interface RadioGroupProps extends RadioContextProps {
  children: ReactNode;
  defaultValue: string;
}

const RadioGroup = ({
  children,
  name,
  defaultValue,
  onChange,
  value,
  disabled,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      onChange(event: ChangeEvent<HTMLInputElement>) {
        setSelected(event.target.value);
        if (onChange) {
          onChange(event);
        }
      },
      value: value ? value : selected,
      name,
      disabled,
    }),
    [onChange, setSelected, value, selected, name, disabled]
  );

  return (
    <Flex direction="column" gap="0.5rem" role="radiogroup" width="fit-content">
      <RadioContext.Provider value={contextValue}>
        {children}
      </RadioContext.Provider>
    </Flex>
  );
};

export default RadioGroup;
