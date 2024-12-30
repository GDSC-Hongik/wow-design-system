"use client";

import type { ReactNode } from "react";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

interface ComponentTabsProps {
  componentTab?: ReactNode;
  guidelineTab?: ReactNode;
  codeTab?: ReactNode;
}

const ComponentDetailTabs = ({
  componentTab,
  guidelineTab,
  codeTab,
}: ComponentTabsProps) => {
  return (
    <Tabs defaultValue="component">
      <TabsList>
        <TabsItem value="component">Component</TabsItem>
        <TabsItem value="guideline">Guideline</TabsItem>
        <TabsItem value="code">Code</TabsItem>
      </TabsList>
      <TabsContent value="component">{componentTab}</TabsContent>
      <TabsContent value="guideline">{guidelineTab}</TabsContent>
      <TabsContent value="code">{codeTab}</TabsContent>
    </Tabs>
  );
};

export default ComponentDetailTabs;
