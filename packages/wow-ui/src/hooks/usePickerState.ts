import { useState } from "react";

interface PickerStateProps {
  initialDate?: Date;
}

interface Time {
  isAM: boolean;
  hour: number;
  minute: number;
}

const usePickerState = ({
  initialDate = new Date(),
}: PickerStateProps = {}) => {
  const [selected, setSelected] = useState<Date | undefined>(initialDate);
  const [time, setTime] = useState<Time>({
    isAM: initialDate.getHours() < 12,
    hour: initialDate.getHours(),
    minute: initialDate.getMinutes(),
  });

  const handleTimeSelect = (newTime: Time) => {
    setTime(newTime);
    if (!selected) return;
    const newDate = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      newTime.isAM ? newTime.hour % 12 : newTime.hour + 12,
      newTime.minute
    );
    setSelected(newDate);
  };

  const year = selected?.getFullYear().toString();
  const month = selected?.getMonth().toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");
  const transformedHour = time.hour > 12 ? time.hour - 12 : time.hour;
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
