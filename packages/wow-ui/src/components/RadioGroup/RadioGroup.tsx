"use client";
import { Flex } from "@styled-system/jsx";
import type { ChangeEvent, ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";

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
  const [selected, setSelected] = useState<string>(defaultValue);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange ? onChange(event) : setSelected(event.target.value);
    },
    [setSelected, onChange]
  );

  const contextValue = useMemo(
    () => ({
      onChange: handleChange,
      value: value ? value : selected,
      name,
      disabled,
    }),
    [handleChange, value, selected, name, disabled]
  );

  return (
    <Flex direction="column" gap="xs" role="radiogroup" width="fit-content">
      <RadioContext.Provider value={contextValue}>
        {children}
      </RadioContext.Provider>
    </Flex>
  );
};

export default RadioGroup;
