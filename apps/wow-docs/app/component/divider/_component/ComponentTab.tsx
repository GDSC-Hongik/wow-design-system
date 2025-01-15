import Space from "@components/Space";
import Text from "@components/Text";

import DividerCard from "./DividerCard";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <DividerCard />
      <Space height={40} />
    </>
  );
};

export default ComponentTab;
