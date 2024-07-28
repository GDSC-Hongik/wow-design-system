import { Flex } from "@styled-system/jsx";
import { type PropsWithChildren, useCallback, useRef } from "react";

import type { DropDownProps } from "../../components/DropDown";
import useClickOutside from "../../hooks/useClickOutside";
import { useDropDownContext } from "./context/DropDownContext";

interface DropDownWrapperProps extends PropsWithChildren {
  dropdownId: string;
  style?: DropDownProps["style"];
  className?: DropDownProps["className"];
  hasCustomTrigger?: boolean;
}
export const DropDownWrapper = ({
  children,
  dropdownId,
  hasCustomTrigger,
  ...rest
}: DropDownWrapperProps) => {
  const { setOpen } = useDropDownContext();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    dropdownRef,
    useCallback(() => setOpen(false), [setOpen])
  );

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
      tabIndex={-1}
      width={hasCustomTrigger ? "fit-content" : "auto"}
      {...rest}
    >
      {children}
    </Flex>
  );
};
