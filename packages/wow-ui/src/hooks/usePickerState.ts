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

  const year = selected?.getFullYear().toString();
  const month =
    selected && (selected.getMonth() + 1).toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");
  const transformedHour =
    time.hour === 0
      ? time.hour + 12
      : time.hour > 12
        ? time.hour - 12
        : time.hour;
  const hour = transformedHour.toString().padStart(2, "0");
  const minute = time.minute.toString().padStart(2, "0");

  return {
    selected,
    selectedTime: time,
    setSelected,
    setTime: handleTimeSelect,
    strDate: {
      year,
      month,
      day,
    },
    strTime: {
      isAM: time.isAM,
      hour,
      minute,
    },
  };
};

export default usePickerState;
