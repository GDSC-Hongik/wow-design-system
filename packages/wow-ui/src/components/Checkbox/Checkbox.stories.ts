import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "@/components/Checkbox";

const meta = {
  title: "UI/CheckBox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Vertical: Story = {
  args: {
    checked: true,
    children: "string",
    position: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    checked: true,
    children: "string",
    position: "horizontal",
  },
};
