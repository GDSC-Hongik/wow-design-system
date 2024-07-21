"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { cloneElement, useRef } from "react";
import { DownArrow } from "wowds-icons";

import { DropDownContext } from "../../components/DropDown/context/DropDownContext";
import useClickOutside from "../../hooks/useClickOutside";
import useDropDownState from "../../hooks/useDropDownState";
import useFlattenChildren from "../../hooks/useFlattenChildren";

export interface DropDownWithTriggerProps extends PropsWithChildren {
  /**
   * @description 드롭다운을 열기 위한 외부 트리거 요소입니다.
   * @type {ReactElement}
   */
  trigger: ReactElement;
  /**
   * @description 트리거를 사용할 경우, 레이블은 사용할 수 없습니다.
   * @type {never}
   */
  label?: never;
  /**
   * @description 트리거를 사용할 경우, 플레이스홀더는 사용할 수 없습니다.
   * @type {never}
   */
  placeholder?: never;
}

export interface DropDownWithoutTriggerProps extends PropsWithChildren {
  /**
   * @description 외부 트리거를 사용하지 않는 경우 레이블을 사용할 수 있습니다.
   * @type {ReactNode}
   */
  label?: ReactNode;
  /**
   * @description 외부 트리거를 사용하지 않는 경우 선택되지 않았을 때 표시되는 플레이스홀더입니다.
   * @type {string}
   */
  placeholder?: string;
  /**
   * @description 외부 트리거를 사용하지 않는 경우, 트리거 요소는 사용할 수 없습니다.
   * @type {never}
   */
  trigger?: never;
}

/**
 * @description 사용자가 외부 트리거 컴포넌트 나 내부 요소를 통해서 선택 옵션 리스트 중에 아이템을 선택할 수 있는 드롭다운 컴포넌트 입니다.
 *
 * @param {ReactElement} [trigger] 드롭다운을 열기 위한 외부 트리거 요소입니다.
 * @param {ReactNode} [label] 외부 트리거를 사용하지 않는 경우 레이블을 사용할 수 있습니다.
 * @param {string} [placeholder] 외부 트리거를 사용하지 않는 경우 선택되지 않았을 때 표시되는 플레이스홀더입니다.
 * @param {string} [defaultValue] 초기 선택된 값을 나타냅니다.
 * @param {string} [value] 현재 선택된 값을 나타냅니다.
 * @param {(value: {selectedValue: string; selectedText: ReactNode;}) => void} [onChange] 값이 변경될 때 호출되는 함수입니다.
 * @param {CSSProperties} [style] 드롭다운의 커스텀 스타일.
 * @param {string} [className] 드롭다운에 전달하는 커스텀 클래스.
 */
export type DropDownProps = (
  | DropDownWithTriggerProps
  | DropDownWithoutTriggerProps
) & {
  value?: string;
  defaultValue?: string;
  onChange?: (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => void;
  style?: CSSProperties;
  className?: string;
};

const DropDown = ({
  children,
  trigger,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...rest
}: DropDownProps) => {
  const flattenedChildren = useFlattenChildren(children);
  const dropdownState = useDropDownState({
    value,
    defaultValue,
    children: flattenedChildren,
    onChange,
  });

  const { selectedValue, selectedText, open, setFocusedValue, setOpen } =
    dropdownState;
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  const toggleDropdown = () => {
    dropdownState.setOpen((prevOpen) => {
      if (!prevOpen) setFocusedValue(null);
      return !prevOpen;
    });
  };

  const renderTrigger = (trigger: ReactElement) => (
    <>
      {cloneElement(trigger, {
        onClick: toggleDropdown,
      })}
    </>
  );

  const renderLabel = () => (
    <>
      <styled.span
        color={open ? "primary" : selectedValue ? "textBlack" : "sub"}
        textStyle="label2"
      >
        {label}
      </styled.span>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={dropdownStyle({
          type: open ? "focused" : selectedValue ? "selected" : "default",
        })}
        onClick={toggleDropdown}
      >
        <styled.div
          className={placeholderStyle({
            type: open ? "focused" : selectedValue ? "selected" : "default",
          })}
        >
          {selectedText ? selectedText : placeholder}
        </styled.div>
        <DownArrow
          className={iconStyle({ type: open ? "up" : "down" })}
          stroke={open ? "primary" : selectedValue ? "sub" : "outline"}
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") toggleDropdown();
          }}
        />
      </Flex>
    </>
  );

  const renderOptions = () => (
    <Flex className={dropdownContentStyle()} direction="column">
      {children}
    </Flex>
  );

  return (
    <DropDownContext.Provider value={dropdownState}>
      <Flex
        cursor="pointer"
        direction="column"
        gap="xs"
        outline="none"
        position="relative"
        ref={dropdownRef}
        tabIndex={0}
        width={trigger ? "fit-content" : "auto"}
        onKeyDown={dropdownState.handleKeyDown}
        {...rest}
      >
        {trigger ? renderTrigger(trigger) : renderLabel()}
        {dropdownState.open && renderOptions()}
      </Flex>
    </DropDownContext.Provider>
  );
};

DropDown.displayName = "DropDown";
export default DropDown;

const iconStyle = cva({
  base: {
    transition: "transform 1s ease",
  },
  variants: {
    type: {
      up: {
        transform: "rotate(180deg)",
      },
      down: {
        transform: "rotate(0deg)",
      },
    },
  },
});
const dropdownStyle = cva({
  base: {
    lg: {
      maxWidth: "22.375rem",
    },
    smDown: {
      width: "100%",
    },
    backgroundColor: "backgroundNormal",
    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",
    paddingY: "xs",
    paddingX: "sm",
  },
  variants: {
    type: {
      default: {
        borderColor: "outline",
        _hover: {
          borderColor: "sub",
        },
        _pressed: {
          backgroundColor: "monoBackgroundPressed",
        },
      },
      focused: {
        borderColor: "primary",
        color: "primary",
      },
      selected: {
        borderColor: "sub",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const dropdownContentStyle = cva({
  base: {
    position: "absolute",
    top: "calc(100% + 0.5rem)",
    left: 0,
    zIndex: "dropdown",
    maxHeight: "18.75rem",
    lg: {
      maxWidth: "22.375rem",
    },
    smDown: {
      width: "100%",
    },
    backgroundColor: "backgroundNormal",
    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",
    overflow: "auto",
    _scrollbar: {
      width: "2px",
    },
    _scrollbarThumb: {
      width: "2px",
      height: "65px",
      borderRadius: "sm",
      backgroundColor: "outline",
    },
    _scrollbarTrack: {
      marginTop: "2px",
      marginBottom: "2px",
    },
  },
});

const placeholderStyle = cva({
  base: {
    textStyle: "body1",
  },
  variants: {
    type: {
      default: {
        color: "outline",
        _hover: {
          color: "sub",
        },
      },
      focused: {
        color: "primary",
      },
      selected: {
        color: "textBlack",
      },
    },
  },
});
