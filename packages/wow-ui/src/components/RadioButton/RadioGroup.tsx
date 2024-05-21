import type { ReactNode } from "react";

import type { RadioContextProps } from "@/components/RadioButton/RadioContext";
import RadioContext from "@/components/RadioButton/RadioContext";

export interface RadioGroupProps extends RadioContextProps {
  children: ReactNode;
  label?: string;
}

const RadioGroup = ({ label, children, ...props }: RadioGroupProps) => {
  return (
    <div>
      <span>{label}</span>
      <RadioContext.Provider value={props}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
