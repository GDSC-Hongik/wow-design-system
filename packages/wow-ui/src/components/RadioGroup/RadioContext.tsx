import type { ChangeEvent } from "react";
import { createContext } from "react";

export interface RadioContextProps {
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const RadioContext = createContext<RadioContextProps>({
  value: undefined,
  onChange: () => {},
});

export default RadioContext;
