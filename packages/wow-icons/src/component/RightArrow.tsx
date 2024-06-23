import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const RightArrow = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "20",
      height = "21",
      viewBox = "0 0 20 21",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="rightArrow icon"
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
          d="M10 4.5L15 10.5L10 16.5"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
);

RightArrow.displayName = "RightArrow";
export default RightArrow;
