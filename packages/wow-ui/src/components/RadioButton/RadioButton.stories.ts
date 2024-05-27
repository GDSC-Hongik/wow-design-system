import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from ".";

const meta = {
  title: "Example/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Text",
  },
};
