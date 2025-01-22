"use client";
import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { css } from "@styled-system/css";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import SearchBar from "wowds-ui/SearchBar";

export const ComponentTab = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Card className={containerStyle}>
        <SearchBar defaultValue="Text" style={searchBarStyle} />
        <SearchBar placeholder="Text" style={searchBarStyle} />
        <SearchBar defaultValue="Text" ref={inputRef} style={searchBarStyle} />
        <SearchBar disabled placeholder="Text" style={searchBarStyle} />
      </Card>
    </>
  );
};

const containerStyle = css({
  display: "grid !important",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",

  justifyItems: "start",

  "& > *:nth-of-type(odd)": {
    justifySelf: "end",
  },

  "& > *:nth-of-type(even)": {
    justifySelf: "start",
  },
});

const searchBarStyle: CSSProperties = {
  width: "316px",
};
