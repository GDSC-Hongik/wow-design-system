import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";

const meta = {
  title: "UI/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "드롭다운 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    children: {
      description: "DropDownOption 들을 children 컴포넌트로 받습니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    trigger: {
      description: "드롭다운을 열기 위한 외부 트리거 요소입니다.",
      table: {
        type: { summary: "ReactElement" },
      },
      control: false,
    },
    label: {
      description:
        "외부 트리거를 사용하지 않는 경우 레이블을 사용할 수 있습니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    placeholder: {
      description:
        "외부 트리거를 사용하지 않는 경우 선택되지 않았을 때 표시되는 플레이스홀더입니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    value: {
      description: "현재 선택된 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "초기 선택된 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "값이 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
      },
      action: "changed",
    },
  },
} satisfies Meta<typeof DropDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <DropDownOption text="option 1" value="option 1" />
        <DropDownOption text="option 2" value="option 2" />
      </>
    ),
    label: "Select an Option",
    placeholder: "Please select",
  },
  parameters: {
    docs: {
      description: {
        story: "기본적인 드롭다운 컴포넌트입니다.",
      },
    },
  },
};

export const WithTrigger: Story = {
  args: {
    children: (
      <>
        <DropDownOption text="option 1" value="option 1" />
        <DropDownOption text="option 2" value="option 2" />
      </>
    ),
    trigger: <button>Open Dropdown</button>,
  },
  parameters: {
    docs: {
      description: {
        story: "버튼 트리거를 사용하여 드롭다운을 열 수 있는 컴포넌트입니다.",
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    children: (
      <>
        <DropDownOption text="option 1" value="option 1" />
        <DropDownOption text="option 2" value="option 2" />
      </>
    ),
    label: "Select an Option",
    placeholder: "Please select",
    defaultValue: "Option 2",
  },
  parameters: {
    docs: {
      description: {
        story: "초기 선택된 값이 설정된 드롭다운 컴포넌트입니다.",
      },
    },
  },
};

const ControlledTextField = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <DropDown
      label="Select an Option"
      placeholder="Choose..."
      value={selectedValue}
      onChange={handleChange}
    >
      <DropDownOption text="option 1" value="option 1" />
      <DropDownOption text="option 2" value="option 2" />
    </DropDown>
  );
};

export const ControlledValue: Story = {
  render: () => <ControlledTextField />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "외부에서 제어되는 값을 가진 드롭다운 컴포넌트입니다.",
      },
    },
  },
};

export const ManyOptions: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 20 }, (_, index) => (
          <DropDownOption
            key={index}
            text={`Option ${index + 1}`}
            value={`Option ${index + 1}`}
          />
        ))}
      </>
    ),
    label: "Select an Option",
    placeholder: "Please select",
  },
  parameters: {
    docs: {
      description: {
        story: "많은 옵션을 가진 드롭다운 컴포넌트입니다.",
      },
    },
  },
};
