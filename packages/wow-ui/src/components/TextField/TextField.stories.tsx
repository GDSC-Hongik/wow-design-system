import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import TextField from "@/components/TextField";

const meta = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "텍스트필드 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    label: {
      description: "텍스트필드의 라벨입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
      type: {
        name: "string",
        required: true,
      },
    },
    placeholder: {
      description: "텍스트필드의 플레이스홀더 텍스트입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    defaultValue: {
      description: "텍스트필드의 기본 값입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    value: {
      description: "외부에서 제어할 활성 상태입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    maxLength: {
      description: "텍스트필드의 최대 입력 길이입니다.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: null },
      },
      control: {
        type: "number",
      },
    },
    error: {
      description: "텍스트필드의 오류 상태 여부입니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: {
        type: "boolean",
      },
    },
    success: {
      description: "텍스트필드의 성공 상태 여부입니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: {
        type: "boolean",
      },
    },
    helperText: {
      description: "텍스트필드 아래 추가적인 텍스트입니다.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    onBlur: {
      description: "텍스트필드가 포커스를 잃을 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    onFocus: {
      description: "텍스트필드가 포커스됐을 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: null },
        control: {
          type: "function",
        },
      },
    },
    textareaProps: {
      description: "텍스트필드에 전달할 추가 textarea 속성입니다.",
      table: {
        type: { summary: "TextareaHTMLAttributes<HTMLTextAreaElement>" },
        defaultValue: { summary: null },
        control: {
          type: "object",
        },
      },
    },
    style: {
      description: "텍스트필드의 커스텀 스타일 속성입니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: null },
        control: {
          type: "object",
        },
      },
    },
    className: {
      description: "텍스트필드에 전달하는 커스텀 클래스명입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
        control: {
          type: "text",
        },
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
  },
};

export const WithMaxLength: Story = {
  args: {
    label: "Label",
    maxLength: 10,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Label",
    placeholder:
      "PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Label",
    defaultValue: "Text",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Label",
    helperText: "*Caption",
  },
};

export const WithMaxLengthAndHelperText: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
  },
};

export const Success: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
    success: true,
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
    error: true,
  },
};

const ControlledTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return <TextField label="Label" value={value} onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledTextField />,
  args: {
    label: "Label",
  },
};
