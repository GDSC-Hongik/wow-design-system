import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Checkbox from "@/components/Checkbox";
import MultiGroup from "@/components/MultiGroup";
import Switch from "@/components/Switch";

const meta = {
  title: "UI/MultiGroup",
  component: MultiGroup,
  tags: ["autodocs"],
  parameters: {
    // 컴포넌트 부제목 작성 ex. 버튼 컴포넌트
    componentSubtitle: "멀티 그룹 컴포넌트",
    // 색 대조 관련 웹 접근성 테스트 불가하게 하는 속성
    // 필요 없으면 지우기
    //a11y: {
    //  config: {
    //    rules: [{ id: "color-contrast", enabled: false }],
    //  },
    //},
  },
  // argTypes: {
  //   props1: {
  //     description: "props1은 default 값이 있는 필수적인 속성입니다.",
  //     table: {
  //       // type, 필수가 아닐 경우 required 삭제
  //       type: { summary: "string", required: true },
  //       // defaultValue (Optional)
  //       defaultValue: { summary: "기본 값" },
  //     },
  //     control: {
  //       // Args Table에서 사용자가 조작할 수 있는 타입
  //       // select일 경우 options를 배열로 제공
  //       // 그 외 text, number, boolean, color, check, radio 등 존재
  //       // control 불가능하게 하고 싶을 경우 객체가 아니라 false로 설정
  //       // ex. control: false,
  //       // 참고 : https://storybook.js.org/docs/react/essentials/controls
  //       type: "select",
  //       options: ["option1", "option2"],
  //     },
  //   },
  // },
  // decorators (Optional)
  // 공통적으로 적용하고 싶은 컴포넌트 설정
  // decorators: [(Story) => <>{Story()}</>],
} satisfies Meta<typeof MultiGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VerticalCheckboxMultiGroup: Story = {
  render: () => (
    <MultiGroup variant="checkbox">
      <Checkbox value="checkbox1" />
      <Checkbox value="checkbox2" />
      <Checkbox value="checkbox3" />
      <Checkbox value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const HorizontalCheckboxMultiGroup: Story = {
  render: () => (
    <MultiGroup position="horizontal" variant="checkbox">
      <Checkbox value="checkbox1" />
      <Checkbox value="checkbox2" />
      <Checkbox value="checkbox3" />
      <Checkbox value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const TextWithVerticalCheckboxMultiGroup: Story = {
  render: () => (
    <MultiGroup variant="checkbox">
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const TextWithHorizontalCheckboxMultiGroup: Story = {
  render: () => (
    <MultiGroup position="horizontal" variant="checkbox">
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const TextWithHorizontalWithGapCheckboxMultiGroup: Story = {
  render: () => (
    <MultiGroup gap={20} position="horizontal" variant="checkbox">
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const DisabledCheckboxMultiGroup = {
  render: () => (
    <MultiGroup disabled gap={20} position="horizontal" variant="checkbox">
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

export const WithDefaultValueCheckboxMultiGroup = {
  render: () => (
    <MultiGroup
      defaultValue={["checkbox1"]}
      gap={20}
      position="horizontal"
      variant="checkbox"
    >
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "checkbox",
  },
};

const ControlledCheckboxState = () => {
  const [checked, setChecked] = useState(["checkbox1", "checkbox3"]);

  const handleChange = (value: string) => {
    if (!checked.includes(value)) {
      setChecked((prev) => [...prev, value]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <MultiGroup checked={checked} variant="switch" onChange={handleChange}>
      <Checkbox children="checkbox1" value="checkbox1" />
      <Checkbox children="checkbox2" value="checkbox2" />
      <Checkbox children="checkbox3" value="checkbox3" />
      <Checkbox children="checkbox4" value="checkbox4" />
    </MultiGroup>
  );
};

export const ControlledCheckboxMultiGroup: Story = {
  render: () => <ControlledCheckboxState />,
  args: {
    children: <></>,
    variant: "switch",
  },
};

export const SwitchMultiGroup: Story = {
  render: () => (
    <MultiGroup variant="switch">
      <Switch value="switch1" />
      <Switch value="switch2" />
      <Switch value="switch3" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "switch",
  },
};

export const DisabledSwitchMultiGroup: Story = {
  render: () => (
    <MultiGroup disabled variant="switch">
      <Switch value="switch1" />
      <Switch value="switch2" />
      <Switch value="switch3" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "switch",
  },
};

export const TextWithSwitchMultiGroup: Story = {
  render: () => (
    <MultiGroup variant="switch">
      <Switch label="switch1" value="switch1" />
      <Switch label="switch2" value="switch2" />
      <Switch label="switch3" value="switch3" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "switch",
  },
};

export const WithDefaultValueSwitchMultiGroup: Story = {
  render: () => (
    <MultiGroup defaultValue={["switch3"]} variant="switch">
      <Switch value="switch1" />
      <Switch value="switch2" />
      <Switch value="switch3" />
    </MultiGroup>
  ),
  args: {
    children: <></>,
    variant: "switch",
  },
};

const ControlledSwitchState = () => {
  const [checked, setChecked] = useState(["switch1", "switch2"]);

  const handleChange = (value: string) => {
    if (!checked.includes(value)) {
      setChecked((prev) => [...prev, value]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <MultiGroup checked={checked} variant="switch" onChange={handleChange}>
      <Switch label="switch1" value="switch1" />
      <Switch label="switch2" value="switch2" />
      <Switch label="switch3" value="switch3" />
    </MultiGroup>
  );
};

export const ControlledSwitchMultiGroup: Story = {
  render: () => <ControlledSwitchState />,
  args: {
    children: <></>,
    variant: "switch",
  },
};
