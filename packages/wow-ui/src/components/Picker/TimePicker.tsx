import { Flex, styled } from "@styled-system/jsx";
import { forwardRef, useMemo, useState } from "react";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";

interface Time<T> {
  hour: T;
  minute: T;
}

interface TimePickerProps {
  label?: string;
  selectedTime: Time<number>;
  setTime: (time: Time<number>) => void;
  time: Time<string>;
}

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  ({ setTime, selectedTime, time, label, ...rest }, ref) => {
    const hours = useMemo(
      () => new Array(12).fill(0).map((_, i) => (i + 1).toString()),
      []
    );
    const minutes = useMemo(
      () => new Array(60).fill(0).map((_, i) => i.toString()),
      []
    );

    const [isAM, setIsAM] = useState<boolean>(true);

    const handleChangeHour = (value: {
      selectedValue: string;
      selectedText: React.ReactNode;
    }) => {
      setTime({
        hour:
          isAM || +value.selectedValue === 12
            ? +value.selectedValue
            : +value.selectedValue + 12,
        minute: selectedTime.minute,
      });
    };

    const handleChangeMinute = (value: {
      selectedValue: string;
      selectedText: React.ReactNode;
    }) => {
      setTime({ hour: selectedTime.hour, minute: +value.selectedValue });
    };

    return (
      <Flex direction="column" gap="0.75rem">
        <styled.span color="sub" textStyle="label2">
          {label}
        </styled.span>
        <Flex gap="sm" ref={ref} {...rest}>
          <styled.button
            className={pickerButtonStyle({ variant: "time" })}
            onClick={() => setIsAM((prev) => !prev)}
          >
            {isAM ? "AM" : "PM"}
          </styled.button>
          <DropDown
            trigger={
              <styled.button className={pickerButtonStyle({ variant: "time" })}>
                {time.hour}
              </styled.button>
            }
            onChange={handleChangeHour}
          >
            {hours.map((hour) => (
              <DropDownOption
                key={hour}
                text={hour.padStart(2, "0")}
                value={hour}
              />
            ))}
          </DropDown>
          <DropDown
            trigger={
              <styled.button className={pickerButtonStyle({ variant: "time" })}>
                {time.minute}
              </styled.button>
            }
            onChange={handleChangeMinute}
          >
            {minutes.map((minute) => (
              <DropDownOption
                key={minute}
                text={minute.padStart(2, "0")}
                value={minute}
              ></DropDownOption>
            ))}
          </DropDown>
        </Flex>
      </Flex>
    );
  }
);

TimePicker.displayName = "TimePicker";
export default TimePicker;
