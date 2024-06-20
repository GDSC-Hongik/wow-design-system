"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { forwardRef } from "react";

import useButton from "@/hooks/useButton";
import type {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/types";

/**
 * @description 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {string} label - 버튼의 라벨.
 * @param {boolean} [disabled] - 버튼이 비활성화되어 있는지 여부.
 * @param {"lg" | "sm"} [size] - 버튼의 크기.
 * @param {"solid" | "outline"} [variant] - 버튼의 종류.
 * @param {() => void} [onKeyDown] - 버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {CSSProperties} [style] - 버튼의 커스텀 스타일.
 * @param {string} [className] - 버튼에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface CustomButtonProps {
  label: string;
  disabled?: boolean;
  size?: "lg" | "sm";
  variant?: "solid" | "outline";
  onKeyDown?: () => void;
  style?: CSSProperties;
  className?: string;
}

type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  CustomButtonProps
>;

type ButtonComponent = <C extends ElementType = "button">(
  props: PolymorphicComponentPropsWithRef<C, ButtonProps<C>>
) => ReactNode;

const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends ElementType = "button">(
    {
      as,
      label,
      disabled = false,
      size = "lg",
      variant = "solid",
      onKeyDown,
      ...rest
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "button";

    const {
      pressed,
      handleKeyDown,
      handleKeyUp,
      handleMouseDown,
      handleMouseUp,
    } = useButton({ disabled, onKeyDown });

    return (
      <Component
        aria-disabled={disabled}
        aria-pressed={pressed}
        disabled={disabled}
        ref={ref}
        className={ButtonStyle({
          size,
          variant,
        })}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        <styled.span textStyle={size === "lg" ? "label1" : "label2"}>
          {label}
        </styled.span>
      </Component>
    );
  }
);

const ButtonStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
  },
  variants: {
    size: {
      lg: {
        width: "100%",
        height: "3rem",
        padding: "1rem",
        borderRadius: "md",
      },
      sm: {
        padding: "0.75rem 1.25rem",
        borderRadius: "full",
      },
    },
    variant: {
      solid: {
        background: "primary",
        color: "textWhite",

        _disabled: {
          background: "darkDisabled",
          cursor: "not-allowed",
        },
        _hover: {
          shadow: "blue",
        },
        _pressed: {
          background: "bluePressed",
        },
      },
      outline: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "primary",

        background: "background",
        color: "primary",

        _disabled: {
          borderColor: "darkDisabled",
          color: "darkDisabled",
          cursor: "not-allowed",
        },
        _hover: {
          borderColor: "blueHover",
          color: "blueHover",
        },
        _pressed: {
          borderColor: "bluePressed",
          background: "blueBackgroundPressed",
          color: "bluePressed",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "outline",
      css: {
        borderColor: "outline",
        color: "textBlack",

        _hover: {
          borderColor: "textBlack",
          color: "textBlack",
        },
        _pressed: {
          borderColor: "outline",
          background: "monoBackgroundPressed",
          color: "textBlack",
        },
      },
    },
  ],
});

Button.displayName = "Button";
export default Button;
