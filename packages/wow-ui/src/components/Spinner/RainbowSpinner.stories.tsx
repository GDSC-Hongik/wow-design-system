import type { Meta, StoryObj } from "@storybook/react";

import RainbowSpinner from "@/components/Spinner/RainbowSpinner";

const meta = {
  title: "UI/RainbowSpinner",
  component: RainbowSpinner,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "레인보우 스피너 컴포넌트",
  },
  argTypes: {
    width: {
      description: "스피너의 너비를 나타냅니다.",
      table: {
        type: { summary: "CSSProperties['width']" },
        defaultValue: { summary: "223px" },
      },
      control: false,
    },
    height: {
      description: "스피너의 높이를 나타냅니다.",
      table: {
        type: { summary: "CSSProperties['height']" },
        defaultValue: { summary: "200px" },
      },
      control: false,
    },
    loop: {
      description: "애니메이션의 반복 재생 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    autoPlay: {
      description:
        "컴포넌트가 마운트될 때 자동으로 애니메이션이 재생될지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
} satisfies Meta<typeof RainbowSpinner>;

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
