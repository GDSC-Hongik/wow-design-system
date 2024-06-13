"use client";

import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type {
  CSSProperties,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import { forwardRef, useId } from "react";
import { Check as CheckIcon } from "wowds-icons";

import { useCheckedState } from "@/hooks";

/**
 * @description 사용자가 선택하거나 선택 해제할 수 있는 체크박스 컴포넌트입니다.
 *
 * @param {boolean} [defaultChecked=false] 체크박스가 처음에 활성화되어 있는지 여부.
 * @param {boolean} [disabled=false] 체크박스가 비활성화되어 있는지 여부.
 * @param {boolean} [checked] 외부에서 제어할 활성 상태.
 * @param {() => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {() => void} [onClick] 체크박스 클릭 시 동작할 이벤트.
 * @param {() => void} [onKeyDown] 체크박스에 포커스 됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {() => void} [onMouseEnter] 마우스가 체크박스 위로 진입할 때 호출되는 함수.
 * @param {() => void} [onMouseLeave] 마우스가 체크박스에서 벗어날 때 호출되는 함수.
 * @param {"vertical" | "horizontal"} [position="horizontal"] 체크박스와 텍스트의 배치를 설정. 'vertical' 또는 'horizontal' 값을 가집니다.
 * @param {InputHTMLAttributes<HTMLInputElement>} [inputProps] 체크박스의 기본 input 요소에 전달할 추가 속성들.
 * @param {CSSProperties} [style] 체크박스의 커스텀 스타일을 설정합니다.
 * @param {string} [className] 체크박스에 전달하는 커스텀 클래스를 설정합니다.
 * @param {React.ReactNode} [children] 체크박스 오른쪽이나 위쪽에 들어갈 텍스트.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface CheckboxProps extends PropsWithChildren {
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
  style?: CSSProperties;
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      defaultChecked = false,
      disabled = false,
      checked: checkedProp,
      onClick,
      onChange,
      children,
      position = "horizontal",
      inputProps,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const defaultId = `checkbox-${useId()}`;
    const id = inputProps?.id ?? defaultId;

    const {
      checked,
      pressed,
      handleClick,
      handleKeyDown,
      handleKeyUp,
      handleMouseDown,
      handleMouseUp,
    } = useCheckedState({
      defaultChecked,
      checked: checkedProp,
      disabled,
      onChange,
      onClick,
      onKeyDown,
    });

    return (
      <styled.label
        alignItems="center"
        cursor={disabled ? "none" : "pointer"}
        display="flex"
        flexDirection={position === "vertical" ? "column-reverse" : "row"}
        gap={children ? "xs" : "0px"}
        htmlFor={id}
        pointerEvents={disabled ? "none" : "auto"}
        width="fit-content"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        <styled.span alignItems="center" display="flex" position="relative">
          <styled.input
            aria-checked={checked}
            aria-disabled={disabled}
            aria-label={inputProps?.["aria-label"] ?? "checkbox"}
            {...(pressed && { "data-pressed": true })}
            id={id}
            ref={ref}
            tabIndex={0}
            type="checkbox"
            className={checkboxStyle({
              type: disabled ? "disabled" : checked ? "checked" : "default",
            })}
            {...inputProps}
            onClick={handleClick}
          />
          {checked && (
            <styled.span
              left="50%"
              position="absolute"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <CheckIcon stroke={disabled ? "darkDisabled" : "primary"} />
            </styled.span>
          )}
        </styled.span>
        <styled.span color={checked ? "textBlack" : "sub"} textStyle="body1">
          {children}
        </styled.span>
      </styled.label>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;

const checkboxStyle = cva({
  base: {
    appearance: "none",
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "sm",
    border: "1px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    position: "relative",
    cursor: "inherit",
  },
  variants: {
    type: {
      default: {
        bg: "white",
        borderColor: "darkDisabled",
        _pressed: {
          bg: "blueBackgroundPressed",
          borderColor: "bluePressed",
        },
      },
      checked: {
        bg: "blueBackgroundPressed",
        borderColor: "primary",
        _pressed: {
          borderColor: "bluePressed",
        },
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
