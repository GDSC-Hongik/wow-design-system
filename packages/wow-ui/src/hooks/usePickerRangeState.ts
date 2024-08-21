import { useState } from "react";
import type { DateRange } from "react-day-picker";

const usePickerRangeState = (initialDate?: DateRange) => {
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

  const dateToStr = (date?: Date) => {
    const year = date && date.getFullYear().toString();
    const month = date && date.getMonth().toString().padStart(2, "0");
    const day = date && date.getDate().toString().padStart(2, "0");

    return { year, month, day };
  };

  const [selected, setSelected] = useState<DateRange | undefined>({
    from: resetDateTime(initialDate?.from),
    to: resetDateTime(initialDate?.to),
  });

  return {
    selected,
    setSelected,
    strDate: selected && {
      from: dateToStr(selected?.from),
      to: dateToStr(selected?.to),
    },
  };
};

export default usePickerRangeState;
