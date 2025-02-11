import { Flex } from "@styled-system/jsx";
import type { ComponentProps } from "react";
import React from "react";
import Tag from "wowds-ui/Tag";

interface OutlineTagsProps {
  tagTexts: string[];
  variant: ComponentProps<typeof Tag>["variant"];
}

const TagsComponent = ({ tagTexts, variant }: OutlineTagsProps) => {
  return (
    <Flex gap="20px">
      {tagTexts.map((text, index) => {
        const colorArray =
          variant === "outline"
            ? ["blue", "yellow", "green", "red"]
            : variant === "solid1"
              ? ["blue", "yellow", "green"]
              : ["blue", "red", "grey"];
        const color = colorArray[index] as ComponentProps<typeof Tag>["color"];
        return (
          <Tag color={color} key={index} variant={variant}>
            {text}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default TagsComponent;
