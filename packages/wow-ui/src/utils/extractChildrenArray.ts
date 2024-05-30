import type { ReactElement, ReactNode } from "react";
import { Children, Fragment, isValidElement } from "react";

export const extractChildrenArray = (children: ReactNode): ReactElement[] => {
  const childrenArray = Children.toArray(children);
  const firstElement = childrenArray[0];

  if (isValidElement(firstElement) && firstElement.type === Fragment) {
    return Children.toArray(firstElement.props.children) as ReactElement[];
  } else {
    return Children.toArray(childrenArray) as ReactElement[];
  }
};
