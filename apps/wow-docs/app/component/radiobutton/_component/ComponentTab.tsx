import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import type { RadioButtonProps } from "wowds-ui/RadioButton";
import RadioButton from "wowds-ui/RadioButton";
import RadioGroup from "wowds-ui/RadioGroup";

type RadioButtonPropsWithKey = RadioButtonProps & {
  key: number;
  inputProps?: { "data-pressed": boolean };
};

const btnRadioButtons: RadioButtonPropsWithKey[] = [
  { key: 1, value: "selected" },
  { key: 2, value: "selected", inputProps: { "data-pressed": true } },
  { key: 3, value: "selected", disabled: true },
  { key: 4, value: "" },
  { key: 5, value: "", inputProps: { "data-pressed": true } },
  { key: 6, value: "", disabled: true },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        Btn
      </Text>
      <Space height={20} />
      <Card>
        <RadioGroup defaultValue="selected">
          <Flex gap={12} padding={20}>
            {btnRadioButtons.map(({ key, ...props }) => (
              <RadioButton key={key} {...props} />
            ))}
          </Flex>
        </RadioGroup>
      </Card>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        Btn + Text
      </Text>
      <Space height={20} />
      <Card>
        <RadioGroup defaultValue="selected">
          <Flex gap={12} padding={20}>
            <RadioButton label="Text" value="selected" />
            <RadioButton label="Text" value="" />
          </Flex>
        </RadioGroup>
      </Card>
      <Space height={40} />
    </>
  );
};

export default ComponentTab;
