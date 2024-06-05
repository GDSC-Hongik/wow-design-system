"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, InputHTMLAttributes } from "react";
import { useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

/**
 * @description 라디오 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @property {boolean} [disabled] - 라디오 버튼이 비활성화되어 있는지 여부.
 * @property {string} value - 라디오 버튼의 값.
 * @property {string} [label] - 라디오 버튼의 라벨.
 * @property {CSSProperties} [style] - 라디오 버튼의 커스텀 스타일.
 * @property {string} [className] - 라디오 버튼에 전달하는 커스텀 클래스.
 * @property {InputHTMLAttributes<HTMLInputElement>} [inputProps] - 라디오 버튼의 기본 input 요소에 전달할 추가 속성들.
 */

export interface RadioButtonProps {
  disabled?: boolean;
  value: string;
  label?: string;
  style?: CSSProperties;
  className?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const RadioButton = ({
  disabled = false,
  value,
  label,
  inputProps,
  ...rest
}: RadioButtonProps) => {
  const group = useContext(RadioContext);
  const selected = group.value === value;

  const [pressed, setPressed] = useState<boolean>(false);

  const handleMouseDown = () => {
    if (!disabled && !group.disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled && !group.disabled) setPressed(false);
  };

  return (
    <styled.label
      className={labelStyle({
        state: disabled || group.disabled ? "disabled" : "default",
      })}
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
};

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

    background: "background",
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

export default RadioButton;
