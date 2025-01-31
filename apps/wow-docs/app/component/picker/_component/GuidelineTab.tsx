import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import {
  combinationButtonItems,
  widthButtonItems,
} from "@constants/store/pickerData";
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
        Time
      </Text>
      <Space height={40} />
      <ImageCards items={widthButtonItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Date
      </Text>
      <Space height={40} />
      <ImageCards items={combinationButtonItems} />
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
