import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}
