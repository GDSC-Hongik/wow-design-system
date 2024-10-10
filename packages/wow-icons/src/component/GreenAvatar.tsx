import { forwardRef } from "react";

import type { IconProps } from "@/types/Icon.ts";

const GreenAvatar = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="green-avatar icon"
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
          fill="url(#paint0_linear_2077_1371)"
          height={height}
          rx="50"
          width={width}
        />
        <circle cx="50" cy="38" fill="#FBD9D7" r="16.25" />
        <path
          clipRule="evenodd"
          d="M52.2938 37.6293C53.6522 35.3743 54.4002 32.9218 54.5853 30.4644C57.5936 30.6435 60.5993 29.9819 63.2495 28.567C60.2961 24.4398 55.4622 21.75 50.0001 21.75C41.0083 21.75 33.719 29.0393 33.719 38.0311C33.719 40.6215 34.3239 43.0705 35.4002 45.2447C41.874 46.4349 48.6964 43.6009 52.2938 37.6293Z"
          fill="#333333"
          fillRule="evenodd"
        />
        <path
          d="M80.75 85.3481C80.75 93.7773 66.9828 100 50 100C33.0172 100 19.25 93.7773 19.25 85.3481C19.25 76.9189 19.25 58.75 50 58.75C80.75 58.75 80.75 76.9189 80.75 85.3481Z"
          fill="url(#paint1_linear_2077_1371)"
        />
        <path
          clipRule="evenodd"
          d="M32.0455 22.6619C31.8224 18.3739 34.9923 14.6123 39.3133 14.1527C42.3354 13.8313 45.1467 15.2073 46.7978 17.5138C47.7723 16.6429 49.0193 16.0585 50.4181 15.9097C53.9686 15.5321 57.1529 18.1042 57.5305 21.6547C57.9082 25.2052 55.336 28.3895 51.7856 28.7672C49.8575 28.9722 48.0374 28.3074 46.7161 27.0884C45.8876 28.2071 44.7754 29.1123 43.4722 29.6894C43.6953 33.9774 40.5253 37.7391 36.2043 38.1987C31.7344 38.674 27.7255 35.4359 27.2501 30.966C26.8667 27.3606 28.8993 24.0551 32.0455 22.6619Z"
          fill="#333333"
          fillRule="evenodd"
        />
        <path
          d="M35.5136 77.6081C36.7352 79.7082 41.4661 84.2361 50.6169 85.5459C62.0554 87.1831 68.9184 79.3259 64.4424 72.2613C59.9664 65.1968 49.934 69.4345 49.9928 75.8325C50.0516 82.2304 57.973 90.4744 71.9175 83.2493C83.0731 77.4693 85.1063 64.9172 84.7285 59.3637"
          stroke="#EA4335"
          strokeLinecap="round"
          strokeWidth="2.1"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2077_1371"
            x1="50"
            x2="50"
            y1="0"
            y2="100"
          >
            <stop stopColor="#34A853" />
            <stop offset="1" stopColor="#1F6532" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2077_1371"
            x1="50"
            x2="50"
            y1="58.75"
            y2="100"
          >
            <stop stopColor="#C2E5CB" />
            <stop offset="1" stopColor="#5DB975" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

GreenAvatar.displayName = "GreenAvatar";
export default GreenAvatar;
