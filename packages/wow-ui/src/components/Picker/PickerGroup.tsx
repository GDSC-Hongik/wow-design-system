"use client";

import { Flex, styled } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { useState } from "react";

import type {
  PickerContextProps,
  Time,
} from "@/components/Picker/PickerContext";
import { PickerContext } from "@/components/Picker/PickerContext";

export interface PickerGroupProps extends PickerContextProps {
  children: ReactNode;
  initialDate?: Date;
}

const PickerGroup = ({
  children,
  selectedDate,
  setSelectedDate,
  label,
}: PickerGroupProps) => {
  const hours = selectedDate?.getHours() || 12;
  const [time, setTime] = useState<Time>({
    isAM: selectedDate ? hours < 12 : true,
    hour: selectedDate && hours && hours !== 12 ? hours % 12 : 12,
    minute: selectedDate ? selectedDate.getMinutes() : 0,
  });

  const handleDateSelect = (date?: Date) => {
    setSelectedDate(date);
    setTime({
      isAM: true,
      hour: 12,
      minute: 0,
    });
  };

  const handleTimeSelect = (newTime: Time | undefined) => {
    if (!newTime) return;
    setTime(newTime);
    if (!selectedDate || !setSelectedDate) return;
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      newTime.isAM ? newTime.hour % 12 : (newTime.hour % 12) + 12,
      newTime.minute
    );
    setSelectedDate(newDate);
  };

  return (
    <Flex direction="column" gap="0.75rem">
      <styled.span color="sub" textStyle="label2">
        {label}
      </styled.span>
      <Flex gap="2.25rem">
        <PickerContext.Provider
          value={{
            label,
            selectedDate,
            selectedTime: time,
            setSelectedDate: handleDateSelect,
            setSelectedTime: handleTimeSelect,
          }}
        >
          {children}
        </PickerContext.Provider>
      </Flex>
    </Flex>
  );
};

export default PickerGroup;
