import type { HTMLAttributes } from "react";
import type { ColorToken } from "theme/types";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: ColorToken;
  stroke?: ColorToken;
}
