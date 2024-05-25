"use client";
import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ComponentProps, ElementType, ReactNode, Ref } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";

import type {
  ButtonElementType,
  PolymorphicComponentProps,
  PolymorphicRef,
  ToggleButtonProps,
} from "@/types";

export interface ChipProps extends ToggleButtonProps {
  clickable?: boolean;
  variant: "default" | "positive" | "negative";
  label: string;
  onDelete: (event: MouseEvent) => void;
}

type ChipComponent = <T extends ElementType = "button">(
  props: PolymorphicComponentProps<T, ChipProps>
) => ReactNode | null;

const ChipLabel = (label: string) => {
  return <styled.span textStyle="label2"></styled.span>;
};

const Chip: ChipComponent = forwardRef(
  <T extends ElementType = "button">(
    props: PolymorphicComponentProps<T, ChipProps>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as: Component = "button" as ElementType,
      clickable = true,
      label,
      variant = "default",
      onKeyDown,
      onKeyUp,
      onClick,
      onDelete,
      isSelected = false,
      defaultSelected,
      ...rest
    } = props;
    const [isActived, setIsActive] = useState(() =>
      isSelected ? isSelected : defaultSelected
    );

    useEffect(() => {
      if (isSelected !== undefined) {
        setIsActive(isSelected);
      }
    }, [isSelected]);

    const handleClick = () => {
      onClick?.();
      clickable ? setIsActive((prev) => !prev) : null;
    };

    return (
      <Component
        aria-label="chip button"
        data-selected={isActived}
        ref={ref}
        className={chip({
          type: variant,
        })}
        onClick={handleClick}
        {...rest.customStyle}
      >
        {label}
      </Component>
    );
  }
);

export default Chip;

const chip = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    minWidth: "3.5rem",
    height: "1.875rem",
    borderRadius: "1.25rem",
    cursor: "pointer",
    padding: "0.5rem 0.75rem",
  },
  variants: {
    type: {
      default: {
        "&[data-selected=true]": {
          bgColor: "blue.500",
          _hover: {
            bgColor: "blue.500",
            shadow: "0px 0.25rem 0.5rem 0px rgba(16, 43, 74, 0.20)",
          },
          _pressed: { bgColor: "blue.400" },
        },
        "&[data-selected=false]": {
          bgColor: "white",
          borderWidth: "0.0625rem",
          borderColor: "mono.600",
          _hover: { borderColor: "mono.950" },
          _pressed: { borderColor: "mono.400", bgColor: "mono.50" },
        },
      },
      positive: {
        bgColor: "white",
        borderWidth: "0.0625rem",
        borderColor: "green.500",
      },
      negative: {
        bgColor: "white",
        borderWidth: "0.0625rem",
        borderColor: "red.500",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
