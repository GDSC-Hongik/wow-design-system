import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const DownArrow2 = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "24",
      height = "24",
      viewBox = "0 0 24 24",
      fill = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="down-arrow-2 icon"
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
          d="M12 15.705L18 9.70496L16.59 8.29496L12 12.875L7.41 8.29496L6 9.70496L12 15.705Z"
          fill={color[fill]}
          fillOpacity="0.56"
        />
      </svg>
    );
  }
);

DownArrow2.displayName = "DownArrow2";
export default DownArrow2;
