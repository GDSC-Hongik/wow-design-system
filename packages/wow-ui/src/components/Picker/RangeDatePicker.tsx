"use client";

import { Flex } from "@styled-system/jsx";
import { forwardRef, useState } from "react";
import type { PropsBase, PropsRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";

import DateDropDown from "@/components/Picker/DateDropDown";
import pickerClassNames from "@/components/Picker/pickerProps/pickerClassNames";
import pickerComponents from "@/components/Picker/pickerProps/pickerComponents";
import { changeDateToString } from "@/utils/changeDateToString";

export type DatePickerProps = Omit<PropsBase, "mode"> &
  Omit<PropsRange, "mode"> & {
    label: string;
    placeholder?: string;
  };

const RangeDatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      classNames,
      selected,
      onSelect,
      label,
      placeholder = "YYYY-MM-DD",
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const strDate = selected && {
      from: selected.from && changeDateToString(selected.from),
      to: selected.to && changeDateToString(selected?.to),
    };

    return (
      <Flex direction="column" gap="0.75rem" ref={ref} width="19.75rem">
        <DateDropDown
          label={label}
          mode="range"
          placeholder={placeholder}
          selectedValue={
            strDate && {
              start:
                strDate.from &&
                `${strDate.from.year}-${strDate.from.month}-${strDate.from.day}`,
              end:
                strDate.to &&
                `${strDate.to.year}-${strDate.to.month}-${strDate.to.day}`,
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
            selected={selected}
            onSelect={onSelect}
            {...rest}
          />
        )}
      </Flex>
    );
  }
);

RangeDatePicker.displayName = "RangeDatePicker";
export default RangeDatePicker;
