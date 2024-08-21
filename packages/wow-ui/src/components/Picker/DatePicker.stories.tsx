import type { Meta } from "@storybook/react";

import RangeDatePicker from "@/components/Picker/RangeDatePicker";
import DatePicker from "@/components/Picker/SingleDatePicker";
import TimePicker from "@/components/Picker/TimePicker";
import usePickerRangeState from "@/hooks/usePickerRangeState";
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
    onSelect: {
      description: "DatePicker의 날짜를 선택할 수 있는 함수를 나타냅니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    strDate: {
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
  const { selected, setSelected, strDate } = usePickerState();

  return (
    <DatePicker
      label="종료 날짜"
      selected={selected}
      strDate={strDate}
      onSelect={setSelected}
    />
  );
};

export const WithTimePicker = () => {
  const { selected, setSelected, setTime, strTime, selectedTime, strDate } =
    usePickerState(new Date());

  return (
    <>
      <DatePicker
        label="종료 날짜"
        selected={selected}
        strDate={strDate}
        onSelect={setSelected}
      />
      <TimePicker
        label="종료 시간"
        selectedTime={selectedTime}
        setTime={setTime}
        strTime={strTime}
      />
    </>
  );
};

export const Range = () => {
  const { selected, setSelected, strDate } = usePickerRangeState();
  return (
    <RangeDatePicker
      label="종료 날짜"
      selected={selected}
      strDate={strDate}
      onSelect={setSelected}
    />
  );
};
