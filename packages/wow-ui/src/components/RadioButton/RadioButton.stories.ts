import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from ".";

const meta = {
  title: "UI/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "라디오버튼 컴포넌트",
  },
  argTypes: {
    defaultState: {
      description: "defaultState는 외부에서 제어할 상태를 나타냅니다.",
      table: {
        type: { summary: "RadiodefaultState" },
      },
      control: "radio",
    },
    label: {
      description: "라디오 버튼을 설명하는 라벨입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Text" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text",
  },
};

export const ReadOnly: Story = {
  args: {
    defaultState: "readonly",
    label: "Text",
  },
};

export const Disabled: Story = {
  args: {
    defaultState: "disabled",
    label: "Text",
  },
};
