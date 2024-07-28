"use client";

import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { forwardRef, useCallback, useEffect } from "react";

import { useDropDownContext } from "../../components/DropDown/context/DropDownContext";
import { useCollection } from "./context/CollectionContext";

/**
 * @description DropDown의 옵션을 나타내는 DropDownOption 컴포넌트입니다.
 *
 * @param {string} value 옵션의 값입니다.
 * @param {() => void} [onClick] 옵션이 클릭되었을 때 호출되는 함수입니다.
 * @param {React.ReactNode} [text] 드롭다운 옵션에 들어갈 텍스트.
 */
export interface DropDownOptionProps {
  value: string;
  onClick?: () => void;
  text: ReactNode;
}

const DropDownOption = forwardRef<HTMLLIElement, DropDownOptionProps>(
  function Option({ value, onClick, text }, ref) {
    const { focusedValue, selectedValue, handleSelect } = useDropDownContext();
    const isSelected = selectedValue === value;
    const isFocused = focusedValue !== null && focusedValue === value;

    const handleOptionClick = useCallback(
      (value: string, onClick?: () => void) => {
        if (onClick) onClick();
        handleSelect(value, text);
      },
      [handleSelect, text]
    );

    const itemMap = useCollection();

    useEffect(() => {
      const currentItem = itemMap.get(value);
      if (!currentItem || currentItem.text !== text) {
        itemMap.set(value, { text });
      }
    }, [itemMap, value, text]);

    return (
      <styled.li
        id={`dropdown-option-${value}`}
        ref={ref}
        role="option"
        tabIndex={isSelected ? 0 : -1}
        className={optionStyle({
          type: isSelected ? "selected" : isFocused ? "focused" : "default",
        })}
        onClick={() => {
          handleOptionClick(value, onClick);
        }}
      >
        {text}
      </styled.li>
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
