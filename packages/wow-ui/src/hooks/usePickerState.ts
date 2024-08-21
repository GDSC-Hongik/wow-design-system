import { useState } from "react";

interface Time {
  isAM: boolean;
  hour: number;
  minute: number;
}

const usePickerState = (initialDate?: Date) => {
  const resetDateTime = (date?: Date) => {
    const prevDate = date ? date : new Date();
    const newDate = new Date(
      prevDate.getFullYear(),
      prevDate.getMonth(),
      prevDate.getDate(),
      0,
      0
    );
    return newDate;
  };

  const [selected, setSelected] = useState<Date | undefined>(
    resetDateTime(initialDate)
  );
  const [time, setTime] = useState<Time>({
    isAM: selected ? selected.getHours() < 12 : true,
    hour: selected ? selected.getHours() % 12 : 12,
    minute: selected ? selected.getMinutes() : 0,
  });

  const handleTimeSelect = (newTime: Time) => {
    setTime(newTime);
    if (!selected) return;
    const newDate = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      newTime.isAM ? newTime.hour % 12 : (newTime.hour % 12) + 12,
      newTime.minute
    );
    setSelected(newDate);
  };

  return {
    selected,
    selectedTime: time,
    setSelected,
    setTime: handleTimeSelect,
  };
};

export default usePickerState;
