import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Switch from "@/components/Switch";

const meta = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "스위치 컴포넌트",
  },
  argTypes: {
    defaultChecked: {
      description:
        "defaultChecked는 스위치가 처음에 활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      description:
        "isDisabled는 스위치가 비활성화되어 있는지 여부를 나타냅니다.",
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
    text: {
      description: "스위치 오른쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    onClick: {
      description: "스위치 클릭 시 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    onKeyDown: {
      description:
        "스위치가 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const WithText: Story = {
  args: {
    text: "Text",
  },
};

const ControlledSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return <Switch isChecked={isChecked} onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledSwitch />,
};
