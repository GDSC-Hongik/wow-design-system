import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Trash = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "24",
      height = "24",
      viewBox = "0 0 24 24",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="trash icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M19.2964 6V22H4.71019L4.71019 6"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
        <path d="M17 3L7 3" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M12 18L12 10" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M15.5 18L15.5 10" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M8.5 18L8.5 10" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M22 6L2 6" stroke={color[stroke]} strokeWidth="1.4" />
      </svg>
    );
  }
);

Trash.displayName = "Trash";
export default Trash;
