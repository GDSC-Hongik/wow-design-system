import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import RadioButton from "@/components/RadioButton";
import RadioGroup from "@/components/RadioGroup";

const meta = {
  title: "Example/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

const RadioGrid = () => {
  const [value, setValue] = useState("1학년");

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <RadioGroup value={value} onChange={handleChangeValue}>
      <RadioButton label="1학년" />
      <RadioButton label="2학년" />
      <RadioButton label="3학년" />
      <RadioButton label="4학년" />
    </RadioGroup>
  );
};

export const Default: StoryObj = {
  render: () => <RadioGrid />,
};
