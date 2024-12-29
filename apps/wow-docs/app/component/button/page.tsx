import Card from "@components/Card";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";
import Button from "wowds-ui/Button";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

import GuidlineTab from "@/component/button/_component/GuidlineTab";

export const metadata: Metadata = {
  title: "Button",
  description: "와우 디자인 시스템의 Button 입니다.",
};

const ButtonPage = () => {
  return (
    <>
      <Title
        main="Button"
        sub="사용자가 설정한 동작을 수행하기 위해 누르는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "156px 154px", gap: 24 }}>
        <Button>Button1</Button>
        <Button variant="outline">Button1</Button>
      </Card>
      <Space height={92} />
      <Tabs defaultValue="component">
        <TabsList>
          <TabsItem value="component">Component</TabsItem>
          <TabsItem value="guideline">Guideline</TabsItem>
          <TabsItem value="code">Code</TabsItem>
        </TabsList>
        <TabsContent value="component"></TabsContent>
        <TabsContent value="guideline">
          <GuidlineTab />
        </TabsContent>
        <TabsContent value="code"></TabsContent>
      </Tabs>
    </>
  );
};

export default ButtonPage;
