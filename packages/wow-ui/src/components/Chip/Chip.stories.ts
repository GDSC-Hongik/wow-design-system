import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@/components/Chip";

const meta = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "칩 컴포넌트",
  },
  argTypes: {
    as: {
      description:
        "as는 렌더링할 요소 또는 컴포넌트를 나타냅니다. 기본값은 button입니다. 칩의 경우 input으로도 사용 가능합니다.",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: "button" },
      },
    },
    defaultSelected: {
      description:
        "defaultSelected는 칩 버튼이 처음에 눌려 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    isSelected: {
      description: "isSelected는 외부에서 제어할 활성 상태를 나타냅니다.",
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
    variant: {
      control: {
        type: "select",
        options: ["default", "positive", "negative"],
        labels: {
          default: "default",
          positive: "positive",
          negative: "negative",
        },
      },
      options: ["default", "positive", "negative"],
      description:
        "칩의 테마를 나타냅니다. 기본 색상은 default이며, 긍정적인 피드백은 positive, 부정적인 피드백은 negative를 활용합니다.",
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | positive | negative",
        },
      },
    },
    label: {
      required: true,
      description: "칩에 들어가게 될 텍스트입니다.",
      table: {
        type: { summary: "string" },
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
    variant: "default",
  },
};

export const NonClickable: Story = {
  args: {
    label: "Chip",
    variant: "default",
    clickable: false,
  },
};

export const Positive: Story = {
  args: {
    label: "Chip",
    variant: "positive",
    clickable: false,
  },
};

export const Negative: Story = {
  args: {
    label: "Chip",
    variant: "negative",
    clickable: false,
  },
};
export const CanDelete: Story = {
  args: {
    label: "Chip",
    variant: "default",
    onDelete: () => {
      alert("delete");
    },
  },
};
