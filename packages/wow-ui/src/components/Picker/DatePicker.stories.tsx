import type { Meta } from "@storybook/react";

import DatePicker from "@/components/Picker/DatePicker";
import usePickerState from "@/hooks/usePickerState";

const meta = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "DatePicker 컴포넌트",
  },
  argTypes: {
    label: {
      description: "DatePicker의 라벨을 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    selected: {
      description: "DatePicker의 선택된 날짜 값을 나타냅니다.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: undefined },
      },
    },
    setSelected: {
      description: "DatePicker의 날짜를 선택할 수 있는 함수를 나타냅니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    date: {
      description: "DatePicker에서 쓰일 날짜 객체를 나타냅니다.",
      table: {
        type: { summary: "Object" },
        defaultValue: { summary: undefined },
      },
    },
    placeholder: {
      description:
        "DatePicker의 드롭다운에 들어갈 placeholder 텍스트를 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Default = () => {
  const { selected, setSelected, date } = usePickerState();

  return (
    <DatePicker
      date={date}
      label="종료 날짜"
      selected={selected}
      setSelected={setSelected}
    />
  );
};
