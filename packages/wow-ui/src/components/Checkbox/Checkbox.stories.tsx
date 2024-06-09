import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Checkbox from "@/components/Checkbox";

const meta = {
  title: "UI/CheckBox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "체크박스 컴포넌트",
  },
  argTypes: {
    defaultChecked: {
      description:
        "defaultChecked는 체크박스가 활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description:
        "disabled는 체크박스가 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    checked: {
      description: "checked는 외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    children: {
      description: "체크박스 오른쪽이나 위쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "ReactNode" },
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
      description: "체크박스 클릭 시 동작할 이벤트입니다.",
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
        "체크박스에 포커스 됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    onMouseEnter: {
      description: "마우스가 체크박스 위로 진입할 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
      },
      control: {
        type: "function",
      },
    },
    onMouseLeave: {
      description: "마우스가 체크박스에서 벗어날 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
      },
      control: {
        type: "function",
      },
    },
    position: {
      description:
        "체크박스와 텍스트의 배치를 설정합니다. 'vertical' 또는 'horizontal' 값을 가집니다.",
      table: {
        type: { summary: '"vertical" | "horizontal"' },
        defaultValue: { summary: "horizontal" },
      },
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
    },
    inputProps: {
      description:
        "체크박스의 기본 input 요소에 전달할 추가 속성들을 나타냅니다.",
      table: {
        type: { summary: "InputHTMLAttributes<HTMLInputElement>" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    style: {
      description: "체크박스의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Vertical: Story = {
  args: {
    checked: true,
    children: "string",
    position: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    checked: true,
    children: "string",
    position: "horizontal",
  },
};

const ControlledCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return <Checkbox checked={isChecked} onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledCheckBox />,
};
