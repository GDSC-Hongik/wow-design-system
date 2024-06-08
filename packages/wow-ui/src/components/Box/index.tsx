import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { forwardRef } from "react";
import { Check } from "wowds-icons";

import Checkbox from "@/components/Checkbox";

export interface BoxProps {
  type?: "text" | "checkbox" | "arrow";
  text: string;
  subText?: string;
  status?: "default" | "success" | "error";
  onClick?: () => void;
}

/**
 * @description 사용자에게 보여주어야 하는 정보를 담을 수 있는 Box 컴포넌트입니다.
 * @param {"text" | "checkbox" | "arrow"} [type] Box 컴포넌트의 타입을 설정합니다.
 * @param {string} text Box 컴포넌트에 메인으로 표기할 텍스트를 입력합니다.
 * @param {string} [subText] Box 컴포넌트에 작성할 추가 정보를 입력합니다.
 * @param {"default" | "success" | "error"} [status] Box 컴포넌트를 통해 사용자의 상태를 반환합니다.
 * @param {() => void} [onClick] Box 컴포넌트의 타입이 "checkbox"와 "arrow"일때 수행할 onClick 함수를 입력합니다.
 * @throws {onClick} onClick 함수는 "text" type에서 사용할 수 없습니다.
 * @param {ComponentPropsWithRef<T>["ref"]} [ref] 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    { type = "text", text, subText, status = "default", onClick }: BoxProps,
    ref
  ) => {
    return (
      <Flex
        alignItems="center"
        className={containerStyle({ status: status })}
        direction="row"
        gap="lg"
        justifyContent="space-between"
      >
        <Flex direction="column" gap="xxs">
          <styled.span color="textBlack" fontWeight="600" textStyle="h3">
            {text}
          </styled.span>
          <styled.span color="black" textStyle="body1">
            {subText}
          </styled.span>
        </Flex>
        <div style={{ flex: 2 }} onClick={onClick}>
          {type === "checkbox" ? <Checkbox /> : type === "arrow" ? ">" : null}
        </div>
      </Flex>
    );
  }
);

export default Box;

const containerStyle = cva({
  base: {
    width: "100%",
    paddingX: "xl",
    paddingTop: "xl",
    paddingBottom: "lg",
    borderRadius: "md",
    border: "1px solid",
    minWidth: "19.75rem",
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
  },
});
