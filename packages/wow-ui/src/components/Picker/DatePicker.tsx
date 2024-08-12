"use client";

import { css, cva, cx } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { ComponentProps } from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { DownArrow, LeftArrow, RightArrow } from "wowds-icons";

import TextField from "@/components/TextField";

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  label: string;
};

const DatePicker = ({
  className,
  classNames,
  label,
  ...rest
}: CalendarProps) => {
  const [selected, setSelected] = useState<Date>(new Date());
  return (
    <Flex direction="column" gap="0.75rem" width="19.75rem">
      <TextField label={label} value={selected.toString()} />
      <DayPicker
        showOutsideDays
        className={className}
        classNames={{
          root: css({
            width: "100%",
            paddingX: "1rem",
            paddingY: "1.25rem",

            background: "background",
            borderRadius: "sm",
            shadow: "mono",
          }),
          month: css({
            display: "flex",
            flexDirection: "column",
            gap: "lg",
            alignItems: "center",
          }),
          month_grid: css({ width: "100%" }),
          nav: css({
            width: "17.75rem",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
          }),
          weekday: buttonStyle({ variant: "date", state: "default" }),

          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: buttonStyle({ variant: "date", state: "default" }),
          day_selected: buttonStyle({ variant: "date", state: "selected" }),
          day_today: buttonStyle({ variant: "date", state: "selected" }),
          day_outside: buttonStyle({ variant: "date", state: "disabled" }),
          day_disabled: buttonStyle({ variant: "date", state: "disabled" }),
          day_hidden: buttonStyle({ variant: "date", state: "disabled" }),
          ...classNames,
        }}
        components={{
          Weekdays: () => {
            return (
              <styled.tr>
                {["S", "M", "T", "W", "T", "F", "S"].map((week: string) => (
                  <styled.th
                    key={week}
                    className={buttonStyle({
                      variant: "month",
                      state: "default",
                    })}
                  >
                    {week}
                  </styled.th>
                ))}
              </styled.tr>
            );
          },
          MonthCaption: (props) => {
            const date = props.calendarMonth.date;
            const year = date.getFullYear();
            const month = date.getMonth().toString().padStart(2, "0");
            return (
              <styled.span textStyle="h2">{`${year}.${month}`}</styled.span>
            );
          },
          Chevron: (props) => {
            switch (props.orientation) {
              case "left":
                return <LeftArrow stroke="outline" />;
              case "right":
                return <RightArrow stroke="outline" />;
              case "down":
                return <DownArrow stroke="outline" />;
              default:
                return <DownArrow stroke="outline" />;
            }
          },
        }}
        {...rest}
      />
    </Flex>
  );
};

const buttonStyle = cva({
  base: {
    paddingX: "xs",

    borderRadius: "sm",
    textStyle: "body1",
    textAlign: "center",
    cursor: "pointer",
  },
  variants: {
    variant: {
      time: {
        color: "sub",
        background: "background",
        _selected: {
          borderWidth: 1,
          borderColor: "textBlack",
        },
        _pressed: {
          borderWidth: 1,
          background: "monoBackgroundPressed",
        },
      },
      date: {
        color: "sub",
        _active: {
          background: "monoBackgroundPressed",
        },
      },
      month: { color: "sub", cursor: "default" },
    },
    state: {
      default: {},
      selected: {
        background: "primary",
        color: "textWhite",
      },
      disabled: {
        color: "lightDisabled",
        cursor: "not-allowed",
      },
    },
  },
});

DatePicker.displayName = "DatePicker";
export default DatePicker;
