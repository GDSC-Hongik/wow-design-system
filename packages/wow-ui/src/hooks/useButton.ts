"use client";

import type { KeyboardEvent } from "react";
import { useCallback, useState } from "react";

interface UseButtonProps {
  disabled?: boolean;
  onKeyDown?: () => void;
}

const useButton = ({ disabled = false, onKeyDown }: UseButtonProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const handleMouseDown = useCallback(() => {
    if (!disabled) setPressed(true);
  }, [setPressed, disabled]);

  const handleMouseUp = useCallback(() => {
    if (!disabled) setPressed(false);
  }, [setPressed, disabled]);

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
      }
    },
    [setPressed]
  );

  return {
    pressed,
    handleKeyDown,
    handleKeyUp,
    handleMouseDown,
    handleMouseUp,
  };
};

export default useButton;
