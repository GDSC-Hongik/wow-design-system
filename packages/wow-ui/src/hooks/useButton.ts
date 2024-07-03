"use client";

import type { KeyboardEvent } from "react";
import { useCallback, useState } from "react";

interface UseButtonProps {
  disabled?: boolean;
  onMouseLeave?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
}

const useButton = ({
  disabled = false,
  onMouseLeave,
  onKeyUp,
  onKeyDown,
  onPointerDown,
  onPointerUp,
}: UseButtonProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const handleMouseLeave = useCallback(() => {
    if (!disabled) setPressed(false);
    onMouseLeave?.();
  }, [setPressed, disabled, onMouseLeave]);

  const handlePointerDown = useCallback(() => {
    if (!disabled) setPressed(true);
    onPointerDown?.();
  }, [setPressed, disabled, onPointerDown]);

  const handlePointerUp = useCallback(() => {
    if (!disabled) setPressed(false);
    onPointerUp?.();
  }, [setPressed, disabled, onPointerUp]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        setPressed(true);
        onKeyDown?.();
      }
    },
    [setPressed, onKeyDown]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        setPressed(false);
        onKeyUp?.();
      }
    },
    [setPressed, onKeyUp]
  );

  return {
    pressed,
    handleKeyDown,
    handleKeyUp,
    handleMouseLeave,
    handlePointerDown,
    handlePointerUp,
  };
};

export default useButton;
