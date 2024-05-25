"use client";
import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ElementType, MouseEvent, ReactNode } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";

import CloseButton from "@/components/Chip/closeButton";
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
  ToggleButtonProps,
} from "@/types";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {T} [as] 렌더링할 요소 또는 컴포넌트. 기본값은 button이며, Chip의 경우 input으로 사용될 수 있음
 * @param {boolean} [defaultSelected=false] 칩의 토글의 default 활성화 상태
 * @param {boolean} [isSelected=false] 외부에서 제어할 활성 상태.
 * @param {string} [label] 칩 버튼에 들어갈 텍스트
 * @param {boolean} [clickable=true] 클릭할 수 있는 칩인지 여부 판단
 * @param {ChipType} [variant=default] 칩 버튼의 타입, 기본은 default
 * @param {() => void} [onDelete] 칩 버튼을 삭제했을 때의 동작
 * @param {() => void} [onClick] Chip 버튼 클릭 시 동작
 * @param {() => void} [onKeyDown] 토글 버튼이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export type ChipType = "default" | "positive" | "negative";

export interface ChipProps extends ToggleButtonProps {
  clickable?: boolean;
  variant?: ChipType;
  label: string;
  onDelete?: () => void;
}

type ChipComponent = <T extends ElementType = "button">(
  props: PolymorphicComponentProps<T, ChipProps>
) => ReactNode | null;

const ChipLabel = ({
  label,
  variant,
  isActived,
}: {
  label: string;
  variant: "default" | "positive" | "negative";
  isActived: boolean;
}) => {
  return (
    <styled.span
      data-selected={isActived}
      textStyle="label2"
      className={chipLabel({
        type: variant,
      })}
    >
      {label}
    </styled.span>
  );
};

const Chip: ChipComponent = forwardRef(
  <T extends ElementType = "button">(
    props: PolymorphicComponentProps<T, ChipProps>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as: Component = "button" as ElementType,
      clickable = true,
      label,
      variant = "default",
      onKeyDown,
      onClick,
      onDelete,
      isSelected = false,
      defaultSelected = false,
      ...rest
    } = props;
    const [isActived, setIsActive] = useState(() =>
      isSelected ? isSelected : defaultSelected
    );
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (isSelected !== undefined) {
        setIsActive(isSelected);
      }
    }, [isSelected]);

    const handleClick = () => {
      onClick?.();
      clickable ? setIsActive((prev) => !prev) : null;
    };

    const handleDeleteButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete?.();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!clickable) return;
      if (event.currentTarget === event.target) {
        event.preventDefault();
        if (event.key === "Enter" || event.key === " ") {
          setIsActive((prev) => !prev);
          onKeyDown?.();
        }
      }
    };

    return (
      <Component
        aria-label={`chip button ${isActived ? true : false}`}
        data-selected={isActived}
        ref={ref}
        className={chip({
          type: variant,
          clickable: clickable,
        })}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest.customStyle}
      >
        <ChipLabel isActived={isActived} label={label} variant={variant} />
        {onDelete ? (
          <button
            aria-label="chip delete button"
            ref={closeButtonRef}
            tabIndex={0}
            onClick={handleDeleteButtonClick}
            onKeyDown={onDelete}
          >
            <CloseButton color={isActived ? "#ffffff" : "#8f8f8f"} size={14} />
          </button>
        ) : null}
      </Component>
    );
  }
);

export default Chip;

const chipLabel = cva({
  variants: {
    type: {
      default: {
        "&[data-selected=true]": {
          color: "white",
        },
        "&[data-selected=false]": {
          color: "mono.950",
        },
      },
      positive: {
        color: "green.500",
      },
      negative: {
        color: "red.500",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const chip = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
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
    type: {
      default: {
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
      positive: {
        bgColor: "white",
        borderWidth: "0.0625rem",
        borderColor: "green.500",
      },
      negative: {
        bgColor: "white",
        borderWidth: "0.0625rem",
        borderColor: "red.500",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
