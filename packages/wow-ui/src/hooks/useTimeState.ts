import { useState } from "react";

import type { Time } from "@/components/Picker/PickerContext";

interface TimeStateProps {
  selectedTime: Time;
  setSelectedTime: (time: Time | undefined) => void;
}

const useTimeState = ({ selectedTime, setSelectedTime }: TimeStateProps) => {
  const [isAM, setIsAM] = useState<boolean>(selectedTime.isAM);

  const handleClickAMOrPM = () => {
    setSelectedTime({
      isAM: !isAM,
      hour: selectedTime.hour,
      minute: selectedTime.minute,
    });
    setIsAM((prev) => !prev);
  };

  const handleChangeTime = (
    type: "hour" | "minute",
    value: { selectedValue: string; selectedText: React.ReactNode }
  ) => {
    setSelectedTime({
      isAM: isAM,
      hour: type === "hour" ? +value.selectedValue : selectedTime.hour,
      minute: type === "minute" ? +value.selectedValue : selectedTime.minute,
    });
  };

  return {
    isAM,
    handleClickAMOrPM,
    handleChangeTime,
  };
};

export default useTimeState;
