import type { Meta } from "@storybook/react";
import { Flex } from "@styled-system/jsx";

import RangeDatePicker from "@/components/Picker/RangeDatePicker";
import DatePicker from "@/components/Picker/SingleDatePicker";
import TimePicker from "@/components/Picker/TimePicker";
import usePickerRangeState from "@/hooks/usePickerRangeDateState";
import usePickerState from "@/hooks/usePickerState";
import usePickerTimeState from "@/hooks/usePickerTimeState";

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

  console.log(selected);
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

  console.log(selected);

  return (
    <Flex>
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
    </Flex>
  );
};

export const DateRange = () => {
  const { selected, setSelected, strDate } = usePickerRangeState();
  console.log(selected);
  return (
    <RangeDatePicker
      label="스터디 신청 기간"
      selected={selected}
      strDate={strDate}
      onSelect={setSelected}
    />
  );
};

export const TimeRange = () => {
  const {
    selectedTime: start,
    setTime: setStart,
    strTime: strStart,
  } = usePickerTimeState();
  const {
    selectedTime: end,
    setTime: setEnd,
    strTime: strEnd,
  } = usePickerTimeState();

  return (
    <Flex align="flex-end" gap="lg">
      <TimePicker
        label="스터디 시간"
        selectedTime={start}
        setTime={setStart}
        strTime={strStart}
      />
      <span>~</span>
      <TimePicker selectedTime={end} setTime={setEnd} strTime={strEnd} />
    </Flex>
  );
};
