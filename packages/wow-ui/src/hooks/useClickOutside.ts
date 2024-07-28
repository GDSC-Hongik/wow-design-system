import { useEffect } from "react";

import { isMobile } from "../utils";

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    const eventType = isMobile() ? "touchstart" : "mousedown";

    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
