import type { ComponentProps, Ref } from "react";
import { forwardRef, useRef } from "react";

import type { BasicButtonProps, ButtonElementType } from "@/types";

export interface ChipProps<T extends ButtonElementType = "button">
  extends BasicButtonProps<T> {
  clickable: boolean;
  color: "default" | "positive" | "negative";
  label: string;
  variant: "outline" | "solid";
  onDelete: (event: MouseEvent) => void;
}

const Chip = forwardRef(
  <T extends ButtonElementType>(
    props: ChipProps<T>,
    ref: Ref<HTMLButtonElement>
  ) => {
    const {
      as = "button",
      color = "default",
      clickable,
      label,
      variant = "outline",
    } = props;
    const chipRef = useRef(null);

    return <></>;
  }
);
