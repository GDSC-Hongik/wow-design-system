import type { ChangeEvent } from "react";
import { createContext } from "react";

export interface RadioContextProps {
  name: string | undefined;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const RadioContext = createContext<RadioContextProps>({
  name: undefined,
  value: undefined,
  onChange: () => {},
});

export default RadioContext;
