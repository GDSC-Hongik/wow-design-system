import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Link = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="link icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g id="&#235;&#167;&#129;&#237;&#129;&#172;">
          <path
            d="M9.39984 16H2.75147V8H9.39984M14.5998 16H21.2495V8H14.5998"
            id="Vector 497"
            stroke={color[stroke]}
            strokeWidth="1.4"
          />
          <path
            d="M17 12L7 12"
            id="Vector 502"
            stroke={color[stroke]}
            strokeWidth="1.4"
          />
        </g>
      </svg>
    );
  }
);

Link.displayName = "Link";
export default Link;
