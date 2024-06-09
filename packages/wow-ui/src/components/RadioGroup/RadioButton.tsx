"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, InputHTMLAttributes, KeyboardEvent } from "react";
import { forwardRef, useCallback, useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

/**
 * @description 라디오 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {boolean} [disabled] - 라디오 버튼이 비활성화되어 있는지 여부.
 * @param {string} value - 라디오 버튼의 값.
 * @param {string} [label] - 라디오 버튼의 라벨.
 * @param {CSSProperties} [style] - 라디오 버튼의 커스텀 스타일.
 * @param {string} [className] - 라디오 버튼에 전달하는 커스텀 클래스.
 * @param {InputHTMLAttributes<HTMLInputElement>} [inputProps] - 라디오 버튼의 기본 input 요소에 전달할 추가 속성들.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface RadioButtonProps {
  disabled?: boolean;
  value: string;
  label?: string;
  style?: CSSProperties;
  className?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ disabled = false, value, label, inputProps, ...rest }, ref) => {
    const group = useContext(RadioContext);
    const selected = group.value === value;

    const [pressed, setPressed] = useState<boolean>(false);

    const handleMouseDown = useCallback(() => {
      if (!disabled && !group.disabled) setPressed(true);
    }, [setPressed, disabled, group.disabled]);

    const handleMouseUp = useCallback(() => {
      if (!disabled && !group.disabled) setPressed(false);
    }, [setPressed, disabled, group.disabled]);

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
      <styled.label
        className={labelStyle({
          state: disabled || group.disabled ? "disabled" : "default",
        })}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        <styled.input
          aria-checked={selected}
          aria-disabled={group.disabled || disabled}
          aria-label={label}
          checked={selected}
          data-pressed={pressed}
          data-readonly={(group.disabled || disabled) && selected}
          disabled={(group.disabled && !selected) || disabled}
          name={group.name}
          ref={ref}
          type="radio"
          value={value}
          className={radioButtonStyle({
            state: selected ? "active" : "inactive",
          })}
          onChange={group.onChange}
          {...inputProps}
        />
        {label && <styled.span textStyle="body2">{label}</styled.span>}
      </styled.label>
    );
  }
);

const radioButtonStyle = cva({
  base: {
    appearance: "none",

    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "full",
    borderWidth: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    background: "Background",
    borderColor: "darkDisabled",
  },
  variants: {
    state: {
      active: {
        base: {
          background: "blueBackgroundPressed",
          borderColor: "primary",
          _before: {
            content: `""`,
            width: "0.625rem",
            height: "0.625rem",
            borderRadius: "full",
            background: "primary",
          },
        },
        "&[data-readonly=true]": {
          background: "lightDisabled",
          borderColor: "darkDisabled",
          cursor: "not-allowed",
          _before: {
            background: "darkDisabled",
          },
        },
        "&[data-pressed=true]": {
          background: "blueBackgroundPressed",
          borderColor: "bluePressed",
          _before: {
            background: "bluePressed",
          },
        },
      },
      inactive: {
        _disabled: {
          background: "lightDisabled",
          borderColor: "darkDisabled",
          cursor: "not-allowed",
        },
        "&[data-pressed=true]": {
          background: "blueBackgroundPressed",
          borderColor: "bluePressed",
        },
      },
    },
  },
});

const labelStyle = cva({
  base: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "xs",
  },
  variants: {
    state: {
      default: {
        cursor: "pointer",
        color: "textBlack",
      },
      disabled: {
        cursor: "not-allowed",
        color: "sub",
      },
    },
  },
});

RadioButton.displayName = "RadioButton";
export default RadioButton;
