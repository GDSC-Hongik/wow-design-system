import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { iconDescriptions } from "@constants/document/foundation/icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icon",
  description: "와우 디자인 시스템의 Icon입니다.",
};

const IconPage = () => {
  return (
    <>
      <Title
        main="Icon"
        sub="아이콘은 간결한 표현을 통해 쉽고 빠르게 정보를 전달하는 것을 목표로 합니다."
        variant="header"
      />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={48} />
      <ImageCards items={iconDescriptions} />
    </>
  );
};

export default IconPage;
