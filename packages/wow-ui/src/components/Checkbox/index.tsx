import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type {
  InputHTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
} from "react";
import { useEffect, useState } from "react";
import { Check as CheckIcon } from "wowds-icons";

export interface CheckBoxProps extends PropsWithChildren {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  position?: "vertical" | "horizontal";
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox = ({
  defaultChecked = true,
  disabled = false,
  checked: checkedProp,
  onClick,
  onChange,
  children,
  position = "horizontal",
  inputProps,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  ...rest
}: CheckBoxProps) => {
  const id = inputProps?.id ?? "checkbox";

  const [isChecked, setIsChecked] = useState<boolean>(() =>
    checkedProp !== undefined ? checkedProp : defaultChecked
  );

  useEffect(() => {
    if (checkedProp !== undefined) {
      setIsChecked(checkedProp);
    }
  }, [checkedProp]);

  const handleClick = () => {
    onChange ? onChange() : setIsChecked((prev) => !prev);
    onClick?.();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      onChange ? onChange() : setIsChecked((prev) => !prev);
      onKeyDown?.();
    }
  };

  return (
    <styled.label
      alignItems="center"
      cursor={disabled ? "none" : "pointer"}
      display="flex"
      flexDirection={position === "vertical" ? "column-reverse" : "row"}
      gap="10px"
      htmlFor={id}
      pointerEvents={disabled ? "none" : "auto"}
      width="fit-content"
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <styled.span
        className={checkboxStyle({
          type: disabled ? "disabled" : isChecked ? "checked" : "default",
        })}
      >
        <styled.input
          aria-checked={isChecked}
          aria-disabled={disabled}
          aria-label={inputProps?.["aria-label"] ?? "checkbox"}
          className={inputStyle()}
          id={id}
          type="checkbox"
          onClick={handleClick}
          {...inputProps}
          {...rest}
        />
        {isChecked && <CheckIcon />}
      </styled.span>
      <styled.span textStyle="body1">{children}</styled.span>
    </styled.label>
  );
};

export default Checkbox;

const checkboxStyle = cva({
  base: {
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "0.25rem",
    border: "1px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  },
  variants: {
    type: {
      default: {
        bg: "white",
        borderColor: "darkDisabled",
        _pressed: {
          bg: "blueBackgroundPressed",
          borderColor: "primary",
        },
      },
      checked: {
        bg: "blueBackgroundPressed",
        borderColor: "primary",
      },
      disabled: {
        bg: "lightDisabled",
        borderColor: "darkDisabled",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const inputStyle = cva({
  base: {
    opacity: 0,
    width: 0,
    height: 0,
    overflow: "hidden",
    position: "absolute",
  },
});
