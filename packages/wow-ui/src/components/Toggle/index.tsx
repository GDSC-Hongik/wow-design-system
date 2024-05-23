"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";
import { forwardRef, useState } from "react";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {T} [as] 렌더링할 요소 또는 컴포넌트. 기본값은 button.
 * @param {boolean} [initialIsActive=false] 토글 버튼이 처음에 눌려 있는지 여부.
 * @param {boolean} [isDisabled=false] 토글 버튼이 비활성화되어 있는지 여부.
 * @param {string} [text] 토글 버튼 오른쪽에 들어갈 텍스트.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface ToggleProps<T extends ElementType> {
  as?: T;
  initialIsActive?: boolean;
  isDisabled?: boolean;
  text?: string;
}

const ToggleIcon = ({
  isDisabled,
  isActive,
}: {
  isDisabled: boolean;
  isActive: boolean;
}) => {
  return (
    <span
      className={toggleIcon({
        type: isDisabled ? "disabled" : isActive ? "active" : "inactive",
      })}
    />
  );
};

const Toggle = forwardRef(
  <T extends ElementType>(
    {
      as,
      initialIsActive = false,
      isDisabled = false,
      text = "",
      ...rest
    }: ToggleProps<T> & ComponentPropsWithoutRef<T>,
    ref: ComponentPropsWithRef<T>["ref"]
  ) => {
    const [isActive, setIsActive] = useState(() => initialIsActive);

    const handleClick = () => {
      setIsActive((prev) => !prev);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        setIsActive((prev) => !prev);
      }
    };

    const Component = as || "button";

    return (
      <Flex alignItems="center" display="inline-flex" gap="8px">
        <Component
          ref={ref}
          {...rest}
          aria-label={isActive ? "toggle-activated" : "toggle-inactivated"}
          aria-pressed={isActive}
          data-disabled={isDisabled}
          className={toggle({
            type: isDisabled ? "disabled" : isActive ? "active" : "inactive",
          })}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <ToggleIcon isActive={isActive} isDisabled={isDisabled} />
        </Component>
        {!!text && <styled.span textStyle="body2">{text}</styled.span>}
      </Flex>
    );
  }
);

const toggleIcon = cva({
  base: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    zIndex: 1,
    position: "absolute",
    top: 2,
  },
  variants: {
    type: {
      active: {
        left: 26,
        bg: "backgroundNormal",
        _pressed: {
          bg: "blueBackgroundPressed",
        },
      },
      inactive: {
        left: 2,
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
    type: "active",
  },
});

const toggle = cva({
  base: {
    width: "52px",
    height: "28px",
    borderRadius: "40px",
    cursor: "pointer",
    position: "relative",
  },
  variants: {
    type: {
      active: {
        bgColor: "primary",
        _hover: { bgColor: "blueHover" },
        _pressed: { bgColor: "bluePressed" },
      },
      inactive: {
        bgColor: "outline",
        _hover: { bgColor: "sub" },
        _pressed: { bgColor: "lightDisabled" },
      },
      disabled: { bgColor: "lightDisabled" },
    },
  },
  defaultVariants: {
    type: "active",
  },
});

Toggle.displayName = "Toggle";

export default Toggle;
