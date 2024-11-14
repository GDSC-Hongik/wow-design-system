import { css } from "@styled-system/css";
import type { CSSProperties } from "react";
import { GdscLogo } from "wowds-icons";

/**
 * @description Sidebar 컴포넌트는 탭을 통해 페이지 내비게이션을 제공하는 컴포넌트입니다.
 */
export interface SidebarProps {
  style?: CSSProperties;
}

const Sidebar = ({ style }: SidebarProps) => {
  return (
    <aside
      aria-label="navigation bar"
      className={sidebarContainerStyle}
      style={style}
    >
      <GdscLogo />
      <div className={titleTextStyle}>Wow Design System</div>
    </aside>
  );
};

export default Sidebar;

const sidebarContainerStyle = css({
  width: 250,
  height: "100%",
  flexShrink: 0,
});

const titleTextStyle = css({
  color: "textBlack",
  fontFamily: "Product Sans",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "130%",
  letterSpacing: "-0.2px",
});
