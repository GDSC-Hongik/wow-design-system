import type { Meta, StoryObj } from "@storybook/react";

import RadioGrid from "@/components/RadioButton/RadioGrid";

const meta = {
  title: "Example/RadioGrid",
  component: RadioGrid,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ["1학년", "2학년", "3학년", "4학년"],
  },
};
