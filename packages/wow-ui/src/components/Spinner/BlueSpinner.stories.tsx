import type { Meta, StoryObj } from "@storybook/react";

import BlueSpinner from "@/components/Spinner/BlueSpinner";

const meta = {
  title: "UI/BlueSpinner",
  component: BlueSpinner,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "블루 스피너 컴포넌트",
  },
} satisfies Meta<typeof BlueSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomSize: Story = {
  args: {
    width: "446px",
    height: "400px",
  },
};
