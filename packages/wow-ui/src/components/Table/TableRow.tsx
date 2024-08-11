import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef, useId } from "react";

import Checkbox from "@/components/Checkbox";
import { useTableVariantContext } from "@/components/Table/context/TableVariantContext";
import TableCell from "@/components/Table/TableCell";
interface TableRowProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { children } = props;
    const id = useId();
    const { variant } = useTableVariantContext();
    return (
      <styled.tr
        color="textBlack"
        height="44px"
        minWidth="100%"
        ref={ref}
        textStyle="body2"
        {...props}
      >
        {variant === "checkable" && (
          <TableCell style={{ width: "43px" }}>
            <Checkbox value={id} />
          </TableCell>
        )}
        {children}
      </styled.tr>
    );
  }
);

export default TableRow;
