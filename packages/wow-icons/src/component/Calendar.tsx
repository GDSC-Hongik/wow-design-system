import { forwardRef } from "react";
import { color } from "wowds-tokens";

import type { IconProps } from "@/types/Icon.ts";

const Calendar = forwardRef<SVGSVGElement, IconProps>(
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
        aria-label="calendar icon"
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
          d="M21.3 4.7V20.3H2.7V4.7L21.3 4.7Z"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
        <path d="M17 2V7" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M12 2V7" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M7 2V7" stroke={color[stroke]} strokeWidth="1.4" />
        <path d="M3 9.5L21 9.5" stroke={color[stroke]} strokeWidth="1.4" />
        <path
          d="M18.5 15.5C18.5 16.6046 17.6046 17.5 16.5 17.5C15.3954 17.5 14.5 16.6046 14.5 15.5C14.5 14.3954 15.3954 13.5 16.5 13.5C17.6046 13.5 18.5 14.3954 18.5 15.5Z"
          stroke={color[stroke]}
          strokeWidth="1.4"
        />
      </svg>
    );
  }
);

Calendar.displayName = "Calendar";
export default Calendar;
