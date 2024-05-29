import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "../types/Icon.ts";

const UpArrow = forwardRef<HTMLSpanElement, IconProps>(
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
      <span
        className={className}
        ref={ref}
        style={{ display: "inline-flex", width, height }}
        {...rest}
      >
        <svg
          fill={color[fill]}
          height={height}
          viewBox={viewBox}
          width={width}
          xmlns="http://www.w3.org/2000/svg"
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
      </span>
    );
  }
);

UpArrow.displayName = "UpArrow";
export default UpArrow;
