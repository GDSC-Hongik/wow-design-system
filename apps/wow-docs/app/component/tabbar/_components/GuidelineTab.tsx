import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { widthTabBarItems } from "@constants/store/tabBarData";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Width
      </Text>
      <Space height={40} />
      <ImageCards items={widthTabBarItems} />
    </>
  );
};

export default GuidelineTab;
