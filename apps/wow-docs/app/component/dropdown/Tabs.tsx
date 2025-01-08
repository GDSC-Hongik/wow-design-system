"use client";

import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { css } from "@styled-system/css";
import Image from "next/image";
import { useState } from "react";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

type TabsItemType = "component" | "guide" | "code";

export const PageTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabsItemType>("component");

  const handleChange = (value: string) => {
    setSelectedTab(value as TabsItemType);
  };
  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        <TabsList>
          <TabsItem value="component">Component</TabsItem>
          <TabsItem value="guide">Guideline</TabsItem>
          <TabsItem value="code">Code</TabsItem>
        </TabsList>
        <TabsContent value="component">
          <Space height={48} />
          <Text typo="display2WebPage">Component</Text>
          <Space height={40} />
          <Text typo="headingWebPage">Select</Text>
          <Space height={20} />
          <Card className={containerStyle}>
            <Image
              alt="dropdown-component"
              height={400}
              src="/component/dropdown/component-dropdown.png"
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
              src="/component/dropdown/component-dropdownoption.png"
              width={300}
            />
          </Card>
        </TabsContent>
        <TabsContent value="guide">guide</TabsContent>
        <TabsContent value="code">code</TabsContent>
      </Tabs>
    </>
  );
};

const containerStyle = css({
  display: "flex",
  justifyContent: "center",
});
