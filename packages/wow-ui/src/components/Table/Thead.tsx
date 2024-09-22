import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";

import Checkbox from "@/components/Checkbox";
import { TableContext } from "@/components/Table/Table";
import Th from "@/components/Table/Th";
import useSafeContext from "@/hooks/useSafeContext";

interface TheadProps extends PropsWithChildren {}

const Thead = (props: TheadProps) => {
  const { selectedRows, showCheckbox, handleHeaderCheckboxChange, rowValue } =
    useSafeContext(TableContext);

  const isHeaderCheckboxChecked =
    selectedRows.length === rowValue.length && rowValue.length > 0;
  return (
    <styled.thead position="sticky" textAlign="start" top="0" zIndex="1">
      <tr>
        {showCheckbox && (
          <Th style={TableCheckBoxStyle}>
            <Checkbox
              checked={isHeaderCheckboxChecked}
              onChange={handleHeaderCheckboxChange}
            />
          </Th>
        )}
        {props.children}
      </tr>
    </styled.thead>
  );
};

export default Thead;

const TableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
