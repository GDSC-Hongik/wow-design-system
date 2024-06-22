import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Box from "@/components/Box";

const meta = {
  title: "UI/Box",
  component: Box,
  parameters: {
    componentSubtitle: "박스 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    leftElement: {
      description: "박스의 왼쪽에 넣을 리액트 요소를 입력합니다.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    boxVariantType: {
      description: "박스의 타입을 설정합니다.",
      mapping: ["text", "checkbox", "arrow"],
      options: ["text", "checkbox", "arrow"],
      control: {
        type: "select",
        labels: {
          text: "text",
          checkbox: "checkbox",
          arrow: "arrow",
        },
      },
    },
    text: {
      description: "박스에 메인으로 표기할 텍스트를 입력합니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "text",
      },
    },
    textColor: {
      description: "박스에 메인으로 표기할 텍스트의 색상을 변경합니다.",
      table: {
        type: { summary: "ColorToken" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    subText: {
      description: "박스에 서브로 표기할 텍스트를 입력합니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "text",
      },
    },
    subTextColor: {
      description: "박스에 서브로 표기할 텍스트의 색상을 변경합니다.",
      table: {
        type: { summary: "ColorToken" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    checked: {
      description: "외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    status: {
      description: "박스의 상태를 설정합니다.",
      mapping: ["default", "success", "error"],
      options: ["default", "success", "error"],
      control: {
        type: "select",
        labels: {
          default: "default",
          success: "success",
          error: "error",
        },
      },
    },
    onClick: {
      description: "arrow 타입의 박스를 클릭했을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onChange: {
      description: "checkbox 타입의 박스를 클릭했을 대 호출하는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    style: {
      description: "박스의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    className: {
      description: "박스에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    boxVariantType: "text",
    text: "Text",
    subText: "Subtext",
  },
};

export const CheckBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    boxVariantType: "checkbox",
    onChange: () => {
      console.log("체크");
    },
  },
};

export const ArrowBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    boxVariantType: "arrow",
    onClick: () => {
      console.log("클릭 이벤트 발생");
    },
  },
};

export const LongBox: Story = {
  args: {
    text: "Q. 서류, 면접 전형이 있나요?",
    subText:
      "없습니다! 홍익대학교 학생이라면 누구나 본 사이트의 '지원하기'를 통해 가입할 수 있어요.",
  },
};

export const SuccessBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    boxVariantType: "checkbox",
    onChange: () => {
      console.log("체크");
    },
  },
};

export const LeftElementBox: Story = {
  args: {
    text: "GDSC Hongik Discord",
    subText: "디스코드 연동이 필요해요.",
    textColor: "discord",
    status: "error",
    boxVariantType: "arrow",
    onClick: () => {
      console.log("클릭");
    },
    leftElement: (
      <img
        alt="discord"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.svg"
        width={50}
      />
    ),
  },
};

const ControlledBox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      boxVariantType="checkbox"
      checked={checked}
      subText="checkBox controlled by checked"
      text="CheckBox Test"
      onChange={handleChange}
    />
  );
};

export const ControlledState: Story = {
  args: {
    text: "CheckBox Test",
  },
  render: () => <ControlledBox />,
};
