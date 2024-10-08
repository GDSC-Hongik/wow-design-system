"use client";

import { Flex } from "@styled-system/jsx";
import { useRef, useState } from "react";
import type { PropsBase, PropsSingle } from "react-day-picker";
import { DayPicker } from "react-day-picker";

import DateDropDown from "@/components/Picker/DateDropDown";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";
import pickerClassNames from "@/components/Picker/pickerClassNames";
import pickerComponents from "@/components/Picker/pickerComponents";
import { usePicker } from "@/components/Picker/PickerContext";
import useClickOutside from "@/hooks/useClickOutside";
import { formatDateToString } from "@/utils/formatToString";

export type DatePickerProps = Omit<PropsBase, "mode"> &
  Omit<PropsSingle, "mode"> & {
    label?: string;
    placeholder?: string;
  };

const SingleDatePicker = ({
  className,
  classNames,
  selected: propSelected,
  onSelect: propOnSelect,
  label,
  placeholder = "YYYY-MM-DD",
  ...rest
}: DatePickerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const pickerRef = useRef<HTMLDivElement>(null);
  useClickOutside(pickerRef, () => setOpen(() => false));

  const context = usePicker();
  const selected = context?.selectedDate || propSelected!;
  const onSelect = context?.setSelectedDate || propOnSelect!;

  const date = formatDateToString(selected);

  return (
    <Flex direction="column" gap="0.75rem" ref={pickerRef} width="19.75rem">
      <DateDropDown
        label={label}
        mode="single"
        placeholder={placeholder}
        selectedValue={selected && date}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <DayPicker
          showOutsideDays
          className={className}
          components={pickerComponents}
          mode="single"
          selected={selected}
          classNames={{
            ...pickerClassNames,
            selected: pickerButtonStyle({
              variant: "date",
              state: "selected",
            }),
            ...classNames,
          }}
          onSelect={onSelect}
          {...rest}
        />
      )}
    </Flex>
  );
};

SingleDatePicker.displayName = "SingleDatePicker";
export default SingleDatePicker;
