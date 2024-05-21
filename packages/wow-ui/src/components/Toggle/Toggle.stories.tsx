import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "@/components/Toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const InitialActive: Story = {
  args: {
    initialIsActive: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
