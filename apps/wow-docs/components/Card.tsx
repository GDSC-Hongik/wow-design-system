import { css } from "@styled-system/css";
import { clsx } from "clsx";
import type { CSSProperties, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  isBackground?: boolean;
  className?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
}

const Card = ({
  children,
  isBackground = false,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(containerStyle, className)}
      {...(props.style && { style: props.style })}
    >
      {isBackground ? (
        <div
          className={contentStyle}
          {...(props.contentStyle && { style: props.contentStyle })}
        >
          {children}
        </div>
      ) : (
        children
      )}
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

  paddingY: 20,
  paddingX: 114,
});
