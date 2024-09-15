import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { Warn } from "wowds-icons";

import Toast from ".";
import ToastProvider from "./ToastProvider";
import useToast from "./useToast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Toast 컴포넌트",
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
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
    onClickArrowIcon: {
      description:
        "Toast 컴포넌트의 화살표 아이콘을 클릭했을 때 호출되는 함수를 나타냅니다.",
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

export const Default = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
    });
  }, []);
};

export const Close = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      type: "close",
    });
  }, []);
};

export const Arrow = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      type: "arrow",
    });
  }, []);
};

export const Icon = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      icon: <Warn />,
    });
  }, []);
};

export const IconArrow = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      type: "arrow",
      icon: <Warn />,
    });
  }, []);
};

export const TwoLines = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
      icon: <Warn />,
    });
  }, []);
};
