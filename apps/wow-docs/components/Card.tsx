import { css, cx } from "@styled-system/css";
import type { CSSProperties, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  isBackground?: boolean;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
  className?: string;
}

const Card = ({
  children,
  isBackground = false,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cx(containerStyle, className)}
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
