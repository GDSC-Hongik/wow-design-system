import { useState } from "react";

import RadioButton from "@/components/RadioButton/RadioButton";
import RadioGroup from "@/components/RadioButton/RadioGroup";

export interface RadioGridProps {
  items: string[];
  label?: string;
}

const RadioGrid = ({ items }: RadioGridProps) => {
  const [value, setValue] = useState(items[0]);

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <RadioGroup value={value} onChange={handleChangeValue}>
      {items.map((item: string) => (
        <RadioButton
          key={item}
          label={item}
          state={value === item ? "selected" : "unselected"}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioGrid;
