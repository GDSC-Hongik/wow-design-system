"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { ComponentPropsWithRef, KeyboardEvent, ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {boolean} [defaultChecked=false] 스위치가 처음에 활성화되어 있는지 여부.
 * @param {boolean} [isDisabled=false] 스위치가 비활성화되어 있는지 여부.
 * @param {boolean} [isChecked=false] 외부에서 제어할 활성 상태.
 * @param {() => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {ReactNode} [text] 스위치 오른 쪽에 들어갈 텍스트.
 * @param {() => void} [onClick] 스위치 클릭 시 동작할 이벤트.
 * @param {() => void} [onKeyDown] 스위치가 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface SwitchProps {
  defaultChecked?: boolean;
  isDisabled?: boolean;
  isChecked?: boolean;
  text?: ReactNode;
  onClick?: () => void;
  onKeyDown?: () => void;
  onChange?: () => void;
}

const SwitchIcon = ({
  isDisabled,
  isChecked,
}: {
  isDisabled: boolean;
  isChecked: boolean;
}) => {
  return (
    <span
      className={switchIconStyle({
        type: isDisabled ? "disabled" : isChecked ? "checked" : "unchecked",
      })}
    />
  );
};

const Switch = forwardRef(
  (
    {
      defaultChecked = false,
      isDisabled = false,
      isChecked: isCheckedProp,
      text = "",
      onClick,
      onKeyDown,
      onChange,
      ...rest
    }: SwitchProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    const [isChecked, setIsChecked] = useState(() =>
      isCheckedProp ? isCheckedProp : defaultChecked
    );

    useEffect(() => {
      if (isCheckedProp !== undefined) {
        setIsChecked(isCheckedProp);
      }
    }, [isCheckedProp]);

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
      <Flex alignItems="center" gap="0.5rem">
        <styled.label
          htmlFor="switch"
          className={switchStyle({
            type: isDisabled ? "disabled" : isChecked ? "checked" : "unchecked",
          })}
        >
          <input
            id="switch"
            ref={ref}
            {...rest}
            aria-checked={isChecked}
            aria-disabled={isDisabled}
            aria-label="switch"
            className={inputStyle()}
            type="checkbox"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          />
          <SwitchIcon isChecked={isChecked} isDisabled={isDisabled} />
        </styled.label>
        {!!text && <styled.span textStyle="body2">{text}</styled.span>}
      </Flex>
    );
  }
);

const switchStyle = cva({
  base: {
    width: "3.25rem !important",
    height: "1.75rem !important",
    borderRadius: "full",
    cursor: "pointer",
    display: "flex",
    position: "relative",
  },
  variants: {
    type: {
      checked: {
        bgColor: "primary",
        _hover: { bgColor: "blueHover" },
        _pressed: { bgColor: "bluePressed" },
      },
      unchecked: {
        bgColor: "outline",
        _hover: { bgColor: "sub" },
        _pressed: { bgColor: "lightDisabled" },
      },
      disabled: { bgColor: "lightDisabled" },
    },
  },
  defaultVariants: {
    type: "checked",
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

const switchIconStyle = cva({
  base: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "0.125rem",
    left: "0.125rem",
  },
  variants: {
    type: {
      checked: {
        left: "1.625rem",
        bg: "backgroundNormal",
        _pressed: {
          bg: "blueBackgroundPressed",
        },
      },
      unchecked: {
        left: "0.125rem",
        bg: "backgroundNormal",
        _pressed: {
          bg: "monoBackgroundPressed",
        },
      },
      disabled: {
        bg: "darkDisabled",
      },
    },
  },
  defaultVariants: {
    type: "checked",
  },
});

Switch.displayName = "Switch";

export default Switch;
