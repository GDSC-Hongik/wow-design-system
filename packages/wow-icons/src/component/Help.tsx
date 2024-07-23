import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Help = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "24",
      height = "24",
      viewBox = "0 0 24 24",
      stroke = "white",
      fill = "white",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="help icon"
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
          d="M21.3 12C21.3 17.1362 17.1362 21.3 12 21.3C6.86375 21.3 2.7 17.1362 2.7 12C2.7 6.86375 6.86375 2.7 12 2.7C17.1362 2.7 21.3 6.86375 21.3 12Z"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
        <path
          d="M11.1082 14.3662C11.1238 12.2724 11.7644 11.6318 12.8425 10.9756C13.4832 10.5849 13.9832 9.95994 13.9832 9.08494C13.9832 8.02244 13.155 7.35057 12.1238 7.35057C11.2332 7.35057 10.3425 7.88182 10.2488 9.16307H8.8269C8.90503 7.27244 10.3425 6.16307 12.1238 6.16307C14.0769 6.16307 15.3582 7.42869 15.3582 9.14744C15.3582 10.3662 14.78 11.2256 13.8113 11.8193C12.8425 12.4131 12.4832 13.0068 12.4519 14.3662V14.4443H11.1082V14.3662ZM11.8269 17.7256C11.28 17.7256 10.8113 17.2724 10.8269 16.7099C10.8113 16.1631 11.28 15.7099 11.8269 15.7099C12.3738 15.7099 12.8269 16.1631 12.8269 16.7099C12.8269 17.2724 12.3738 17.7256 11.8269 17.7256Z"
          fill={color[fill]}
        />
      </svg>
    );
  }
);

Help.displayName = "Help";
export default Help;
