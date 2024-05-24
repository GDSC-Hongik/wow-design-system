import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
        type: { summary: "React.ElementType" },
        defaultValue: { summary: "button" },
      },
    },
    defaultChecked: {
      description:
        "defaultChecked는 토글 버튼이 처음에 눌려 있는지 여부를 나타냅니다.",
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
        "isDisabled는 토글 버튼이 비활성화되어 있는지 여부를 나타냅니다.",
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
      description: "토글 버튼 오른쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
    onClick: {
      description: "토글 버튼 클릭 시 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
    onKeyDown: {
      description:
        "토글 버튼이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        control: {
          type: "function",
        },
      },
    },
  },
} satisfies Meta<typeof Toggle>;

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

const ControlledToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return <Toggle isChecked={isChecked} onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledToggle />,
};
