import { createContext } from "react";

export type MultiGroupContextProps = {
  name?: string;
  checked?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const MultiGroupContext = createContext<MultiGroupContextProps>({
  name: "MultiGroupName",
  checked: undefined,
  onChange: undefined,
  disabled: false,
});

export default MultiGroupContext;
