import { useState } from "react";

interface PickerStateProps {
  initialDate?: Date;
}

const usePickerState = ({
  initialDate = new Date(),
}: PickerStateProps = {}) => {
  const [selected, setSelected] = useState<Date | undefined>(initialDate);

  const year = selected?.getFullYear().toString();
  const month = selected?.getMonth().toString().padStart(2, "0");
  const day = selected?.getDate().toString().padStart(2, "0");

  return {
    selected,
    setSelected,
    date: {
      year,
      month,
      day,
    },
  };
};

export default usePickerState;
