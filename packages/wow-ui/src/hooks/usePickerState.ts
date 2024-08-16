import { useState } from "react";

interface PickerStateProps {
  initialDate?: Date;
}

interface Time {
  hour: number;
  minute: number;
}

const usePickerState = ({
  initialDate = new Date(),
}: PickerStateProps = {}) => {
  const [selected, setSelected] = useState<Date | undefined>(initialDate);
  const [time, setTime] = useState<Time>({ hour: 0, minute: 0 });

  const handleTimeSelect = (newTime: Time) => {
    setTime(newTime);
    if (!selected) return;
    const newDate = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      newTime.hour,
      newTime.minute
    );
    setSelected(newDate);
  };

  const year = selected?.getFullYear().toString();
  const month = selected?.getMonth().toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");
  const hour = time.hour.toString().padStart(2, "0");
  const minute = time.minute.toString().padStart(2, "0");

  return {
    selected,
    selectedTime: time,
    setSelected,
    setTime: handleTimeSelect,
    date: {
      year,
      month,
      day,
    },
    time: {
      hour,
      minute,
    },
  };
};

export default usePickerState;
