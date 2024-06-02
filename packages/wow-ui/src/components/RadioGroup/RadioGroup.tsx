"use client";
import { Flex } from "@styled-system/jsx";
import type { ChangeEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import type { RadioContextProps } from "./RadioContext";
import RadioContext from "./RadioContext";

export interface RadioGroupProps extends RadioContextProps {
  children: ReactNode;
  name: string;
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
