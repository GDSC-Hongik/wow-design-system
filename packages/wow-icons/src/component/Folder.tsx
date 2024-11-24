import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Folder = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "20",
      height = "20",
      viewBox = "0 0 20 20",
      stroke = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="folder icon"
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
          d="M10.802 5.37344L10.9769 5.58333H11.2502H17.7502V16.9167H2.25016V3.08333L8.89361 3.08333L10.802 5.37344Z"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
        <path
          d="M8.33333 12.4999C8.33333 13.4204 7.58714 14.1666 6.66667 14.1666C5.74619 14.1666 5 13.4204 5 12.4999C5 11.5794 5.74619 10.8333 6.66667 10.8333C7.58714 10.8333 8.33333 11.5794 8.33333 12.4999Z"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
      </svg>
    );
  }
);

Folder.displayName = "Folder";
export default Folder;
