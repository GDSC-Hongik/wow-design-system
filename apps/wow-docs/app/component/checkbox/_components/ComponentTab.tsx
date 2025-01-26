import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import type { CheckboxProps } from "wowds-ui/Checkbox";
import Checkbox from "wowds-ui/Checkbox";

import Checkboxes from "@/component/checkbox/_components/Checkboxes";

type CheckboxItem = CheckboxProps & {
  key: number;
  pressed?: boolean;
};

const checkboxAndTexts: CheckboxItem[] = [
  {
    key: 1,
    position: "vertical",
    label: "Text",
    defaultChecked: true,
  },
  {
    key: 2,
    position: "vertical",
    label: "Text",
  },
  {
    key: 3,
    label: "Text",
    defaultChecked: true,
  },
  { key: 4, label: "Text" },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Box</Text>
      <Space height={20} />
      <Card>
        <Flex gap="12px">
          <Checkboxes />
        </Flex>
      </Card>
      <Space height={40} />
      <Text typo="headingWebPage">Box + Text</Text>
      <Space height={20} />
      <Card>
        <Flex gap="2rem">
          {checkboxAndTexts.map((props) => (
            <Checkbox {...props} />
          ))}
        </Flex>
      </Card>
    </>
  );
};

export default ComponentTab;
