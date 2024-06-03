"use client";

import { css } from "@styled-system/css/css";
import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import { useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

export interface RadioButtonProps {
  disabled?: boolean;
  label: string;
}

const RadioButton = ({ disabled = false, label }: RadioButtonProps) => {
  const group = useContext(RadioContext);
  const selected = group.value === label;

  const [pressed, setPressed] = useState<boolean>(false);

  const handleMouseDown = () => {
    if (!disabled && !group.disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled && !group.disabled) setPressed(false);
  };

  return (
    <styled.label
      className={labelRecipe({
        state: disabled || group.disabled ? "disabled" : "default",
      })}
    >
      <styled.input
        aria-checked={selected}
        aria-disabled={group.disabled || disabled}
        aria-label={label}
        checked={selected}
        data-pressed={pressed}
        data-readonly={group.disabled && selected}
        disabled={(group.disabled && !selected) || disabled}
        name={group.name}
        type="radio"
        value={label}
        className={radioButtonRecipe({
          state: selected ? "active" : "inactive",
        })}
        onChange={group.onChange}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      />
      <styled.span className={text}>{label}</styled.span>
    </styled.label>
  );
};

const radioButtonRecipe = cva({
  base: {
    appearance: "none",

    width: 20,
    height: 20,
    borderRadius: 9999,
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
            width: 10,
            height: 10,
            borderRadius: 9999,
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

const text = css({
  textStyle: "body2",
});

const labelRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
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
