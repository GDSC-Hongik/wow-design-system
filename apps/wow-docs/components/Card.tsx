import { css } from "@styled-system/css";
import type { CSSProperties, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  isBackground?: boolean;
  style?: CSSProperties;
}

const Card = ({ children, isBackground = false, style }: CardProps) => {
  return (
    <div className={containerStyle} {...(style && { style })}>
      {isBackground ? <div className={contentStyle}>{children}</div> : children}
    </div>
  );
};

export default Card;

const containerStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "sm",
  padding: "32px 40px",

  display: "flex",
  justifyContent: "center",
});

const contentStyle = css({
  width: "100%",
  height: "100%",
  background: "white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
