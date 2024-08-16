import { useState } from "react";

interface PickerStateProps {
  initialDate?: Date;
}

interface TimePicker {
  time: "AM" | "PM";
  hour: number;
  minute: number;
}

const usePickerState = ({
  initialDate = new Date(),
}: PickerStateProps = {}) => {
  const [selected, setSelected] = useState<Date | undefined>(initialDate);
  const [timeValue, setTimeValue] = useState<TimePicker>({
    time: "AM",
    hour: 0,
    minute: 0,
  });

  const year = selected?.getFullYear().toString();
  const month = selected?.getMonth().toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");

  return {
    selected,
    setSelected,
    date: {
      year,
      month,
      day,
    },
  };
};

export default usePickerState;
