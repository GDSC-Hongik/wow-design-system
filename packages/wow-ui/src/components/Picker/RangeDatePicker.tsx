"use client";

import { Flex } from "@styled-system/jsx";
import { useRef, useState } from "react";
import type {
  DateRange,
  Modifiers,
  PropsBase,
  PropsRange,
} from "react-day-picker";
import { DayPicker } from "react-day-picker";

import DateDropDown from "@/components/Picker/DateDropDown";
import pickerClassNames from "@/components/Picker/pickerClassNames";
import pickerComponents from "@/components/Picker/pickerComponents";
import useClickOutside from "@/hooks/useClickOutside";
import { formatDateToString } from "@/utils/formatToString";

export type DatePickerProps = Omit<PropsBase, "mode"> &
  Omit<PropsRange, "mode"> & {
    label: string;
    placeholder?: string;
  };

const RangeDatePicker = ({
  className,
  classNames,
  selected: prevSelected,
  onSelect,
  label,
  placeholder = "YYYY-MM-DD",
  ...rest
}: DatePickerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const pickerRef = useRef<HTMLDivElement>(null);
  useClickOutside(pickerRef, () => setOpen(() => false));

  const handleSelectDate = (
    selected: DateRange | undefined,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    if (!onSelect) return;
    if (prevSelected && prevSelected.from !== prevSelected.to)
      onSelect(undefined, triggerDate, modifiers, e);
    else onSelect(selected, triggerDate, modifiers, e);
  };

  const strDate = prevSelected && {
    from: prevSelected.from && formatDateToString(prevSelected.from),
    to: prevSelected.to && formatDateToString(prevSelected?.to),
  };

  return (
    <Flex direction="column" gap="0.75rem" ref={pickerRef} width="19.75rem">
      <DateDropDown
        label={label}
        mode="range"
        placeholder={placeholder}
        selectedValue={
          strDate && {
            start: strDate.from,
            end: strDate.to,
          }
        }
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <DayPicker
          showOutsideDays
          className={className}
          classNames={{ ...pickerClassNames, ...classNames }}
          components={pickerComponents}
          mode="range"
          selected={prevSelected}
          onSelect={handleSelectDate}
          {...rest}
        />
      )}
    </Flex>
  );
};

RangeDatePicker.displayName = "RangeDatePicker";
export default RangeDatePicker;
