"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { PropsWithChildren, ReactElement } from "react";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import { DownArrow } from "wowds-icons";

import { useClickOutside, useDropDownState } from "../../hooks";

export interface DropDownWithTriggerProps extends PropsWithChildren {
  trigger: ReactElement;
  label?: never;
  placeholder?: never;
}

export interface DropDownWithoutTriggerProps extends PropsWithChildren {
  trigger?: never;
  label: string;
  placeholder: string;
}

export type DropDownProps = (
  | DropDownWithTriggerProps
  | DropDownWithoutTriggerProps
) & {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export interface DropDownOptionProps extends PropsWithChildren {
  focused?: boolean;
  value: string;
  onClick?: () => void;
}

const DropDown = ({
  children,
  trigger,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
}: DropDownProps) => {
  const {
    selected,
    open,
    setOpen,
    focusedIndex,
    setFocusedIndex,
    handleSelect,
    handleKeyDown,
  } = useDropDownState({ value, defaultValue, children, onChange });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useClickOutside(dropdownRef, () => setOpen(false));

  useEffect(() => {
    if (open && focusedIndex !== null && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex]?.focus();
    }
  }, [open, focusedIndex]);

  const DropDownContent = ({
    children,
    optionsRef,
    focusedIndex,
    setFocusedIndex,
    handleSelect,
  }: {
    children: React.ReactNode;
    optionsRef: React.RefObject<(HTMLDivElement | null)[]>;
    focusedIndex: number | null;
    setFocusedIndex: (index: number) => void;
    handleSelect: (value: string) => void;
  }) => {
    return (
      <>
        {Children.toArray(children).map((child, index) => {
          if (isValidElement(child) && child.type === DropDown.Item) {
            return cloneElement(child as ReactElement, {
              key: child.props.value,
              ref: (el: HTMLDivElement) => {
                if (optionsRef.current) optionsRef.current[index] = el;
              },
              onClick: () => {
                child.props.onClick && child.props.onClick();
                handleSelect(child.props.value);
              },
              onMouseEnter: () => setFocusedIndex(index),
              focused: focusedIndex === index,
            });
          }
          return child;
        })}
      </>
    );
  };

  return (
    <Flex
      cursor="pointer"
      direction="column"
      gap="xs"
      ref={dropdownRef}
      tabIndex={0}
      width={trigger ? "fit-content" : "auto"}
      onKeyDown={handleKeyDown}
    >
      {trigger &&
        cloneElement(trigger, {
          onClick: () => setOpen(!open),
        })}
      {!trigger && (
        <styled.span
          color={selected || open ? "textBlack" : "sub"}
          textStyle="label2"
        >
          {label}
        </styled.span>
      )}
      {trigger ? (
        <>
          {open && (
            <Flex
              direction="column"
              gap="xs"
              paddingTop="sm"
              className={dropdownStyle({
                type: open ? "focused" : selected ? "selected" : "default",
              })}
            >
              <DropDownContent
                children={children}
                focusedIndex={focusedIndex}
                handleSelect={handleSelect}
                optionsRef={optionsRef}
                setFocusedIndex={setFocusedIndex}
              />
            </Flex>
          )}
        </>
      ) : (
        <styled.div
          className={dropdownStyle({
            type: open ? "focused" : selected ? "selected" : "default",
          })}
        >
          <Flex justifyContent="space-between" onClick={() => setOpen(!open)}>
            <styled.div
              color={selected && !open ? "textBlack" : "outline"}
              textStyle="body1"
            >
              {selected ? selected : placeholder}
            </styled.div>
            <DownArrow
              className={iconStyle({ type: open ? "up" : "down" })}
              stroke={open ? "monoHover" : selected ? "sub" : "outline"}
            />
          </Flex>
          {open && (
            <Flex direction="column" gap="xs" paddingTop="sm">
              <DropDownContent
                children={children}
                focusedIndex={focusedIndex}
                handleSelect={handleSelect}
                optionsRef={optionsRef}
                setFocusedIndex={setFocusedIndex}
              />
            </Flex>
          )}
        </styled.div>
      )}
    </Flex>
  );
};

DropDown.displayName = "DropDown";
export default DropDown;

DropDown.Item = forwardRef<HTMLDivElement, DropDownOptionProps>(function Item(
  { value, children, onClick, focused },
  ref
) {
  return (
    <styled.div
      {...(focused && { border: "1px solid" })}
      {...(focused && { borderColor: "primary" })}
      id={`dropdown-item-${value}`}
      outline="none"
      ref={ref}
      tabIndex={-1}
      textStyle="body1"
      onClick={onClick}
    >
      {children}
    </styled.div>
  );
});

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
        _pressed: {
          backgroundColor: "monoBackgroundPressed",
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
