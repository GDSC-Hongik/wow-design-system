import { forwardRef } from "react";

import type { IconProps } from "@/types/Icon.ts";

const BlueAvatar = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="blue-avatar icon"
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
          fill="url(#paint0_linear_2077_1337)"
          height={height}
          rx="50"
          width={width}
        />
        <circle cx="50" cy="38" fill="#FDE6B2" r="16.25" />
        <path
          clipRule="evenodd"
          d="M51.7811 38.5623C54.4138 38.5623 56.9005 37.9374 59.101 36.8279C60.5332 39.5608 62.719 41.8366 65.3824 43.3794C65.9647 41.7042 66.2812 39.9046 66.2812 38.0311C66.2812 29.0393 58.9919 21.75 50 21.75C44.5407 21.75 39.7089 24.437 36.7551 28.5607C39.213 34.435 45.015 38.5623 51.7811 38.5623Z"
          fill="#333333"
          fillRule="evenodd"
        />
        <path
          d="M80.75 85.3481C80.75 93.7773 66.9828 100 50 100C33.0172 100 19.25 93.7773 19.25 85.3481C19.25 76.9189 19.25 58.75 50 58.75C80.75 58.75 80.75 76.9189 80.75 85.3481Z"
          fill="url(#paint1_linear_2077_1337)"
        />
        <path
          d="M83.713 45.4844C84.5605 45.6642 85.196 46.3693 85.2869 47.231L85.7765 51.8725C85.8674 52.7342 85.3931 53.5564 84.6017 53.9091L80.3387 55.8091C79.5473 56.1619 78.6188 55.9649 78.0387 55.3212L74.9144 51.8539C74.3344 51.2103 74.2348 50.2663 74.6677 49.5158L76.9998 45.4729C77.4327 44.7223 78.2997 44.3359 79.1473 44.5158L83.713 45.4844Z"
          fill="#FDDD99"
        />
        <path
          d="M22.4841 24.9364L21.6965 31.3307L27.8889 29.8728L22.8833 33.8833L28.2253 37.2844L21.9338 36.5616L23.2961 42.8293L19.4043 37.7968L15.9889 43.2596L16.7765 36.8653L10.584 38.3231L15.5897 34.3127L10.2477 30.9116L16.5392 31.6344L15.1769 25.3666L19.0686 30.3992L22.4841 24.9364Z"
          fill="#FBBC04"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2077_1337"
            x1="50"
            x2="50"
            y1="0"
            y2="100"
          >
            <stop stopColor="#368FF7" />
            <stop offset="1" stopColor="#205694" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2077_1337"
            x1="50"
            x2="50"
            y1="58.75"
            y2="100"
          >
            <stop stopColor="#AFD2FC" />
            <stop offset="1" stopColor="#4792EE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

BlueAvatar.displayName = "BlueAvatar";
export default BlueAvatar;
