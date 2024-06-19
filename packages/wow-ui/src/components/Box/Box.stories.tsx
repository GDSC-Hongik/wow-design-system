import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/components/Box";

const meta = {
  title: "Example/Box",
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
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
  },
};

export const CheckBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    type: "checkbox",
  },
};

export const ArrowBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    type: "arrow",
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
    type: "checkbox",
  },
};

export const LeftElementBox: Story = {
  args: {
    text: "GDSC Hongik Discord",
    subText: "디스코드 연동이 필요해요.",
    textColor: "discord",
    status: "error",
    type: "arrow",
    leftElement: (
      <img
        alt="discord"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.svg"
        width={50}
      />
    ),
  },
};
