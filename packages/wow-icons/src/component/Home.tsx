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
        <g id="&#237;&#153;&#136;">
          <path
            d="M16.6665 7.91675V17.7399H3.33317V7.91675"
            id="Vector 497"
            stroke={color[stroke]}
            strokeWidth="1.16667"
          />
          <path
            d="M2.08317 8.75L9.99984 2.5L17.9165 8.75"
            id="Vector 499"
            stroke={color[stroke]}
            strokeLinejoin="bevel"
            strokeWidth="1.16667"
          />
          <path
            d="M11.6666 13.3334C11.6666 14.2539 10.9204 15.0001 9.99992 15.0001C9.07944 15.0001 8.33325 14.2539 8.33325 13.3334C8.33325 12.4129 9.07944 11.6667 9.99992 11.6667C10.9204 11.6667 11.6666 12.4129 11.6666 13.3334Z"
            id="Ellipse 37"
            stroke={color[stroke]}
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    );
  }
);

Home.displayName = "Home";
export default Home;
