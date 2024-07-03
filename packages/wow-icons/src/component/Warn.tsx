import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Warn = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "24",
      height = "25",
      viewBox = "0 0 24 25",
      stroke = "white",
      fill = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="warn icon"
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
          d="M21.3 12.5C21.3 17.6362 17.1362 21.8 12 21.8C6.86375 21.8 2.7 17.6362 2.7 12.5C2.7 7.36375 6.86375 3.2 12 3.2C17.1362 3.2 21.3 7.36375 21.3 12.5Z"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
        <path
          d="M12.766 6.81606L12.6566 14.9411H11.3441L11.2348 6.81606H12.766ZM12.0004 18.2223C11.4535 18.2223 10.9848 17.7692 11.0004 17.2067C10.9848 16.6598 11.4535 16.2067 12.0004 16.2067C12.5473 16.2067 13.0004 16.6598 13.0004 17.2067C13.0004 17.7692 12.5473 18.2223 12.0004 18.2223Z"
          fill={color[fill]}
        />
      </svg>
    );
  }
);

Warn.displayName = "Warn";
export default Warn;
