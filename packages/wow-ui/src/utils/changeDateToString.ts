export const changeDateToString = (selected: Date) => {
  const year = selected?.getFullYear().toString();
  const month =
    selected && (selected.getMonth() + 1).toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");

  return { year, month, day };
};
