import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Switch from "@/components/Switch";
import SwitchGroup from "@/components/SwitchGroup";

const meta = {
  title: "UI/SwitchGroup",
  component: SwitchGroup,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "스위치 그룹 컴포넌트",
  },
  argTypes: {
    children: {
      description: "렌더링할 자식 요소를 나타냅니다.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: null },
      },
      control: {
        type: "function",
      },
      type: {
        name: "function",
        required: true,
      },
    },
    value: {
      description: "value는 외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean[]" },
        defaultValue: { summary: null },
      },
      control: {
        type: "array",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수를 나타냅니다.",
      table: {
        type: { summary: "(index: number) => void" },
        defaultValue: { summary: null },
      },
      control: {
        type: "function",
      },
    },
  },
} satisfies Meta<typeof SwitchGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Switch text="Switch 1" />
        <Switch isDisabled text="Switch 2" />
        <Switch defaultChecked text="Switch 3" />
      </>
    ),
  },
};

const ControlledSwitchGroup = () => {
  const [isCheckedState, setIsCheckedState] = useState<boolean[]>([
    false,
    true,
    false,
  ]);

  const handleChange = (index: number) => {
    setIsCheckedState((prev) =>
      prev.map((prevState, i) => (index === i ? !prevState : prevState))
    );
  };

  return (
    <SwitchGroup value={isCheckedState} onChange={handleChange}>
      <Switch isDisabled text="Switch 1" />
      <Switch text="Switch 2" />
      <Switch text="Switch 3" />
    </SwitchGroup>
  );
};

export const ControlledState: Story = {
  render: () => <ControlledSwitchGroup />,
  args: {
    children: null,
  },
};
