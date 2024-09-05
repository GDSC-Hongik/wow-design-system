import type { Time } from "@/components/Picker/PickerContext";

export const formatNumberToStirng = (number: number) => {
  return number.toString().padStart(2, "0");
};

export const formatTimeToString = (time: Time) => {
  const transformedHour = () => {
    if (time.hour === 0) return 12;
    if (time.hour > 12) return time.hour - 12;
    return time.hour;
  };

  const hour = formatNumberToStirng(transformedHour());
  const minute = formatNumberToStirng(time.minute);

  return { hour, minute };
};

export const formatDateToString = (selected: Date) => {
  const year = selected?.getFullYear().toString();
  const month =
    selected && (selected.getMonth() + 1).toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");
  const date = `${year}-${month}-${day}`;

  return date;
};
