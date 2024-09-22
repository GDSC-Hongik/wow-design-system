"use client";

import { css } from "@styled-system/css";
import type { FlexProps } from "@styled-system/jsx";
import { Flex, styled } from "@styled-system/jsx";
import type { CSSProperties, ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";
import { Close, RightArrow } from "wowds-icons";

import useToast from "./useToast";

/**
 * @description 토스트 컴포넌트입니다.
 *
 * @param {string} id - 토스트 컴포넌트의 id.
 * @param {"default"|"close"|"arrow"} [type] - 토스트 컴포넌트의 타입.
 * @param {string} text - 토스트 컴포넌트의 메인 텍스트.
 * @param {ReactNode} icon - 토스트 컴포넌트의 좌측에 들어갈 아이콘.
 * @param {()=>void} [onClickArrowIcon] - 화살표 아이콘을 클릭했을 때 호출되는 함수.
 * @param {string} [subText] - 토스트 컴포넌트의 보조 텍스트.
 * @param {CSSProperties} [style] - 커스텀 스타일을 적용하기 위한 객체.
 * @param {string} [className] - 커스텀 클래스를 적용하기 위한 문자열.
 */

export interface ToastProps extends FlexProps {
  id: string;
  type?: "default" | "close" | "arrow";
  text: string;
  onClickArrowIcon?: () => void;
  icon?: ReactNode;
  subText?: string;
  toastDuration?: number;
  style?: CSSProperties;
  className?: string;
}

const Toast = forwardRef(
  ({
    id,
    text,
    subText,
    onClickArrowIcon,
    type = "default",
    icon,
    toastDuration,
    ...rest
  }: ToastProps) => {
    const TOAST_DURATION = toastDuration || 2000;
    const ANIMATION_DURATION = 200;
    const { removeToast } = useToast();

    const TypeIconComponent = () => {
      if (type === "close")
        return (
          <Close
            stroke="outline"
            style={{ cursor: "pointer" }}
            width={14}
            onClick={() => removeToast(id)}
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
        removeToast(id);
      }, TOAST_DURATION);

      const timeoutForVisible = setTimeout(() => {
        setOpacity(0);
      }, TOAST_DURATION - ANIMATION_DURATION);

      return () => {
        clearTimeout(timeoutForRemove);
        clearTimeout(timeoutForVisible);
      };
    }, [id, removeToast]);

    return (
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
          <styled.div flexShrink={0}>{icon}</styled.div>
          <Flex direction="column" justifyContent="center" width="100%">
            <styled.span
              color="textWhite"
              textStyle="body1"
              wordBreak="break-all"
            >
              {text}
            </styled.span>
            {subText && (
              <styled.span color="outline" textStyle="body2">
                {subText}
              </styled.span>
            )}
          </Flex>
        </Flex>
        <TypeIconComponent />
      </Flex>
    );
  }
);

const toastContainerStyle = css({
  width: "22.375rem",
  height: "fit-content",
  padding: "0.75rem 1rem",

  borderRadius: "md",

  background: "backgroundDimmer",
  backdropFilter: "blur(30px)",
  boxShadow: "mono",
});

Toast.displayName = "Toast";
export default Toast;
