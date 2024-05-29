import type { Ref } from "react";

import type { IconProps } from "../types/Icon.ts";

const UpArrow = (
  {
    className,
    width = 24,
    height = 24,
    viewBox = "0 0 24 24",
    fill = "#E4E4E5",
    stroke = "#E4E4E5",
    ...rest
  }: IconProps,
  ref: Ref<HTMLSpanElement>
) => {
  return (
    <span
      className={className}
      ref={ref}
      style={{ display: "inline-flex", width: width, height: height }}
      {...rest}
    >
      <svg
        fill={fill}
        height={height}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_36_3519)">
          <path
            d="M19 12L5 12"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 6"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 18"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
        <defs>
          <clipPath id="clip0_36_3519">
            <rect fill={fill} height={height} width={width} />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default UpArrow;
