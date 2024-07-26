"use client";

import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import { useDropDownContext } from "../../components/DropDown/context/DropDownContext";

/**
 * @description 드롭다운 옵션의 props입니다.
 *
 * @param {boolean} [focused] 옵션이 포커스된 상태인지 여부를 나타냅니다.
 * @param {boolean} [selected] 옵션이 선택된 상태인지 여부를 나타냅니다.
 * @param {string} value 옵션의 값입니다.
 * @param {() => void} [onClick] 옵션이 클릭되었을 때 호출되는 함수입니다.
 * @param {React.ReactNode} [text] 드롭다운 옵션에 들어갈 텍스트.
 */
export interface DropDownOptionProps {
  focused?: boolean;
  selected?: boolean;
  value: string;
  onClick?: () => void;
  text: ReactNode;
}

const DropDownOption = forwardRef<HTMLDivElement, DropDownOptionProps>(
  function Option({ value, onClick, text }, ref) {
    const { focusedValue, selectedValue, handleSelect } = useDropDownContext();
    const isSelected = selectedValue === value;
    const isFocused = focusedValue !== null && focusedValue === value;

    const handleOptionClick = (value: string, onClick?: () => void) => {
      if (onClick) onClick();
      handleSelect(value);
    };
    return (
      <styled.div
        id={`dropdown-option-${value}`}
        ref={ref}
        tabIndex={-1}
        className={optionStyle({
          type: isSelected ? "selected" : isFocused ? "focused" : "default",
        })}
        onClick={() => {
          handleOptionClick(value, onClick);
        }}
      >
        {text}
      </styled.div>
    );
  }
);

const optionStyle = cva({
  base: {
    outline: "none",
    textStyle: "body1",
    paddingX: "sm",
    paddingY: "xs",
  },
  variants: {
    type: {
      default: {
        color: "sub",
        _hover: {
          color: "blueHover",
        },
      },
      focused: {
        color: "blueHover",
      },
      selected: {
        color: "textBlack",
        backgroundColor: "blueBackgroundPressed",
      },
    },
  },
});

export default DropDownOption;
