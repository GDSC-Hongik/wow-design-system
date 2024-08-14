import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Edit = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="edit icon"
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
          d="M3.00001 18L18 3L21 6L6 21L3.00001 21L3.00001 18Z"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.4"
        />
        <path d="M14.5 6L18 9.5" stroke={color[stroke]} strokeWidth="1.4" />
      </svg>
    );
  }
);

Edit.displayName = "Edit";
export default Edit;
