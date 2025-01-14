import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { css } from "@styled-system/css";
import Image from "next/image";

export const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Select</Text>
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-component"
          height={400}
          src="/component/dropdown/dropdown-component-list.svg"
          width={330}
        />
      </Card>
      <Space height={40} />
      <Text typo="headingWebPage">List</Text>
      <Space height={20} />
      <Card>
        <Image
          alt="dropdown-option"
          height={360}
          src="/component/dropdown/dropdown-component-select.svg"
          width={300}
        />
      </Card>
    </>
  );
};

const containerStyle = css({
  display: "flex",
  justifyContent: "center",
});
