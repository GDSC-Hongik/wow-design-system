import type { ReactNode } from "react";
import { Children, isValidElement, useCallback, useMemo } from "react";

const useFlattenChildren = (children: ReactNode): ReactNode[] => {
  const flattenChildren = useCallback((children: ReactNode): ReactNode[] => {
    const result: ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.props.children) {
        result.push(...flattenChildren(child.props.children));
      } else {
        result.push(child);
      }
    });
    return result;
  }, []);

  return useMemo(() => flattenChildren(children), [children, flattenChildren]);
};

export default useFlattenChildren;
