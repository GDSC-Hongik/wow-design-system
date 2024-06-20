import { Children, isValidElement, useMemo } from "react";

const useFlattenChildren = (children: React.ReactNode): React.ReactNode[] => {
  const flattenChildren = (children: React.ReactNode): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.props.children) {
        result.push(...flattenChildren(child.props.children));
      } else {
        result.push(child);
      }
    });
    return result;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => flattenChildren(children), [children]);
};

export default useFlattenChildren;
