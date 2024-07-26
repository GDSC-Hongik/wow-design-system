import { Flex } from "@styled-system/jsx";
import { type PropsWithChildren, useRef } from "react";

import type { DropDownProps } from "@/components/DropDown";
import useClickOutside from "@/hooks/useClickOutside";

import { useCollection } from "./context/CollectionContext";
import { useDropDownContext } from "./context/DropDownContext";

interface DropDownWrapperProps extends PropsWithChildren {
  dropdownId: string;
  style?: DropDownProps["style"];
  className?: DropDownProps["className"];
}
export const DropDownWrapper = ({
  children,
  dropdownId,
  ...rest
}: DropDownWrapperProps) => {
  const { open, setOpen, setFocusedValue, focusedValue, handleSelect } =
    useDropDownContext();
  const itemMap = useCollection();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  const updateFocusedValue = (direction: number) => {
    const values = Array.from(itemMap.keys());
    setFocusedValue((prevValue) => {
      const currentIndex = values.indexOf(prevValue ?? "");
      const nextIndex =
        (currentIndex + direction + values.length) % values.length;
      return values[nextIndex] ?? "";
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    const { key } = event;

    if (key === "ArrowDown") {
      updateFocusedValue(1);
      event.preventDefault();
    } else if (key === "ArrowUp") {
      updateFocusedValue(-1);
      event.preventDefault();
    } else if (key === "Enter" && focusedValue !== null) {
      handleSelect(focusedValue, itemMap.get(focusedValue)?.text);
      event.preventDefault();
    }
  };

  return (
    <Flex
      aria-labelledby={`${dropdownId}-trigger`}
      cursor="pointer"
      direction="column"
      gap="xs"
      id={dropdownId}
      outline="none"
      position="relative"
      ref={dropdownRef}
      tabIndex={0}
      width="auto"
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </Flex>
  );
};