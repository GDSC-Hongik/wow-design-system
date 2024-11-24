"use client";

import NavItem from "@components/NavItem";
import Space from "@components/Space";
import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { navMenu } from "constants/navMenu";
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
    <styled.aside
      aria-label="navigation bar"
      className={sidebarContainerStyle}
      width={250}
    >
      <Space height={54} />
      <GdscLogo />
      <div className={titleTextStyle}>Wow Design System</div>
      <Space height={49} />
      <nav
        aria-label="nav menu"
        className={navContainerStyle}
        role="navigation"
      >
        <section>
          {navMenu.map((menu) => (
            <NavItem
              alt={menu.alt}
              children={menu.children}
              href={menu.href}
              icon={menu.icon}
              key={menu.label}
              label={menu.label}
            />
          ))}
        </section>
      </nav>
    </styled.aside>
  );
};

export default Sidebar;

const sidebarContainerStyle = css({
  width: "250px !important",
  minWidth: "250px",
  height: "100%",
  paddingLeft: "20px",
  flexShrink: 0,
});

const titleTextStyle = css({
  color: "textBlack",
  fontFamily: "Product-Sans",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "130%",
  letterSpacing: "-0.2px",
});

const navContainerStyle = css({
  padding: "8px 0px",
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 98px)",
  justifyContent: "space-between",
});
