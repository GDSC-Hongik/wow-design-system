import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Check = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "14",
      height = "9",
      viewBox = "0 0 14 9",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="check icon"
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
          d="M13 1L5 8L1 4.5"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
);

Check.displayName = "Check";
export default Check;
