import { css } from "@styled-system/css/css";
import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={css({
        bg: "red.400",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "red.500" },
      })}
    >
      {children}
    </button>
  );
};

export default Button;
