"use client";

import { useState } from "react";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

import { ComponentTab } from "@/component/dropdown/ComponentTab";
import { GuidelineTab } from "@/component/dropdown/GuidelineTab";

type TabsItemType = "component" | "guide" | "code";

export const PageTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabsItemType>("guide");

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
          <ComponentTab />
        </TabsContent>
        <TabsContent value="guide">
          <GuidelineTab />
        </TabsContent>
        <TabsContent value="code">code</TabsContent>
      </Tabs>
    </>
  );
};
