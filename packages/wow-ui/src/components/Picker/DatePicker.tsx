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
          month_grid: css({ width: "100%" }),
          weekday: buttonStyle({ variant: "date", state: "default" }),
          day: buttonStyle({ variant: "date", state: "default" }),
          outside: buttonStyle({ variant: "date", state: "disabled" }),
          selected: buttonStyle({ variant: "date", state: "selected" }),
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
        pointerEvents: "none",
      },
    },
  },
});

DatePicker.displayName = "DatePicker";
export default DatePicker;
