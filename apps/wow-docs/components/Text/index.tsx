import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ColorToken } from "@styled-system/tokens";
import { clsx } from "clsx";
import type { CSSProperties, ElementType, PropsWithChildren } from "react";
import type { typography as typoType } from "wowds-tokens";

type ColorKey = ColorToken;
type TypoKey = keyof typeof typoType;

/**
 * @description Text 컴포넌트
 * @param {ElementType} as - HTML 태그 이름입니다. 기본값은 "p" 입니다.
 * @param {TypoKey} typo - 텍스트 타이포입니다. 기본값은 "body1" 입니다.
 * @param {ColorKey} color - 텍스트 색상입니다. 기본값은 "textBlack" 입니다.
 * @param {CSSProperties} style - 커스터 할 수 있는 컴포넌트 스타일입니다.
 * @param {string} className - 커스텀 할 수 있는 컴포넌트 클래스 이름입니다.
 */
interface TextProps<T extends ElementType = "p"> extends PropsWithChildren {
  as?: T;
  typo?: TypoKey;
  color?: ColorKey;
  style?: CSSProperties;
  className?: string;
}

const Text = <T extends ElementType = "p">({
  as,
  typo = "body1",
  color = "textBlack",
  children,
  className,
  ...rest
}: TextProps<T>) => {
  const Component = styled(as || "p");

  return (
    <Component
      className={clsx(
        css({
          textStyle: typo,
          color: color,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
