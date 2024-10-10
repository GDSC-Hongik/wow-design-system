import { forwardRef } from "react";

import type { IconProps } from "@/types/Icon.ts";

const RedAvatar = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "100",
      height = "100",
      viewBox = "0 0 100 100",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="red-avatar icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect
          fill="url(#paint0_linear_2077_1373)"
          height={height}
          rx="50"
          width={width}
        />
        <circle cx="50" cy="38" fill="#D7E9FD" r="16.25" />
        <path
          clipRule="evenodd"
          d="M64.1516 46.0869L37.4788 27.6239C40.4652 24.0348 44.9658 21.75 49.9999 21.75C58.9917 21.75 66.2811 29.0393 66.2811 38.0311C66.2811 40.9617 65.5068 43.7114 64.1516 46.0869Z"
          fill="#5EA5F9"
          fillRule="evenodd"
        />
        <path
          d="M80.75 85.3481C80.75 93.7773 66.9828 100 50 100C33.0172 100 19.25 93.7773 19.25 85.3481C19.25 76.9189 19.25 58.75 50 58.75C80.75 58.75 80.75 76.9189 80.75 85.3481Z"
          fill="url(#paint1_linear_2077_1373)"
        />
        <circle cx="68" cy="24" fill="#5EA5F9" r="5.25" />
        <circle cx="76.875" cy="29.125" fill="#5EA5F9" r="3.875" />
        <circle cx="81.125" cy="35.375" fill="#5EA5F9" r="2.625" />
        <path
          d="M13.5378 46.0435C12.4812 48.2314 11.3773 54.6861 15.414 63.0023C20.46 73.3974 30.8125 74.6864 34.1612 67.023C37.51 59.3596 28.3827 53.4181 23.1139 57.0481C17.8451 60.678 15.4475 71.8567 29.24 79.3678C40.274 85.3767 51.8135 80.0356 56.204 76.614"
          stroke="#163963"
          strokeLinecap="round"
          strokeWidth="2.1"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2077_1373"
            x1="50"
            x2="50"
            y1="0"
            y2="100"
          >
            <stop stopColor="#EE695D" />
            <stop offset="1" stopColor="#EA4335" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2077_1373"
            x1="50"
            x2="50"
            y1="58.75"
            y2="100"
          >
            <stop stopColor="#F9C7C2" />
            <stop offset="1" stopColor="#F28E86" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

RedAvatar.displayName = "RedAvatar";
export default RedAvatar;
