"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Calendar } from "wowds-icons";

interface DateDropDownPropsBase {
  label?: string;
  placeholder?: string;
  onClick: () => void;
}

interface SingleDateDropDownProps extends DateDropDownPropsBase {
  mode: "single";
  selectedValue?: string;
}

interface RangeDateDropDownProps extends DateDropDownPropsBase {
  mode: "range";
  selectedValue?: { start?: string; end?: string };
}

type DateDropDownProps = SingleDateDropDownProps | RangeDateDropDownProps;

const DateDropDown = ({
  mode,
  placeholder,
  label,
  selectedValue,
  onClick,
}: DateDropDownProps) => {
  const findRenderString = () => {
    if (!selectedValue) return placeholder;
    if (mode === "range" && selectedValue.start) return selectedValue.start;
    if (mode === "single") return selectedValue;
  };

  return (
    <Flex direction="column" gap="0.75rem" onClick={onClick}>
      {label && (
        <styled.span color="sub" textStyle="label2">
          {label}
        </styled.span>
      )}
      <button aria-haspopup={true} className={dropdownStyle()}>
        <div
          className={placeholderStyle({
            type: selectedValue ? "selected" : "default",
          })}
        >
          {findRenderString()}
        </div>
        {mode === "range" && (
          <div
            className={placeholderStyle({
              type: selectedValue ? "selected" : "default",
            })}
          >
            {selectedValue ? `~ ${selectedValue.end}` : placeholder}
          </div>
        )}
        <Calendar stroke="outline" />
      </button>
    </Flex>
  );
};

export default DateDropDown;

const dropdownStyle = cva({
  base: {
    lg: {
      maxWidth: "22.375rem",
    },
    smDown: {
      width: "100%",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",
    outline: "none",

    paddingY: "xs",
    paddingX: "sm",

    backgroundColor: "background",
    cursor: "pointer",
  },
});

const placeholderStyle = cva({
  base: {
    textStyle: "body1",
  },
  variants: {
    type: {
      default: {
        color: "outline",
        _hover: {
          color: "sub",
        },
      },
      focused: {
        color: "primary",
      },
      selected: {
        color: "textBlack",
      },
    },
  },
});
