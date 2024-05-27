import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";

import type { RadioContextProps } from "@/components/RadioButton/RadioContext";
import RadioContext from "@/components/RadioButton/RadioContext";

export interface RadioGroupProps extends RadioContextProps {
  children: ReactNode;
}

const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return (
    <Flex direction="column" gap="0.5rem">
      <RadioContext.Provider value={props}>{children}</RadioContext.Provider>
    </Flex>
  );
};

export default RadioGroup;
