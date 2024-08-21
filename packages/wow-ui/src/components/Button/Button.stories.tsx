import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { Help } from "wowds-icons";

import Button from "@/components/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    label: {
      description: "버튼의 라벨을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    as: {
      description: "버튼을 구성할 HTML 태그의 종류를 나타냅니다.",
      table: {
        type: { summary: "ElementType" },
      },
      control: false,
    },
    disabled: {
      description: "버튼이 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "버튼의 크기를 나타냅니다.",
      table: {
        type: { summary: "lg | sm" },
        defaultValue: { summary: "lg" },
      },
      control: {
        type: "radio",
        options: ["lg", "sm"],
      },
    },
    variant: {
      description: "버튼의 종류를 나타냅니다.",
      table: {
        type: { summary: "solid | outline" },
        defaultValue: { summary: "solid" },
      },
      control: {
        type: "radio",
        options: ["solid", "outline"],
      },
    },
    onKeyDown: {
      description:
        "버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 누르고 있는 동안 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onKeyUp: {
      description:
        "버튼에 포커스 된 상태에서 엔터 키 또는 스페이스 바를 뗐을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onMouseLeave: {
      description:
        "버튼의 영역에서 마우스가 벗어났을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onPointerDown: {
      description:
        "버튼에 포커스 된 상태에서 마우스 또는 터치로 누르고 있는 동안 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onPointerUp: {
      description:
        "버튼에 포커스 된 상태에서 마우스 또는 터치를 뗐을 때 동작할 이벤트를 나타냅니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    style: {
      description: "버튼의 커스텀 스타일을 나타냅니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: false,
    },
    className: {
      description: "버튼에 전달하는 커스텀 클래스를 나타냅니다.",
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "버튼",
  },
};

export const LargeSolidButton: Story = {
  args: {
    children: "버튼",
    variant: "solid",
  },
};

export const LargeOutlineButton: Story = {
  args: {
    children: "버튼",
    variant: "outline",
  },
};

export const SmallSolidButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "solid",
  },
};

export const SmallOutlineButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "outline",
  },
};

export const SmallSubButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "sub",
  },
};

export const LargeButtonWithIcon: Story = {
  args: {
    children: "버튼",
    variant: "solid",
    icon: <Help />,
  },
};

export const SmallButtonWithIcon: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "solid",
    icon: <Help />,
  },
};

export const LargeButtonWithSubText: Story = {
  args: {
    children: "버튼",
    variant: "solid",
    subText: "최종 수정 일시 : 2024년 5월 23일 23:11",
    icon: <Help />,
  },
};

export const LinkButton: Story = {
  args: {
    children: "버튼",
    as: Link,
    href: "/",
  },
};
