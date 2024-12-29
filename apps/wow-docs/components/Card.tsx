import { css } from "@styled-system/css";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {}
const Card = ({ children }: CardProps) => {
  return <div className={containerStyle}>{children}</div>;
};

export default Card;

const containerStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "sm",
  padding: "32px 40px",

  display: "flex",
  justifyContent: "center",
});
