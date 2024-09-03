"use client";

import { css } from "@styled-system/css";
import type { FlexProps } from "@styled-system/jsx";
import { Flex, styled } from "@styled-system/jsx";
import type { CSSProperties, ReactNode } from "react";
import { forwardRef } from "react";
import { Close, RightArrow } from "wowds-icons";

/**
 * @description 토스트 컴포넌트입니다.
 *
 * @param {string} id - 토스트 컴포넌트의 id.
 * @param {"default"|"close"|"arrow"} type - 토스트 컴포넌트의 타입.
 * @param {string} text - 토스트 컴포넌트의 메인 텍스트.
 * @param {ReactNode} icon - 토스트 컴포넌트의 좌측에 들어갈 아이콘.
 * @param {string} [subText] - 토스트 컴포넌트의 보조 텍스트.
 * @param {CSSProperties} [style] - 커스텀 스타일을 적용하기 위한 객체.
 * @param {string} [className] - 커스텀 클래스를 적용하기 위한 문자열.
 */

export interface ToastProps extends FlexProps {
  id: string;
  type: "default" | "close" | "arrow";
  text: string;
  icon?: ReactNode;
  subText?: string;
  style?: CSSProperties;
  className?: string;
}

export const Toast = forwardRef(
  ({ text, subText, type, icon, ...rest }: ToastProps) => {
    const TypeIconComponent = () => {
      if (type === "close") return <Close stroke="outline" width={14} />;
      else if (type === "arrow") return <RightArrow stroke="outline" />;
      return null;
    };

    return (
      <Flex
        align="center"
        className={toastContainerStyle}
        justify="space-between"
        {...rest}
      >
        <Flex align="center" gap="0.25rem">
          {icon}
          <Flex direction="column" justifyContent="center">
            <styled.span color="textWhite" textStyle="body1">
              {text}
            </styled.span>
            <styled.span color="outline" textStyle="body2">
              {subText}
            </styled.span>
          </Flex>
        </Flex>
        <TypeIconComponent />
      </Flex>
    );
  }
);

const toastContainerStyle = css({
  width: "22.375rem",
  padding: "0.75rem 1rem",

  borderRadius: "md",

  zIndex: 9999,

  background: "backgroundDimmer",
  backdropFilter: "blur(30px)",
  boxShadow: "mono",
});
