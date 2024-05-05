import { ReactNode } from "react";
import { css } from "@styled-system/css/css";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
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
}
