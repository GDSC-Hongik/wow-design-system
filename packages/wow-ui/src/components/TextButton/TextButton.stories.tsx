import type { Meta, StoryObj } from "@storybook/react";

import TextButton from "@/components/TextButton";

const meta = {
  title: "UI/TextButton",
  component: TextButton,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "텍스트 버튼 컴포넌트",
  },
  argTypes: {
    label: {
      description: "텍스트 버튼의 라벨을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    asProp: {
      description: "텍스트 버튼을 구성할 HTML 태그의 종류를 나타냅니다.",
      table: {
        type: { summary: "ElementType" },
      },
      control: false,
    },
    disabled: {
      description: "텍스트 버튼이 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "텍스트 버튼의 크기를 나타냅니다.",
      table: {
        type: { summary: "lg | sm" },
        defaultValue: { summary: "lg" },
      },
      control: {
        type: "radio",
        options: ["lg", "sm"],
      },
    },
    onKeyDown: {
      description:
        "텍스트 버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 누르고 있는 동안 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onKeyUp: {
      description:
        "텍스트 버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 뗐을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onMouseLeave: {
      description:
        "텍스트 버튼의 영역에서 마우스가 벗어났을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onPointerDown: {
      description:
        "텍스트 버튼에 포커스 된 상태에서 마우스 또는 터치로 누르고 있는 동안 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onPointerUp: {
      description:
        "텍스트 버튼에 포커스 된 상태에서 마우스 또는 터치를 뗐을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    style: {
      description: "텍스트 버튼의 커스텀 스타일을 나타냅니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: false,
    },
    className: {
      description: "텍스트 버튼에 전달하는 커스텀 클래스를 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    ref: {
      description: "렌더링된 요소 또는 컴포넌트에 연결할 ref를 나타냅니다.",
      table: {
        type: { summary: 'ComponentPropsWithRef<T>["ref"]' },
      },
      control: false,
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Button",
  },
};

export const Disabled: Story = {
  args: {
    text: "Button",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    text: "Button",
  },
};

export const Small: Story = {
  args: {
    text: "Button",
    size: "sm",
  },
};
