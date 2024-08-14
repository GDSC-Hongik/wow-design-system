import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Reload = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "21",
      height = "20",
      viewBox = "0 0 21 20",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="reload icon"
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
          d="M3.83325 10C3.83325 13.6819 6.81802 16.6667 10.4999 16.6667C14.1818 16.6667 17.1666 13.6819 17.1666 10C17.1666 6.31814 14.1818 3.33337 10.4999 3.33337C7.95393 3.33337 5.74127 4.76056 4.61834 6.85855"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
        <path
          d="M7.96668 6.91255L4.31722 7.54329L3.03873 4.0674"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.16667"
        />
      </svg>
    );
  }
);

Reload.displayName = "Reload";
export default Reload;
