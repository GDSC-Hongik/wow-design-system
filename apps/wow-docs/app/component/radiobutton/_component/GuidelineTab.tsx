import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { radioButtonItems } from "@constants/store/radiobuttonData";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <ImageCards items={radioButtonItems} />
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
