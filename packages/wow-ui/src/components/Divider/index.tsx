import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { CSSProperties } from "react";

export interface DividerProps {
  type?: "light" | "dark";
  style?: CSSProperties;
  className?: string;
}

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {CSSProperties} [style] 커스텀 스타일을 설정합니다.
 * @param {string} [className] 디바이더에 전달하는 커스텀 클래스를 설정합니다.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

const Divider = ({ type = "light", ...rest }: DividerProps) => {
  return (
    <styled.div {...rest}>
      <styled.div
        className={dividerStyle({
          type: type,
        })}
      />
    </styled.div>
  );
};

Divider.displayName = "Divider";

export default Divider;

const dividerStyle = cva({
  base: {
    width: "100%",
    height: "0.075rem",
    borderRadius: "100%",
  },
  variants: {
    type: {
      light: {
        bgColor: "lightDisabled",
      },
      dark: {
        bgColor: "darkDisabled",
      },
    },
  },
});
