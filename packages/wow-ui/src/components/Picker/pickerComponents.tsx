import { styled } from "@styled-system/jsx";
import type { CustomComponents } from "react-day-picker";
import { DownArrow, LeftArrow, RightArrow } from "wowds-icons";

import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";

const pickerComponents: Partial<CustomComponents> = {
  Chevron: (props) => {
    switch (props.orientation) {
      case "left":
        return <LeftArrow stroke="outline" style={{ cursor: "pointer" }} />;
      case "right":
        return <RightArrow stroke="outline" style={{ cursor: "pointer" }} />;
      case "down":
        return <DownArrow stroke="outline" style={{ cursor: "pointer" }} />;
      default:
        return <DownArrow stroke="outline" style={{ cursor: "pointer" }} />;
    }
  },
  MonthCaption: (props) => {
    const date = props.calendarMonth.date;
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return <styled.span textStyle="h2">{`${year}.${month}`}</styled.span>;
  },
  Weekdays: () => {
    return (
      <thead>
        <tr>
          {["S", "M", "T", "W", "T", "F", "S"].map(
            (week: string, index: number) => (
              <th
                key={index}
                className={pickerButtonStyle({
                  variant: "month",
                  state: "default",
                })}
              >
                {week}
              </th>
            )
          )}
        </tr>
      </thead>
    );
  },
};

export default pickerComponents;
