"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

type Variant = "outline" | "solid1" | "solid2";

type OutlineColors = "red" | "blue" | "green" | "yellow";
type Solid1Colors = "blue" | "yellow" | "green";
type Solid2Colors = "blue" | "red" | "grey";

type VariantColorMap = {
  outline: OutlineColors;
  solid1: Solid1Colors;
  solid2: Solid2Colors;
};

export interface BaseTagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/**
 * @description 태그 컴포넌트의 속성을 정의합니다.
 *
 * @param {ReactNode} children - 태그의 자식 요소.
 * @param {"outline" | "solid1" | 'solid2'} [variant] - 태그의 종류.
 * @param {"red" | "blue" | "green" | "yellow" | "grey"} [color] - 태그의 색상.
 * @param {CSSProperties} [style] - 태그의 커스텀 스타일.
 * @param {string} [className] - 태그에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

type SpecificTagProps = BaseTagProps & {
  variant: Variant;
  color: VariantColorMap[Variant];
};

const Tag = forwardRef<HTMLSpanElement, SpecificTagProps>(
  ({ children, variant = "outline", color, ...rest }, ref) => {
    return (
      <styled.span
        ref={ref}
        className={TagStyle({
          variant,
          color,
        })}
        {...rest}
      >
        {children}
      </styled.span>
    );
  }
);

const TagStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingX: "xxs",
    paddingY: "xs",
    borderRadius: "sm",
    width: "fit-content",
    border: "1px solid",
    textStyle: "label2",
  },
  variants: {
    variant: {
      outline: {
        backgroundColor: "backgroundNormal",
      },
      solid1: {
        border: "none",
        backgroundColor: "monoBackgroundPressed",
      },
      solid2: {
        border: "none",
      },
    },
    color: {
      red: {
        borderColor: "red.500",
        color: "red.500",
      },
      green: {
        borderColor: "green.500",
        color: "green.500",
      },
      blue: {
        borderColor: "blue.500",
        color: "blue.500",
      },
      yellow: {
        borderColor: "yellow.500",
        color: "yellow.500",
      },
      grey: {},
    },
  },
  compoundVariants: [
    {
      variant: "solid2",
      color: "blue",
      css: {
        backgroundColor: "bluePressed",
        color: "blueHover",
      },
    },
    {
      variant: "solid2",
      color: "red",
      css: {
        backgroundColor: "error",
        color: "red.500",
      },
    },
    {
      variant: "solid2",
      color: "grey",
      css: {
        backgroundColor: "monoBackgroundPressed",
        color: "sub",
      },
    },
  ],
});

Tag.displayName = "Tag";
export default Tag;
