"use client";

import { css } from "@styled-system/css";
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
 * @description 텍스트 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {string} label - 텍스트 버튼의 라벨.
 * @param {boolean} [disabled] - 텍스트 버튼이 비활성화되어 있는지 여부.
 * @param {"lg" | "sm"} [size] - 텍스트 버튼의 크기.
 * @param {() => void} [onKeyDown] - 텍스트 버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {CSSProperties} [style] - 텍스트 버튼의 커스텀 스타일.
 * @param {string} [className] - 텍스트 버튼에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface CustomButtonProps {
  label: string;
  disabled?: boolean;
  size?: "lg" | "sm";
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

const TextButton: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends ElementType = "button">(
    {
      as,
      label,
      disabled = false,
      size = "lg",
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
      handleClickDown,
      handleClickUp,
    } = useButton({ disabled, onKeyDown });

    return (
      <Component
        aria-disabled={disabled}
        aria-pressed={pressed}
        className={TextButtonStyle}
        disabled={disabled}
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseLeave={handleClickUp}
        onPointerDown={handleClickDown}
        onPointerUp={handleClickUp}
        {...rest}
      >
        <styled.span
          textDecoration="underline"
          textStyle={size === "lg" ? "label1" : "label2"}
        >
          {label}
        </styled.span>
      </Component>
    );
  }
);

const TextButtonStyle = css({
  padding: "0.75rem 1.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "sub",

  borderRadius: "full",
  cursor: "pointer",

  _hover: {
    color: "textBlack",
  },
  _pressed: {
    background: "monoBackgroundPressed",
    color: "sub",
  },
  _disabled: {
    color: "lightDisabled",
    cursor: "not-allowed",
  },
});

TextButton.displayName = "TextButton";
export default TextButton;
