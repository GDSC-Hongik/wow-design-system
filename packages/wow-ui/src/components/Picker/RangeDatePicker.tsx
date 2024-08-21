"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { forwardRef, useState } from "react";
import type { PropsBase, PropsRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { DownArrow, LeftArrow, RightArrow } from "wowds-icons";

import DateDropDown from "@/components/Picker/DateDropDown";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";

export interface StringDate {
  year?: string;
  month?: string;
  day?: string;
}

export type DatePickerProps = Omit<PropsBase, "mode"> &
  Omit<PropsRange, "mode"> & {
    label: string;
    strDate?: { from: StringDate; to: StringDate };
    placeholder?: string;
  };

const RangeDatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      classNames,
      selected,
      onSelect,
      strDate,
      label,
      placeholder = "YYYY-MM-DD",
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
      <Flex direction="column" gap="0.75rem" ref={ref} width="19.75rem">
        <DateDropDown
          label={label}
          mode="range"
          placeholder={placeholder}
          selectedValue={
            strDate && {
              start: `${strDate.from.year}-${strDate.from.month}-${strDate.from.day}`,
              end: `${strDate.to.year}-${strDate.to.month}-${strDate.to.day}`,
            }
          }
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <DayPicker
            showOutsideDays
            className={className}
            mode="range"
            selected={selected}
            classNames={{
              root: css({
                width: "100%",
                paddingX: "1rem",
                paddingY: "1.25rem",

                background: "background",
                borderRadius: "md",
                shadow: "mono",
              }),
              nav: css({
                width: "17.75rem",
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
              }),
              month: css({
                display: "flex",
                flexDirection: "column",
                gap: "lg",
                alignItems: "center",
              }),
              month_grid: css({
                width: "100%",
              }),
              weekday: pickerButtonStyle({ variant: "date", state: "default" }),
              day: pickerButtonStyle({ variant: "date", state: "default" }),
              day_button: css({
                width: "100%",
                cursor: "pointer",
              }),
              outside: pickerButtonStyle({
                variant: "date",
                state: "disabled",
              }),
              range_start: pickerButtonStyle({
                variant: "date",
                state: "selected",
              }),
              range_end: pickerButtonStyle({
                variant: "date",
                state: "selected",
              }),
              range_middle: pickerButtonStyle({
                variant: "date",
                state: "range",
              }),
              ...classNames,
            }}
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
                const month = date.getMonth().toString().padStart(2, "0");
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
