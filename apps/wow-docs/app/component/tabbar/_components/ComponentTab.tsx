import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";

import { TabComponent } from "@/component/tabbar/_components/TabComponent";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Card>
        <TabComponent />
      </Card>
      <Space height={40} />
      <Card>
        <TabComponent tabCount={2} />
      </Card>
    </>
  );
};

export default ComponentTab;
