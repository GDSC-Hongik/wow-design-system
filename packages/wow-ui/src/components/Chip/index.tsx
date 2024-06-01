"use client";
import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ElementType, ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";

import type {
  PolymorphicComponentProps,
  PolymorphicRef,
  ToggleButtonProps,
} from "@/types";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {T} [as] 렌더링할 요소 또는 컴포넌트. 기본값은 button이며, Chip의 경우 input으로 사용될 수 있음
 * @param {boolean} [defaultChecked=false] 칩의 토글의 default 활성화 상태
 * @param {boolean} [isChecked=false] 외부에서 제어할 활성 상태.
 * @param {string} label 칩 버튼에 들어갈 텍스트
 * @param {boolean} [clickable=true] 클릭할 수 있는 칩인지 여부 판단
 * @param {() => void} [onDelete] 칩 버튼을 삭제했을 때의 동작
 * @param {() => void} [onClick] Chip 버튼 클릭 시 동작
 * @param {() => void} [onKeyDown] 토글 버튼이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface ChipProps extends ToggleButtonProps {
  label: string;
  onDelete?: () => void;
}

type ChipComponent = <T extends ElementType = "button">(
  props: PolymorphicComponentProps<T, ChipProps>
) => ReactNode | null;

const ChipLabel = ({
  label,
  isChecked,
  disabled = true,
}: {
  label: string;
  isChecked: boolean;
  disabled: boolean;
}) => {
  return (
    <styled.span
      className={chipLabel({ disabled: disabled })}
      data-disabled={disabled}
      data-selected={isChecked}
      textStyle="label2"
    >
      {label}
    </styled.span>
  );
};

const Chip: ChipComponent & { displayName?: string } = forwardRef(
  <T extends ElementType = "button">(
    {
      as,
      clickable = true,
      label,
      onKeyDown,
      onClick,
      isChecked: checkedProp = false,
      defaultChecked = false,
      disabled = false,
      ...rest
    }: PolymorphicComponentProps<T, ChipProps>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "button";
    const [isChecked, setIsChecked] = useState(() =>
      checkedProp ? checkedProp : defaultChecked
    );
    useEffect(() => {
      if (checkedProp !== undefined) {
        setIsChecked(checkedProp);
      }
    }, [checkedProp]);

    const handleClick = () => {
      if (disabled) return;
      onClick?.();
      clickable ? setIsChecked((prev) => !prev) : null;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!clickable || disabled) return;
      if (event.currentTarget === event.target) {
        event.preventDefault();
        if (event.key === "Enter" || event.key === " ") {
          setIsChecked((prev) => !prev);
          onKeyDown?.();
        }
      }
    };

    return (
      <Component
        // aria-label={`chip button ${isChecked ? "activated" : "inactivated"}`}
        data-selected={isChecked}
        ref={ref}
        className={chip({
          clickable: disabled ? false : clickable,
          disabled: disabled,
        })}
        onClick={handleClick}
        // onKeyDown={handleKeyDown}
        {...rest.customStyle}
      >
        <ChipLabel disabled={disabled} isChecked={isChecked} label={label} />
      </Component>
    );
  }
);

Chip.displayName = "Chip";
export default Chip;

const chipLabel = cva({
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "&[data-selected=true]": {
      color: "white",
    },
    "&[data-selected=false]": {
      color: "mono.950",
    },
  },
  variants: {
    disabled: {
      true: {
        color: "darkDisabled",
        "&[data-selected=false]": {
          color: "darkDisabled",
        },
      },
      false: {},
    },
  },
});

const chip = cva({
  base: {
    display: "inline-block",
    minWidth: "3.5rem",
    height: "1.875rem",
    borderRadius: "1.25rem",
    padding: "0.5rem 0.75rem",
  },
  variants: {
    clickable: {
      true: {
        cursor: "pointer",
      },
      false: {
        cursor: "default",
      },
    },
    disabled: {
      true: {
        bgColor: "lightDisabled",
        borderWidth: "0.0625rem",
        borderColor: "darkDisabled",
      },
      false: {
        "&[data-selected=true]": {
          bgColor: "blue.500",
          _hover: {
            bgColor: "blue.500",
            shadow: "0px 0.25rem 0.5rem 0px rgba(16, 43, 74, 0.20)",
          },
          _pressed: { bgColor: "blue.400" },
        },
        "&[data-selected=false]": {
          bgColor: "white",
          borderWidth: "0.0625rem",
          borderColor: "mono.600",
          _hover: { borderColor: "mono.950" },
          _pressed: { borderColor: "mono.400", bgColor: "mono.50" },
        },
      },
    },
  },
});
