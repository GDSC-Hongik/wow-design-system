import type { Ref } from "react";

import type { IconProps } from "../types/Icon.ts";

const UpArrow = (
  { className, width = 24, height = 24 }: IconProps,
  ref: Ref<HTMLSpanElement>
) => {
  return (
    <span
      className={className}
      ref={ref}
      style={{ display: "inline-flex", width: width, height: height }}
    >
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_36_3519)">
          <path
            d="M19 12L5 12"
            stroke="#E4E4E5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 6"
            stroke="#E4E4E5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19 12L13 18"
            stroke="#E4E4E5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
        <defs>
          <clipPath id="clip0_36_3519">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default UpArrow;
