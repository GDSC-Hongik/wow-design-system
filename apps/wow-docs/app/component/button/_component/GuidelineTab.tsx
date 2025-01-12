import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Divider from "wowds-ui/Divider";

import {
  combinationButtonItems,
  widthButtonItems,
  withIconButtonItems,
  withSubjectButtonItems,
} from "../../../../constants/store";

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
      <ImageCards items={widthButtonItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Combination
      </Text>
      <Space height={40} />
      <ImageCards items={combinationButtonItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        With Icon
      </Text>
      <Space height={40} />
      <ImageCards items={withIconButtonItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        With Subject
      </Text>
      <Space height={40} />
      <ImageCards items={withSubjectButtonItems} />
    </>
  );
};

export default GuidelineTab;
