import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "@/components/Toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "토글 컴포넌트",
  },
  argTypes: {
    as: {
      description:
        "as는 렌더링할 요소 또는 컴포넌트를 나타냅니다. 기본값은 button입니다.",
      table: {
        defaultValue: { summary: "button" },
      },
    },
    initialIsActive: {
      description:
        "initialIsActive는 토글 버튼이 처음에 눌려 있는지 여부를 나타냅니다.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      description:
        "isDisabled는 토글 버튼이 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
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
