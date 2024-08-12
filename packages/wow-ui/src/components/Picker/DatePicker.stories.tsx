import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "@/components/Picker/DatePicker";

const meta = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "DatePicker 컴포넌트",
  },
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: "single",
    label: "종료 날짜",
  },
};
