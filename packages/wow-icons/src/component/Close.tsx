import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Close = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="close icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g id="&#235;&#139;&#171;&#234;&#184;&#176;">
          <path
            d="M19 20L12 12L19 4"
            id="Vector 499"
            stroke={color[stroke]}
            strokeLinejoin="bevel"
            strokeWidth="1.4"
          />
          <path
            d="M5 4L12 12L5 20"
            id="Vector 500"
            stroke={color[stroke]}
            strokeLinejoin="bevel"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    );
  }
);

Close.displayName = "Close";
export default Close;
