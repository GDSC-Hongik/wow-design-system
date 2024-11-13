import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";

import Checkbox from "@/components/Checkbox";
import { useTableContext } from "@/components/Table/TableContext";
import Th from "@/components/Table/Th";

interface TheadProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ children, ...rest }: TheadProps, ref: Ref<HTMLTableSectionElement>) => {
    const {
      selectedRows,
      showCheckbox,
      handleHeaderCheckboxChange,
      rowValues,
    } = useTableContext();

    const isHeaderCheckboxChecked =
      selectedRows.size === rowValues?.size && rowValues.size > 0;
    return (
      <styled.thead
        position="sticky"
        ref={ref}
        textAlign="start"
        top="0"
        zIndex="1"
        {...rest}
      >
        <tr>
          {showCheckbox && (
            <Th style={tableCheckBoxStyle}>
              <Checkbox
                checked={isHeaderCheckboxChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </Th>
          )}
          {children}
        </tr>
      </styled.thead>
    );
  }
);

export default Thead;

const tableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
