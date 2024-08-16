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
          d="M10.8018 5.37344L10.9767 5.58333H11.2499H17.7499V16.9167H2.24992V3.08333L8.89337 3.08333L10.8018 5.37344Z"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
        <path
          d="M8.33333 12.5002C8.33333 13.4206 7.58714 14.1668 6.66667 14.1668C5.74619 14.1668 5 13.4206 5 12.5002C5 11.5797 5.74619 10.8335 6.66667 10.8335C7.58714 10.8335 8.33333 11.5797 8.33333 12.5002Z"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
      </svg>
    );
  }
);

Folder.displayName = "Folder";
export default Folder;
