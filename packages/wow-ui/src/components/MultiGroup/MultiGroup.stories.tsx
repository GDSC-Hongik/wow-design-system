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
    componentSubtitle: "멀티 그룹 컴포넌트",
  },
  argTypes: {
    variant: {
      description:
        "체크박스 또는 스위치 타입입니다. 'checkbox' 또는 'switch' 값을 가집니다.",
      table: {
        type: { summary: "checkbox | switch", required: true },
        defaultValue: { summary: null },
      },
      control: "radio",
      options: ["checkbox", "switch"],
    },
    position: {
      description:
        "체크박스 그룹의 방향입니다. 'vertical' 또는 'horizontal' 값을 가집니다.",
      table: {
        type: { summary: "vertical | horizontal" },
        defaultValue: { summary: null },
      },
      control: "radio",
      options: ["vertical", "horizontal"],
      if: { arg: "variant", eq: "checkbox" },
    },
    gap: {
      description: "체크박스 사이의 간격입니다.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: null },
      },
      control: {
        type: "number",
      },
      if: { arg: "variant", eq: "checkbox" },
    },
    children: {
      description: "그룹 내에 포함될 체크박스 또는 스위치 컴포넌트들입니다.",
      table: {
        type: { summary: "ReactNode", required: true },
        defaultValue: { summary: null },
      },
      control: false,
    },
    name: {
      description: "그룹명입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    defaultValue: {
      description: "기본으로 선택된 값들의 배열입니다.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: null },
      },
      control: {
        type: "array",
      },
    },
    checked: {
      description: "외부에서 제어할 활성 상태입니다.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: null },
      },
      control: {
        type: "array",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: null },
      },
      control: false,
    },
    disabled: {
      description:
        "그룹 내 모든 체크박스 또는 스위치가 비활성화되어 있는지 여부입니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: {
        type: "boolean",
      },
    },
    className: {
      description: "그룹에 전달하는 커스텀 클래스입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null },
      },
      control: {
        type: "text",
      },
    },
    style: {
      description: "그룹의 커스텀 스타일입니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: null },
      },
      control: false,
    },
  },
} satisfies Meta<typeof MultiGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

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
