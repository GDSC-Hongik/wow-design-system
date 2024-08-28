import { Flex, styled } from "@styled-system/jsx";
import { forwardRef, useMemo } from "react";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";
import type { PickerContextProps } from "@/components/Picker/PickerContext";
import { usePicker } from "@/components/Picker/PickerContext";
import useTimeState from "@/hooks/useTimeState";
import { formatTimeToString } from "@/utils/formatToString";

interface TimePickerProps
  extends Partial<
    Pick<PickerContextProps, "selectedTime" | "setSelectedTime">
  > {
  label?: string;
}

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      label,
      selectedTime: propSelectedTime,
      setSelectedTime: propSetSelectedTime,
    },
    ref
  ) => {
    const hours = useMemo(
      () => new Array(12).fill(0).map((_, i) => (i + 1).toString()),
      []
    );
    const minutes = useMemo(
      () => new Array(60).fill(0).map((_, i) => i.toString()),
      []
    );

    const context = usePicker();
    const selected = context?.selectedTime || propSelectedTime!;
    const selectedTime = context?.selectedTime ||
      propSelectedTime! || {
        isAM: true,
        hour: 12,
        minute: 0,
      };
    const setSelectedTime = context?.setSelectedTime || propSetSelectedTime!;

    const { isAM, handleClickAMOrPM, handleChangeHour, handleChangeMinute } =
      useTimeState({ selectedTime, setSelectedTime });

    const strTime = formatTimeToString(selectedTime);

    return (
      <Flex direction="column" gap="0.75rem">
        {label && (
          <styled.span color="sub" textStyle="label2">
            {label}
          </styled.span>
        )}
        <Flex alignItems="center" gap="sm" paddingY="xs" ref={ref}>
          <button
            className={pickerButtonStyle({
              variant: "time",
              state: selected ? "selected" : "default",
            })}
            onClick={handleClickAMOrPM}
          >
            {isAM ? "AM" : "PM"}
          </button>
          <DropDown
            trigger={
              <button
                className={pickerButtonStyle({
                  variant: "time",
                  state: selected ? "selected" : "default",
                })}
              >
                {strTime.hour}
              </button>
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
              <button
                className={pickerButtonStyle({
                  variant: "time",
                  state: selected ? "selected" : "default",
                })}
              >
                {strTime.minute}
              </button>
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
