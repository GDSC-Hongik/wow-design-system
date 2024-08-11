import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { Children, forwardRef, useEffect, useState } from "react";

import useCheckTable from "@/hooks/useCheckTableContext";

interface TableBodyProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableBodyContainer = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children } = props;
    const [rowCount, setRowCount] = useState(0);
    useEffect(() => {
      // children의 개수에 따라 rowCount 업데이트
      const count = Children.count(children);
      setRowCount(count);
    }, [children]);

    const value = useCheckTable({ rowCount });

    return (
      <styled.tbody ref={ref} {...props} textAlign="start">
        {children}
      </styled.tbody>
    );
  }
);

export default TableBodyContainer;
