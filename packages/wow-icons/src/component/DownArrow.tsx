import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const DownArrow = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "20",
      height = "20",
      viewBox = "0 0 20 20",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="down-arrow icon"
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
          d="M16 9L10 14L4 9"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
);

DownArrow.displayName = "DownArrow";
export default DownArrow;
