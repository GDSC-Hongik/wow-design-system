import { styled } from "@styled-system/jsx";
import {
  createContext,
  type CSSProperties,
  type PropsWithChildren,
} from "react";

import Checkbox from "@/components/Checkbox";
import { TableContext } from "@/components/Table/Table";
import Td from "@/components/Table/Td";
import useSafeContext from "@/hooks/useSafeContext";

interface TableRowProps extends PropsWithChildren {
  style?: CSSProperties;
  value?: number;
  id?: string;
}

export const TableCheckedContext = createContext<number | undefined>(0);

const TableRow = (props: TableRowProps) => {
  const { children, value } = props;
  const { selectedRows, handleRowCheckboxChange, showCheckbox } =
    useSafeContext(TableContext);
  const isSelected = selectedRows.some((row: number) => row === value);
  return (
    <TableCheckedContext.Provider value={value}>
      <styled.tr
        color="textBlack"
        data-value={props.id}
        height="44px"
        minWidth="100%"
        role="row"
        textStyle="body2"
        {...props}
      >
        {showCheckbox && (
          <Td style={TableCheckBoxStyle}>
            <Checkbox
              checked={isSelected}
              onChange={() => handleRowCheckboxChange(props.value)}
            />
          </Td>
        )}
        {children}
      </styled.tr>
    </TableCheckedContext.Provider>
  );
};

export default TableRow;

const TableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
