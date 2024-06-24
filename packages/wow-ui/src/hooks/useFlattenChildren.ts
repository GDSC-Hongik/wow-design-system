import { Children, isValidElement, useCallback, useMemo } from "react";

const useFlattenChildren = (children: React.ReactNode): React.ReactNode[] => {
  const flattenChildren = useCallback(
    (children: React.ReactNode): React.ReactNode[] => {
      const result: React.ReactNode[] = [];
      Children.forEach(children, (child) => {
        if (isValidElement(child) && child.props.children) {
          result.push(...flattenChildren(child.props.children));
        } else {
          result.push(child);
        }
      });
      return result;
    },
    []
  );

  return useMemo(() => flattenChildren(children), [children, flattenChildren]);
};

export default useFlattenChildren;
