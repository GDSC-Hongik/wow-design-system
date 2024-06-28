import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "@/components/ProgressBar";

const meta = {
  title: "UI/ProgressBar",
  component: ProgressBar,
  parameters: {
    componentSubtitle: "프로그래스바 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    step: {
      description: "프로그래스 바의 현재 스텝을 나타냅니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    labels: {
      description: "프로그래스 바 하단에 나타낼 라벨의 배열을 나타냅니다.",
      table: {
        type: { summary: "LabelType[]" },
      },
    },
    maxStep: {
      description: "프로그래스 바가 가질 수 있는 최대 스텝을 나타냅니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    width: {
      description: "프로그래스 바의 너비를 지정합니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "text",
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
    labels: [
      { value: 1, text: "Label" },
      { value: 2, text: "Label" },
      { value: 3, text: "Label" },
    ],
  },
};
