import { useState } from "react";

interface Time {
  isAM: boolean;
  hour: number;
  minute: number;
}

const usePickerTimeState = (initialTime?: Time) => {
  const initializeTime = (time?: Omit<Time, "isAM">) => {
    return {
      isAM: time ? time.hour < 12 : true,
      hour: time ? time.hour % 12 : 12,
      minute: time ? time.minute : 0,
    };
  };

  const changeNumberToStirng = (number: number) => {
    return number.toString().padStart(2, "0");
  };

  const changeTimeToString = (time: Time) => {
    const transformedHour = time.hour > 12 ? time.hour - 12 : time.hour;
    const hour = changeNumberToStirng(transformedHour);
    const minute = changeNumberToStirng(time.minute);

    return { hour, minute };
  };

  const [time, setTime] = useState<Time>(initializeTime(initialTime));

  return {
    selectedTime: time,
    setTime,
    strTime: changeTimeToString(time),
  };
};

export default usePickerTimeState;
