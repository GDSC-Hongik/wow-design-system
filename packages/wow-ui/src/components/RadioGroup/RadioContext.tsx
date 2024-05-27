import { createContext } from "react";

export interface RadioContextProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const RadioContext = createContext<RadioContextProps | undefined>(undefined);

export default RadioContext;
