"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type {
  ElementType,
  KeyboardEvent,
  NamedExoticComponent,
  ReactNode,
} from "react";
import { forwardRef, useEffect, useState } from "react";

import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/Polymorphic";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {T} [as] 렌더링할 요소 또는 컴포넌트. 기본값은 button.
 * @param {boolean} [defaultChecked=false] 토글 버튼이 처음에 눌려 있는지 여부.
 * @param {boolean} [isDisabled=false] 토글 버튼이 비활성화되어 있는지 여부.
 * @param {boolean} [isChecked=false] 외부에서 제어할 활성 상태.
 * @param {() => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {ReactNode} [text] 토글 버튼 오른 쪽에 들어갈 텍스트.
 * @param {() => void} [onClick] 토글 버튼 클릭 시 동작할 이벤트.
 * @param {() => void} [onKeyDown] 토글 버튼이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface ToggleProps {
  defaultChecked?: boolean;
  isDisabled?: boolean;
  isChecked?: boolean;
  text?: ReactNode;
  onClick?: () => void;
  onKeyDown?: () => void;
  onChange?: () => void;
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

type ToggleComponent = <T extends ElementType = "button">(
  props: PolymorphicComponentProps<T, ToggleProps>
) => ReactNode | null;

const Toggle: ToggleComponent = forwardRef(
  <T extends ElementType = "button">(
    {
      as,
      defaultChecked = false,
      isDisabled = false,
      isChecked,
      text = "",
      onClick,
      onKeyDown,
      onChange,
      ...rest
    }: PolymorphicComponentProps<T, ToggleProps>,
    ref: PolymorphicRef<T>
  ) => {
    const [isActive, setIsActive] = useState(() =>
      isChecked ? isChecked : defaultChecked
    );

    useEffect(() => {
      if (isChecked !== undefined) {
        setIsActive(isChecked);
      }
    }, [isChecked]);

    const handleClick = () => {
      onChange ? onChange() : setIsActive((prev) => !prev);
      onClick?.();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        onChange ? onChange() : setIsActive((prev) => !prev);
        onKeyDown?.();
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
    width: "52px !important",
    height: "28px !important",
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

(Toggle as NamedExoticComponent).displayName = "Toggle";

export default Toggle;
