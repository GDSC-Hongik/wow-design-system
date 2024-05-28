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
}: RadioGroupProps) => {
  const [value, setValue] = useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      onChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        if (onChange) {
          onChange(event, event.target.value);
        }
      },
      value,
      name,
    }),
    [onChange, setValue, value, name]
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
