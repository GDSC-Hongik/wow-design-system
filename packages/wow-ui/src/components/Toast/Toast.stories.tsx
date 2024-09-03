import type { Meta, StoryObj } from "@storybook/react";
import { Warn } from "wowds-icons";

import Toast from ".";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Toast 컴포넌트",
  },
  argTypes: {
    text: {
      description: "Toast에 들어갈 메인 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
    subText: {
      description: "Toast에 들어갈 보조 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
    type: {
      description: "Toast의 타입을 나타냅니다.",
      control: { type: "radio" },
    },
    id: {
      description: "Toast 컴포넌트의 id를 나타냅니다.",
      control: false,
    },
    icon: {
      description: "Toast 좌측에 들어갈 아이콘을 나타냅니다.",
      control: false,
    },
    style: {
      description: "Toast에 커스텀 스타일을 적용하기 위한 객체를 나타냅니다.",
      control: false,
    },
    className: {
      description: "Toast에 커스텀 클래스를 적용하기 위한 문자열을 나타냅니다.",
      control: false,
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Text",
    subText: "subtext",
    type: "default",
  },
};

export const Close: Story = {
  args: {
    text: "Text",
    subText: "subtext",
    type: "close",
  },
};

export const Arrow: Story = {
  args: {
    text: "Text",
    subText: "subtext",
    type: "arrow",
  },
};

export const Icon: Story = {
  args: {
    text: "Text",
    subText: "subtext",
    type: "default",
    icon: <Warn />,
  },
};

export const IconArrow: Story = {
  args: {
    text: "Text",
    subText: "subtext",
    type: "arrow",
    icon: <Warn />,
  },
};
