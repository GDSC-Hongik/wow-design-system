import type { Context } from "react";
import { useContext } from "react";

type SafeContextType<T> =
  T extends Context<infer U> ? Exclude<U, null | undefined> : never;

const useSafeContext = <T extends Context<any>>(
  context: T
): SafeContextType<T> => {
  const contextValue = useContext(context);

  if (contextValue === undefined) {
    throw new Error(`useSafeContext must be used within a context Provider`);
  }

  return contextValue as SafeContextType<T>;
};

export default useSafeContext;
