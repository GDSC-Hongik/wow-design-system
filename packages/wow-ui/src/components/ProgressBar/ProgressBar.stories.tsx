import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "@/components/ProgressBar";

const meta = {
  title: "UI/ProgressBar",
  component: ProgressBar,
  parameters: {
    componentSubtitle: "프로그래스바 컴포넌트",
  },
  tags: ["autodocs"],
  argTypes: {
    step: {
      description: "프로그래스 바의 현재 스텝을 나타냅니다.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "number",
      },
    },
    maxStep: {
      description: "프로그래스 바가 가질 수 있는 최대 스텝을 나타냅니다.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
    maxStep: 5,
  },
};

export const ProgressBarWithMarkers: Story = {
  args: {
    step: 1,
    maxStep: 3,
    markers: [
      { value: 0, label: "Label" },
      { value: 1, label: "Label" },
      { value: 2, label: "Label" },
    ],
  },
};
