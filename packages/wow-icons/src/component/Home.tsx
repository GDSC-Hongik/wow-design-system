import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Home = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="home icon"
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
          d="M16.6667 7.9165V17.7397H3.33342V7.9165"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
        <path
          d="M2.08341 8.75L10.0001 2.5L17.9167 8.75"
          stroke={color[stroke]}
          strokeLinejoin="bevel"
          strokeWidth="1.16667"
        />
        <path
          d="M11.6666 13.3332C11.6666 14.2536 10.9204 14.9998 9.99992 14.9998C9.07944 14.9998 8.33325 14.2536 8.33325 13.3332C8.33325 12.4127 9.07944 11.6665 9.99992 11.6665C10.9204 11.6665 11.6666 12.4127 11.6666 13.3332Z"
          stroke={color[stroke]}
          strokeWidth="1.16667"
        />
      </svg>
    );
  }
);

Home.displayName = "Home";
export default Home;
