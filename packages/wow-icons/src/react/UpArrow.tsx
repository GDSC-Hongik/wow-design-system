import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "../types/Icon.ts";

const UpArrow = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = 24,
      height = 24,
      viewBox = "0 0 24 24",
      fill = "white",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="up-arrow icon"
        className={className}
        fill={color[fill]}
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clipPath="url(#clip0_36_3519)">
          <path
            d="M19 12L5 12"
            stroke={color[stroke]}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 6"
            stroke={color[stroke]}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 18"
            stroke={color[stroke]}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
        <defs>
          <clipPath id="clip0_36_3519">
            <rect fill={color[fill]} height={height} width={width} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

UpArrow.displayName = "UpArrow";
export default UpArrow;
