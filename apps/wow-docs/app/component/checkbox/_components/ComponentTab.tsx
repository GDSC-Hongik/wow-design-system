import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import Image from "next/image";
import type { CheckboxProps } from "wowds-ui/Checkbox";
import Checkbox from "wowds-ui/Checkbox";

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
        <Image
          alt="사용되는 텍스트의 길이 및 용도에 따라 컴포넌트 버전을 선택"
          height={60}
          src="/component/checkbox/checkbox-component-box.svg"
          width={220}
        />
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
