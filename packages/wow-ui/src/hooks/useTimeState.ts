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

  const handleChangeHour = (value: {
    selectedValue: string;
    selectedText: React.ReactNode;
  }) => {
    setSelectedTime({
      isAM: isAM,
      hour: +value.selectedValue,
      minute: selectedTime.minute,
    });
  };

  const handleChangeMinute = (value: {
    selectedValue: string;
    selectedText: React.ReactNode;
  }) => {
    setSelectedTime({
      isAM: isAM,
      hour: selectedTime.hour,
      minute: +value.selectedValue,
    });
  };

  return {
    isAM,
    handleClickAMOrPM,
    handleChangeHour,
    handleChangeMinute,
  };
};

export default useTimeState;
