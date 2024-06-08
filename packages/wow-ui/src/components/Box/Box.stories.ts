import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/components/Box";

const meta = {
  title: "Example/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "박스입니당.",
    subText: "잔톨 하나 없는",
  },
};

export const CheckBox: Story = {
  args: {
    text: "박스입니당.",
    subText: "잔톨 하나 없는",
    type: "checkbox",
  },
};

export const ArrowBox: Story = {
  args: {
    text: "박스입니당.",
    subText: "잔톨 하나 없는",
    type: "arrow",
  },
};

export const LongBox: Story = {
  args: {
    text: "박스입니당.",
    subText:
      "Fugiat laboris fugiat voluptate culpa sunt minim duis voluptate anim deserunt officia ex ad adipisicing commodo.Fugiat laboris fugiat voluptate culpa sunt minim duis voluptate anim deserunt officia ex ad adipisicing commodo.",
    type: "arrow",
  },
};
