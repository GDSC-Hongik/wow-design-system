"use client";

import { Flex, styled } from "@styled-system/jsx";
import { forwardRef, useState } from "react";
import type { PropsBase, PropsRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { DownArrow, LeftArrow, RightArrow } from "wowds-icons";

import DateDropDown from "@/components/Picker/DateDropDown";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";
import pickerClassNames from "@/components/Picker/pickerClassNames";
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
            mode="range"
            selected={selected}
            components={{
              Chevron: (props) => {
                switch (props.orientation) {
                  case "left":
                    return (
                      <LeftArrow
                        stroke="outline"
                        style={{ cursor: "pointer" }}
                      />
                    );
                  case "right":
                    return (
                      <RightArrow
                        stroke="outline"
                        style={{ cursor: "pointer" }}
                      />
                    );
                  case "down":
                    return (
                      <DownArrow
                        stroke="outline"
                        style={{ cursor: "pointer" }}
                      />
                    );
                  default:
                    return (
                      <DownArrow
                        stroke="outline"
                        style={{ cursor: "pointer" }}
                      />
                    );
                }
              },
              MonthCaption: (props) => {
                const date = props.calendarMonth.date;
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, "0");
                return (
                  <styled.span textStyle="h2">{`${year}.${month}`}</styled.span>
                );
              },
              Weekdays: () => {
                return (
                  <styled.thead>
                    <styled.tr>
                      {["S", "M", "T", "W", "T", "F", "S"].map(
                        (week: string, index: number) => (
                          <styled.th
                            key={index}
                            className={pickerButtonStyle({
                              variant: "month",
                              state: "default",
                            })}
                          >
                            {week}
                          </styled.th>
                        )
                      )}
                    </styled.tr>
                  </styled.thead>
                );
              },
            }}
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
