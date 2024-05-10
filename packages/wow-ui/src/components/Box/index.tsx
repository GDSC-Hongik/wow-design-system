import { ReactNode } from "react";
import { css } from "@styled-system/css/css";

export interface ButtonProps {
  children: ReactNode;
}

console.log(1 == 1);

function BoxHi() {
  return null;
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
