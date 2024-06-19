"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { PropsWithChildren, ReactElement, SetStateAction } from "react";
import { Children, cloneElement, isValidElement, useState } from "react";

export interface DropDownProps extends PropsWithChildren {
  size?: "large" | "small";
  trigger?: ReactElement;
  label?: string;
  placeholder?: string;
}

export interface DropDownOptionProps extends PropsWithChildren {
  value: string;
  onClick?: () => void;
}

const DropDown = ({
  size = "large",
  children,
  trigger,
  label,
  placeholder,
}: DropDownProps) => {
  const [selected, setSelected] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (option: SetStateAction<string>) => {
    setSelected(option);
    setShowOptions(!showOptions);
  };

  return (
    <Flex
      cursor="pointer"
      direction="column"
      gap="xs"
      width={size === "small" ? "fit-content" : "auto"}
    >
      {trigger &&
        cloneElement(trigger, {
          onClick: () => setShowOptions(!showOptions),
        })}
      {size === "large" && (
        <styled.span
          color={selected || showOptions ? "textBlack" : "sub"}
          textStyle="label2"
        >
          {label}
        </styled.span>
      )}
      <div
        className={dropdownStyle({
          type: showOptions ? "focused" : selected ? "selected" : "default",
        })}
      >
        {!trigger && (
          <styled.div
            color={selected && !showOptions ? "textBlack" : "outline"}
            textStyle="body1"
            onClick={() => handleSelect(selected)}
          >
            {selected ? selected : placeholder}
          </styled.div>
        )}
        {showOptions && (
          <styled.div
            display="flex"
            flexDirection="column"
            gap="xs"
            paddingTop="sm"
          >
            {Children.toArray(children).map((child) => {
              if (isValidElement(child) && child.type === DropDown.Option) {
                return cloneElement(child as ReactElement, {
                  onClick: () => handleSelect(child.props.value),
                });
              }
              return child;
            })}
          </styled.div>
        )}
      </div>
    </Flex>
  );
};

DropDown.displayName = "DropDown";
export default DropDown;

DropDown.Option = function ({ value, children, onClick }: DropDownOptionProps) {
  return (
    <styled.div
      id={`dropdown-option-${value}`}
      textStyle="body1"
      onClick={onClick}
    >
      {children}
    </styled.div>
  );
};

const dropdownStyle = cva({
  base: {
    lg: {
      maxWidth: "22.375rem",
    },
    smDown: {
      width: "100%",
    },
    backgroundColor: "backgroundNormal",
    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",
    padding: "xs",
    _hover: {
      borderColor: "sub",
    },
  },
  variants: {
    type: {
      default: {
        borderColor: "outline",
        _hover: {
          borderColor: "sub",
        },
      },
      focused: {
        borderColor: "primary",
      },
      selected: {
        borderColor: "sub",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
