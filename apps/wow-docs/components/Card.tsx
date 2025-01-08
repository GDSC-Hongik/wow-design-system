import { css } from "@styled-system/css";
import { clsx } from "clsx";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(containerStyle, className)}>{children}</div>;
};

export default Card;

const containerStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "sm",
  padding: "32px 40px",
  display: "flex",
  justifyContent: "center",
});
