"use client";

import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { KeyboardEvent } from "react";
import { cloneElement, useCallback } from "react";
import { DownArrow } from "wowds-icons";

import type { DropDownProps } from "@/components/DropDown";
import { useDropDownContext } from "@/components/DropDown/context/DropDownContext";

import { useCollection } from "./context/CollectionContext";

interface DropDownTriggerProps {
  placeholder?: DropDownProps["placeholder"];
  label?: DropDownProps["label"];
  trigger?: DropDownProps["trigger"];
}

const DropDownTrigger = ({
  placeholder,
  label,
  trigger,
}: DropDownTriggerProps) => {
  const itemMap = useCollection();
  const { open, selectedValue, setOpen, setFocusedValue, dropdownId } =
    useDropDownContext();

  const selectedText = itemMap.get(selectedValue);

  const toggleDropdown = useCallback(() => {
    setOpen((prevOpen) => {
      if (!prevOpen) setFocusedValue(null);
      return !prevOpen;
    });
  }, [setOpen, setFocusedValue]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") toggleDropdown();
    },
    [toggleDropdown]
  );

  if (trigger) {
    return cloneElement(trigger, {
      onClick: toggleDropdown,
      "aria-expanded": open,
      "aria-haspopup": "true",
      id: `${dropdownId}-trigger`,
      "aria-controls": `${dropdownId}`,
    });
  }

  return (
    <>
      {label && (
        <styled.span
          color={open ? "primary" : selectedValue ? "textBlack" : "sub"}
          textStyle="label2"
        >
          {label}
        </styled.span>
      )}
      <styled.button
        alignItems="center"
        aria-controls={dropdownId}
        aria-expanded={open}
        aria-haspopup={true}
        cursor="pointer"
        display="flex"
        id={`${dropdownId}-trigger`}
        justifyContent="space-between"
        outline="none"
        type="button"
        className={dropdownStyle({
          type: open ? "focused" : selectedValue ? "selected" : "default",
        })}
        onClick={toggleDropdown}
      >
        <styled.div
          className={placeholderStyle({
            type: open ? "focused" : selectedValue ? "selected" : "default",
          })}
        >
          {selectedValue ? selectedText : placeholder}
        </styled.div>
        <DownArrow
          className={iconStyle({ type: open ? "up" : "down" })}
          stroke={open ? "primary" : selectedValue ? "sub" : "outline"}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        />
      </styled.button>
    </>
  );
};

export default DropDownTrigger;

const iconStyle = cva({
  base: {
    transition: "transform 1s ease",
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
    paddingY: "xs",
    paddingX: "sm",
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
        color: "primary",
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
