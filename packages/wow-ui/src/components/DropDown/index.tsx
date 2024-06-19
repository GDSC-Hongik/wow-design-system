"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { PropsWithChildren, ReactElement, SetStateAction } from "react";
import { Children, cloneElement, isValidElement, useState } from "react";
import { DownArrow } from "wowds-icons";

type SizeType = "large" | "small";
export interface DropDownBaseProps extends PropsWithChildren {
  size?: SizeType;
}

export interface LargeDropDownProps extends DropDownBaseProps {
  label?: string;
  placeholder?: string;
  trigger?: never;
}

export interface SmallDropDownProps extends DropDownBaseProps {
  size: "small";
  trigger?: ReactElement;
  label?: never;
  placeholder?: never;
}

export type DropDownProps = LargeDropDownProps | SmallDropDownProps;

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
  const [open, setOpen] = useState(false);

  const handleSelect = (option: SetStateAction<string>) => {
    setSelected(option);
    setOpen(!open);
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
          onClick: () => setOpen(!open),
        })}
      {size === "large" && (
        <styled.span
          color={selected || open ? "textBlack" : "sub"}
          textStyle="label2"
        >
          {label}
        </styled.span>
      )}
      <div
        className={dropdownStyle({
          type: open ? "focused" : selected ? "selected" : "default",
        })}
      >
        {!trigger && (
          <Flex justifyContent="space-between">
            <styled.div
              color={selected && !open ? "textBlack" : "outline"}
              textStyle="body1"
              onClick={() => handleSelect(selected)}
            >
              {selected ? selected : placeholder}
            </styled.div>
            <DownArrow
              className={iconStyle({ type: open ? "up" : "down" })}
              stroke={open ? "monoHover" : selected ? "sub" : "outline"}
            />
          </Flex>
        )}
        {open && (
          <styled.div
            display="flex"
            flexDirection="column"
            gap="xs"
            paddingTop="sm"
          >
            {Children.toArray(children).map((child) => {
              if (isValidElement(child) && child.type === DropDown.Option) {
                return cloneElement(child as ReactElement, {
                  key: child.props.value,
                  onClick: () => {
                    child.props.onClick && child.props.onClick();
                    handleSelect(child.props.value);
                  },
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

const iconStyle = cva({
  base: {
    transition: "transform 0.3s ease",
  },
  variants: {
    type: {
      up: {
        transform: "rotate(180deg)",
      },
      down: {
        transform: "rotate(0deg)",
      },
    },
  },
});
const dropdownStyle = cva({
  base: {
    maxWidth: "22.375rem",
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
