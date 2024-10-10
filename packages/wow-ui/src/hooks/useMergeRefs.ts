import type { MutableRefObject, Ref } from "react";

export function useMergeRefs<T = any>(...refs: (Ref<T> | null)[]) {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null && typeof ref === "object") {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
