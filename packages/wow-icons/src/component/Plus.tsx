import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Plus = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="plus icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g id="+">
          <path
            d="M16 10H4"
            id="Vector 497"
            stroke={color[stroke]}
            strokeLinejoin="bevel"
            strokeWidth="1.4"
          />
          <path
            d="M10 16L10 4"
            id="Vector 498"
            stroke={color[stroke]}
            strokeLinejoin="bevel"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    );
  }
);

Plus.displayName = "Plus";
export default Plus;
