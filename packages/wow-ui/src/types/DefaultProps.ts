import type { CSSProperties } from "react";

/**
 * @description 컴포넌트에 전달한 기본적으로 전달한 props 입니다.
 * @property {string} className - 컴포넌트에 전달할 커스텀 클래스명입니다.
 * @property {CSSProperties} style - 컴포넌트에 전달할 커스텀 스타일입니다.
 */
export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
}
