import type { Context } from "react";
import { useContext } from "react";

const useSafeContext = <T>(context: Context<T | undefined>): T => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw new Error(`useSafeContext must be used within a context provider`);
  }
  return contextValue;
};

export default useSafeContext;
