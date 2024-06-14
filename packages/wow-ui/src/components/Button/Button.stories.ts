import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
    size: "large",
    variant: "solid",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Button",
    size: "large",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    disabled: true,
    label: "Button",
    size: "large",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
    variant: "solid",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    size: "small",
    variant: "text",
  },
};
