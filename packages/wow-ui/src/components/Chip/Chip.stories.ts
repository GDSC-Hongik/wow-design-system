import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@/components/Chip";

const meta = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "칩 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },

  argTypes: {
    disabled: {
      description: "disabled는 칩 버튼이 비활성화 상태인지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      description:
        "defaultChecked는 칩 버튼이 처음에 눌려 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },

    isChecked: {
      description: "isChecked는 외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    clickable: {
      description: "Toggle이 가능한 칩인지에 대한 여부를 확인합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "칩에 들어가게 될 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
      type: {
        name: "string",
        required: true,
      },
      control: {
        type: "text",
      },
    },
    onClick: {
      description: "칩 클릭 시 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
    onDelete: {
      description: "칩에 대한 필터를 제거하기 위한 함수입니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
    onKeyDown: {
      description:
        "칩이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Chip",
    as: "button",
    clickable: true,
  },
};

export const DivChip: Story = {
  args: {
    label: "Chip",
    clickable: false,
    as: "div",
  },
};
export const DisabledChip: Story = {
  args: {
    label: "Chip",
    clickable: true,
    disabled: true,
    as: "button",
  },
};

export const NonClickable: Story = {
  args: {
    label: "Chip",
    clickable: false,
  },
};
