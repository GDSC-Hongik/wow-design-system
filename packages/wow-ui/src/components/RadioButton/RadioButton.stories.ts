import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "@/components/RadioButton/RadioButton";

const meta = {
  title: "Example/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    state: "selected",
    label: "Text",
  },
};

export const Unselected: Story = {
  args: {
    state: "unselected",
    label: "Text",
  },
};

export const Pressed: Story = {
  args: {
    state: "pressed",
    label: "Text",
  },
};
