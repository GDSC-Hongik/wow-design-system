import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
    onRemove: {
      description: "Toast 컴포넌트가 사라지도록 하는 트리거 함수를 나타냅니다.",
      control: false,
    },
    onClickArrowIcon: {
      description:
        "Toast 컴포넌트의 화살표 아이콘을 클릭했을 때 호출되는 함수를 나타냅니다.",
      control: false,
    },
    icon: {
      description: "Toast 좌측에 들어갈 아이콘을 나타냅니다.",
      control: false,
    },
    backgroundStyle: {
      description:
        "Toast의 배경에 커스텀 스타일을 적용하기 위한 객체를 나타냅니다.",
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

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        토스트 표시
      </button>
      {open && (
        <Toast
          id="toast1"
          subText="subtext"
          text="Text"
          onRemove={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const Close = () => {
  const [open, setOpen] = useState(true);

  return (
    open && (
      <Toast
        id="toast2"
        subText="subtext"
        text="Text"
        type="close"
        onRemove={() => setOpen(false)}
      />
    )
  );
};

export const Arrow: Story = {
  args: {
    id: "toast3",
    text: "Text",
    subText: "subtext",
    type: "arrow",
    onRemove: () => {},
  },
};

export const Icon: Story = {
  args: {
    id: "toast4",
    text: "Text",
    subText: "subtext",
    icon: <Warn />,
    onRemove: () => {},
  },
};

export const IconArrow: Story = {
  args: {
    id: "toast5",
    text: "Text",
    subText: "subtext",
    type: "arrow",
    icon: <Warn />,
    onRemove: () => {},
  },
};

export const TwoLines: Story = {
  args: {
    id: "toast6",
    text: "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
    onRemove: () => {},
  },
};
