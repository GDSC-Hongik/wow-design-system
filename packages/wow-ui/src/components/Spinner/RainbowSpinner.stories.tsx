import type { Meta, StoryObj } from "@storybook/react";

import RainbowSpinner from "@/components/Spinner/RainbowSpinner";

const meta = {
  title: "UI/RainbowSpinner",
  component: RainbowSpinner,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "레인보우 스피너 컴포넌트",
  },
} satisfies Meta<typeof RainbowSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
