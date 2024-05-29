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

const RadioGridDefault = () => {
  return (
    <RadioGroup defaultValue="1학년" name="defaultgrade">
      <RadioButton label="1학년" />
      <RadioButton label="2학년" />
      <RadioButton label="3학년" />
      <RadioButton disabled label="4학년" />
    </RadioGroup>
  );
};

const RadioGridControlled = () => {
  const [value, setState] = useState("1학년");
  return (
    <RadioGroup
      defaultValue="1학년"
      name="conotrolledgrade"
      value={value}
      onChange={(e) => setState(e.target.value)}
    >
      <RadioButton label="1학년" />
      <RadioButton label="2학년" />
      <RadioButton label="3학년" />
      <RadioButton disabled label="4학년" />
    </RadioGroup>
  );
};

export const Default: StoryObj = {
  render: () => <RadioGridDefault />,
};

export const Controlled: StoryObj = {
  render: () => <RadioGridControlled />,
};
