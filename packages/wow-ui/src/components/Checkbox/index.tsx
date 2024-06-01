import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type {
  CSSProperties,
  InputHTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
} from "react";
import { forwardRef, useEffect, useState } from "react";
import { Check as CheckIcon } from "wowds-icons";

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
 * @param {CSSProperties} [style] 체크박스의 스타일을 설정합니다.
 * @param {React.ReactNode} [children] 체크박스 오른쪽이나 위쪽에 들어갈 텍스트.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
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
  style?: CSSProperties;
}

const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
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
    const id = inputProps?.id ?? "checkbox";

    const [checked, setChecked] = useState<boolean>(() =>
      checkedProp !== undefined ? checkedProp : defaultChecked
    );

    useEffect(() => {
      if (checkedProp !== undefined) {
        setChecked(checkedProp);
      }
    }, [checkedProp]);

    const handleClick = () => {
      onChange ? onChange() : setChecked((prev) => !prev);
      onClick?.();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        onChange ? onChange() : setChecked((prev) => !prev);
        onKeyDown?.();
      }
    };

    return (
      <styled.label
        alignItems="center"
        cursor={disabled ? "none" : "pointer"}
        display="flex"
        flexDirection={position === "vertical" ? "column-reverse" : "row"}
        gap="spacing.xs"
        htmlFor={id}
        pointerEvents={disabled ? "none" : "auto"}
        width="fit-content"
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <styled.span
          className={checkboxStyle({
            type: disabled ? "disabled" : checked ? "checked" : "default",
          })}
        >
          <styled.input
            aria-checked={checked}
            aria-disabled={disabled}
            aria-label={inputProps?.["aria-label"] ?? "checkbox"}
            className={inputStyle()}
            id={id}
            ref={ref}
            tabIndex={0}
            type="checkbox"
            onClick={handleClick}
            {...inputProps}
          />
          {checked && (
            <CheckIcon stroke={disabled ? "darkDisabled" : "primary"} />
          )}
        </styled.span>
        <styled.span textStyle="body1">{children}</styled.span>
      </styled.label>
    );
  }
);

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

const inputStyle = cva({
  base: {
    opacity: 0,
    width: 0,
    height: 0,
    overflow: "hidden",
    position: "absolute",
  },
});
