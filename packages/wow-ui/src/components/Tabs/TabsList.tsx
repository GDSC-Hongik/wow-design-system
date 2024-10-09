"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { type KeyboardEvent, type PropsWithChildren, useCallback } from "react";

import { useCollectionContext } from "./contexts/CollectionContext";
import { useTabsContext } from "./contexts/TabsContext";

/**
 * @description TabsList 컴포넌트는 TabsItem 컴포넌트들을 관리합니다.
 */
const TabsList = ({ children }: PropsWithChildren) => {
  const { label, setSelectedValue, value: selectedValue } = useTabsContext();

  const { values } = useCollectionContext();

  const updateFocusedValue = useCallback(
    (direction: number) => {
      const currentIndex = values.indexOf(selectedValue ?? "");
      const nextIndex =
        (currentIndex + direction + values.length) % values.length;
      setSelectedValue(values[nextIndex] ?? "");
    },
    [setSelectedValue, selectedValue, values]
  );

  const handleArrowNavigation = useCallback(
    (direction: number, event: KeyboardEvent<HTMLDivElement>) => {
      updateFocusedValue(direction);
      event.preventDefault();
    },
    [updateFocusedValue]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const { key } = event;

      if (key === "ArrowRight") {
        handleArrowNavigation(1, event);
      } else if (key === "ArrowLeft") {
        handleArrowNavigation(-1, event);
      }
    },
    [handleArrowNavigation]
  );

  return (
    <Flex
      aria-label={`${label}-tab-list`}
      aria-orientation="horizontal"
      className={tabsListStyle}
      role="tablist"
      onKeyDown={handleKeyDown}
    >
      {children}
    </Flex>
  );
};

export default TabsList;

const tabsListStyle = css({
  overflowX: "scroll",
  scrollBehavior: "smooth",
  _scrollbar: {
    width: "65px",
    height: "2px",
  },
  _scrollbarThumb: {
    width: "65px",
    height: "2px",
    borderRadius: "sm",
    backgroundColor: "outline",
  },
  _scrollbarTrack: {
    marginTop: "2px",
    marginBottom: "2px",
  },
});
