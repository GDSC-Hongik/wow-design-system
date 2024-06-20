"use client";
import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { ColorToken } from "@styled-system/tokens";
import { RightArrow } from "wowds-icons";

import Checkbox from "@/components/Checkbox";
import { useCheckedState } from "@/hooks";

interface BaseBoxProps {
  leftElement?: React.ReactNode;
  text: string;
  textColor?: ColorToken;
  subText?: string;
  subTextColor?: ColorToken;
  status?: "default" | "success" | "error";
  style?: React.CSSProperties;
  className?: string;
}
export interface ArrowBoxProps extends BaseBoxProps {
  type?: "arrow";
  onClick: () => void;
  onChange?: never;
  checked?: never;
}

export interface CheckboxBoxProps extends BaseBoxProps {
  type?: "checkbox";
  onChange: () => void;
  checked?: boolean;
  onClick?: never;
}

export interface TextBoxProps extends BaseBoxProps {
  type?: "text";
  onClick?: never;
  onChange?: never;
  checked?: never;
}

type BoxType = "arrow" | "checkbox" | "text";

type BoxProps<T extends BoxType> = T extends "arrow"
  ? ArrowBoxProps
  : T extends "checkbox"
    ? CheckboxBoxProps
    : TextBoxProps;

/**
 * @description 사용자에게 보여주어야 하는 정보를 담을 수 있는 Box 컴포넌트입니다.
 * @param {ReactNode} [leftElement] Box 컴포넌트의 왼쪽에 들어갈 수 있는 요소입니다. (아이콘, 이미지 등)
 * @param {string} [className] 체크박스에 전달하는 커스텀 클래스를 설정합니다.
 * @param {string} [textColor] text의 색상을 변경할 수 있습니다.
 * @param {"text" | "checkbox" | "arrow"} [type] Box 컴포넌트의 타입을 설정합니다.
 * @param {string} text Box 컴포넌트에 메인으로 표기할 텍스트를 입력합니다.
 * @param {string} [subText] Box 컴포넌트에 작성할 추가 정보를 입력합니다.
 * @param {string} [subTextColor] subtext의 색상을 변경할 수 있습니다.
 * @param {"default" | "success" | "error"} [status] Box 컴포넌트를 통해 사용자의 상태를 반환합니다.
 * @param {() => void} [onClick] Box 컴포넌트의 타입이 "arrow"일때 수행할 onClick 함수를 입력합니다.
 * @param {() => void} [onChange] Box 컴포넌트의 타입이 "checkbox"일때 수행할 onChange 함수를 입력합니다.
 * @throws {onClick} onClick 함수는 "text", "checkbox" type에서 사용할 수 없습니다.
 * @throws {onChange} onChange 함수는 "text", "arrow" type에서 사용할 수 없습니다.
 * @param {CSSProperties} [style] Box 컴포넌트에 적용할 수 있는 custom style
 */

const Box = <T extends BoxType>({
  leftElement,
  type = "text",
  text,
  textColor,
  subText,
  subTextColor,
  status = "default",
  onClick,
  onChange,
  style,
  checked: checkedProp,
  ...rest
}: BoxProps<T>) => {
  const { handleClick, checked } = useCheckedState({
    checked: checkedProp,
    onChange,
  });

  const getStrokeColor = (status: "default" | "success" | "error") => {
    switch (status) {
      case "default":
        return "outline";
      case "error":
        return "error";
      default:
        return "primary";
    }
  };
  const handleArrowClick = () => {
    if (type === "arrow" && onClick) {
      onClick();
    }
  };
  return (
    <Flex
      alignItems="center"
      className={containerStyle({ status, type })}
      direction="row"
      gap="lg"
      id={`box-${text}`}
      justifyContent="space-between"
      style={{ ...style }}
      onClick={handleArrowClick}
      {...rest}
    >
      <Flex alignItems="center" direction="row" gap="xs">
        {leftElement}
        <Flex direction="column" gap="xxs">
          <styled.span
            color={textColor ? textColor : "textBlack"}
            textStyle="h3"
          >
            {text}
          </styled.span>
          <styled.span
            color={subTextColor ? subTextColor : "sub"}
            textStyle="body1"
          >
            {subText}
          </styled.span>
        </Flex>
      </Flex>
      <div>
        {type === "checkbox" ? (
          <Checkbox checked={checked} onClick={handleClick} />
        ) : type === "arrow" ? (
          <RightArrow height={20} stroke={getStrokeColor(status)} width={20} />
        ) : null}
      </div>
    </Flex>
  );
};

export default Box;

const containerStyle = cva({
  base: {
    paddingX: "xl",
    paddingTop: "xl",
    paddingBottom: "lg",
    borderRadius: "md",
    border: "1px solid",
    base: {
      width: "100%",
    },
    md: {
      maxWidth: "40.75rem",
      minWidth: "19.75rem",
    },
    backgroundColor: "white",
  },
  variants: {
    status: {
      default: {
        borderColor: "outline",
      },
      success: {
        borderColor: "primary",
      },
      error: {
        borderColor: "error",
      },
    },
    type: {
      arrow: {
        cursor: "pointer",
      },
      text: {
        cursor: "default",
      },
      checkbox: {
        cursor: "default",
      },
    },
  },
});
