import type { ReactNode } from "react";
import { Children, isValidElement, useLayoutEffect, useState } from "react";

import Table from "@/components/Table/Table";

const useCountRow = (children: ReactNode) => {
  const [rowValues, setRowValues] = useState<number[]>([]);

  useLayoutEffect(() => {
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === Table.Tbody) {
        Children.forEach(child.props.children, (row) => {
          if (isValidElement(row) && row.type === Table.Tr) {
            const rowProps = row.props as { value: number };
            setRowValues((prevValues) => [...prevValues, rowProps.value]);
          }
        });
      }
    });
  }, []);

  return { rowValues };
};

export default useCountRow;
