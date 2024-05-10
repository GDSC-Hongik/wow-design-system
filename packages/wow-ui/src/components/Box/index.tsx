import { css } from "@styled-system/css/css";
import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

const Box = ({ children }: ButtonProps) => {
  return (
    <button
      className={css({
        bg: "blue.100",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "blue.400" },
      })}
    >
      {children}
    </button>
  );
};

export default Box;
