import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Arrow = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "14",
      height = "14",
      viewBox = "0 0 14 14",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="arrow icon"
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
          d="M2 8L7 4L12 8"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
);

Arrow.displayName = "Arrow";
export default Arrow;
