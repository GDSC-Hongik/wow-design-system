"use client";

import { css } from "@styled-system/css";
import type { FlexProps } from "@styled-system/jsx";
import { Flex, styled } from "@styled-system/jsx";
import type { CSSProperties, ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";
import { Close, RightArrow } from "wowds-icons";

/**
 * @description 토스트 컴포넌트입니다.
 *
 * @param {string} id - 토스트 컴포넌트의 id.
 * @param {"default"|"close"|"arrow"} [type] - 토스트 컴포넌트의 타입.
 * @param {string} text - 토스트 컴포넌트의 메인 텍스트.
 * @param {ReactNode} icon - 토스트 컴포넌트의 좌측에 들어갈 아이콘.
 * @param {()=>void} onRemove - 토스트 컴포넌트가 사라지도록 하는 트리거 함수.
 * @param {()=>void} [onClickArrowIcon] - 화살표 아이콘을 클릭했을 때 호출되는 함수.
 * @param {string} [subText] - 토스트 컴포넌트의 보조 텍스트.
 * @param {CSSProperties} [style] - 커스텀 스타일을 적용하기 위한 객체.
 * @param {string} [className] - 커스텀 클래스를 적용하기 위한 문자열.
 */

export interface ToastProps extends FlexProps {
  id: string;
  type?: "default" | "close" | "arrow";
  text: string;
  onRemove: () => void;
  onClickArrowIcon?: () => void;
  icon?: ReactNode;
  subText?: string;
  style?: CSSProperties;
  className?: string;
}

const TOAST_DURATION = 2000;
const ANIMATION_DURATION = 200;

const Toast = forwardRef(
  ({
    id,
    text,
    subText,
    onRemove,
    onClickArrowIcon,
    type = "default",
    icon,
    ...rest
  }: ToastProps) => {
    const TypeIconComponent = () => {
      if (type === "close")
        return (
          <Close
            stroke="outline"
            style={{ cursor: "pointer" }}
            width={14}
            onClick={onRemove}
          />
        );
      else if (type === "arrow")
        return (
          <RightArrow
            stroke="outline"
            style={{ cursor: "pointer" }}
            onClick={onClickArrowIcon}
          />
        );
      return null;
    };

    const [opacity, setOpacity] = useState<number>(0.2);

    useEffect(() => {
      setOpacity(1);
      const timeoutForRemove = setTimeout(() => {
        onRemove();
      }, TOAST_DURATION);

      const timeoutForVisible = setTimeout(() => {
        setOpacity(0);
      }, TOAST_DURATION - ANIMATION_DURATION);

      return () => {
        clearTimeout(timeoutForRemove);
        clearTimeout(timeoutForVisible);
      };
    }, [id, onRemove]);

    return (
      <Flex
        alignItems="center"
        height="100vh"
        justifyContent="center"
        left="0"
        position="fixed"
        top="0"
        width="100vw"
        zIndex="9999"
      >
        <Flex
          align="center"
          className={toastContainerStyle}
          justify="space-between"
          style={{ opacity }}
          transition="opacity"
          transitionDelay="0.5"
          transitionTimingFunction="ease-in-out"
          {...rest}
        >
          <Flex align="center" gap="0.25rem">
            {icon}
            <Flex direction="column" justifyContent="center">
              <styled.span
                color="textWhite"
                textStyle="body1"
                wordBreak="break-all"
              >
                {text}
              </styled.span>
              <styled.span color="outline" textStyle="body2">
                {subText}
              </styled.span>
            </Flex>
          </Flex>
          <TypeIconComponent />
        </Flex>
      </Flex>
    );
  }
);

const toastContainerStyle = css({
  width: "22.375rem",
  padding: "0.75rem 1rem",

  borderRadius: "md",

  background: "backgroundDimmer",
  backdropFilter: "blur(30px)",
  boxShadow: "mono",
});

Toast.displayName = "Toast";
export default Toast;
