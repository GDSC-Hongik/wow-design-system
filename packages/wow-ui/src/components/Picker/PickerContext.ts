import { createContext, useContext } from "react";

export interface Time {
  isAM: boolean;
  hour: number;
  minute: number;
}

export interface PickerContextProps {
  label?: string;
  selectedDate: Date | undefined;
  selectedTime?: Time;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedTime?: (time: Time | undefined) => void;
}

export const PickerContext = createContext<PickerContextProps | undefined>(
  undefined
);

export const usePicker = () => {
  const context = useContext(PickerContext);
  return context;
};
