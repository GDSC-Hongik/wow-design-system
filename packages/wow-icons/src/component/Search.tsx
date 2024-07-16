import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Search = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="search icon"
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
          d="M18 10C18 13.866 14.866 17 11 17C7.13401 17 4 13.866 4 10C4 6.13401 7.13401 3 11 3C14.866 3 18 6.13401 18 10Z"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
        <path
          d="M15 16L19 21.5"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
);

Search.displayName = "Search";
export default Search;
