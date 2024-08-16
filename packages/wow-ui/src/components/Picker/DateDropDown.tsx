"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Calendar } from "wowds-icons";

interface DateDropDownProps {
  label: string;
  selectedValue?: string;
  placeholder?: string;
  onClick: () => void;
}

const DateDropDown = ({
  placeholder,
  label,
  selectedValue,
  onClick,
}: DateDropDownProps) => {
  return (
    <Flex direction="column" gap="0.75rem" onClick={onClick}>
      <styled.span color="sub" textStyle="label2">
        {label}
      </styled.span>
      <styled.button
        alignItems="center"
        aria-haspopup={true}
        className={dropdownStyle()}
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        outline="none"
        type="button"
      >
        <styled.div
          className={placeholderStyle({
            type: selectedValue ? "selected" : "default",
          })}
        >
          {selectedValue ? selectedValue : placeholder}
        </styled.div>
        <Calendar stroke="outline" />
      </styled.button>
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
    backgroundColor: "background",

    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",

    paddingY: "xs",
    paddingX: "sm",
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
