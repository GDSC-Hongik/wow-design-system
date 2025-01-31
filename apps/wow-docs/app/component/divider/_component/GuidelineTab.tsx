import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { mobileItems, pcItems } from "@constants/store/dividerData";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        PC
      </Text>
      <Space height={40} />
      <ImageCards items={pcItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Mobile
      </Text>
      <Space height={40} />
      <ImageCards items={mobileItems} />
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
