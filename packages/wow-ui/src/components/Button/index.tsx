"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, KeyboardEvent } from "react";
import { forwardRef, useCallback, useState } from "react";

/**
 * @description 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {boolean} [disabled] - 버튼이 비활성화되어 있는지 여부.
 * @param {string} label - 버튼의 라벨.
 * @param {CSSProperties} [style] - 버튼의 커스텀 스타일.
 * @param {string} [className] - 버튼에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  size?: "large" | "small";
  variant?: "solid" | "outline" | "text";
  state?: "default" | "success" | "error";
  style?: CSSProperties;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      label,
      size = "large",
      variant = "solid",
      state = "default",
      ...rest
    },
    ref
  ) => {
    const [pressed, setPressed] = useState<boolean>(false);

    const handleMouseDown = useCallback(() => {
      if (!disabled) setPressed(true);
    }, [setPressed, disabled]);

    const handleMouseUp = useCallback(() => {
      if (!disabled) setPressed(false);
    }, [setPressed, disabled]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === " ") {
          setPressed(true);
        }
      },
      [setPressed]
    );

    const handleKeyUp = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === " ") {
          setPressed(false);
        }
      },
      [setPressed]
    );

    return (
      <styled.button
        aria-disabled={disabled}
        data-pressed={pressed}
        disabled={disabled}
        ref={ref}
        className={ButtonStyle({
          size,
          variant,
          state,
        })}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        <styled.span textStyle={variant === "text" ? "label1" : "label1"}>
          {label}
        </styled.span>
      </styled.button>
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
      large: {
        width: "100%",
        height: "3rem",
        padding: "1rem",
        borderRadius: "md",
      },
      small: {
        height: "2.375rem",
        padding: "1rem",
        borderRadius: "full",
      },
    },
    variant: {
      solid: {
        background: "primary",
        color: "textWhite",

        _disabled: {
          background: "darkDisabled",
          cursor: "default",
        },
        _hover: {},
        "&[data-pressed=true]": {
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
          cursor: "default",
        },
        _hover: {
          borderColor: "bluePressed",
          color: "bluePressed",
        },
        "&[data-pressed=true]": {
          borderColor: "bluePressed",
          background: "blueBackgroundPressed",
          color: "bluePressed",
        },
      },
      text: {
        background: "none",
        color: "sub",
        _disabled: {
          borderColor: "darkDisabled",
          color: "darkDisabled",
          cursor: "default",
        },
        _hover: {
          color: "textBlack",
        },
        "&[data-pressed=true]": {
          background: "monoBackgroundPressed",
        },
      },
    },
    state: {
      default: {},
      success: {
        borderColor: "success",
        color: "success",
      },
      error: {
        borderColor: "error",
        color: "error",
      },
    },
  },
});

Button.displayName = "Button";
export default Button;
