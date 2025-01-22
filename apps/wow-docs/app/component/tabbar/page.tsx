import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next";

import ComponentTab from "@/component/tabbar/_components/ComponentTab";
import GuidelineTab from "@/component/tabbar/_components/GuidelineTab";
import { TabComponent } from "@/component/tabbar/_components/TabComponent";

export const metadata: Metadata = {
  title: "Tab Bar",
  description: "와우 디자인 시스템의 search bar component 입니다.",
};

const SearchBarComponentPage = () => {
  const dropdownPageData = componentItems.find(
    (item) => item.title === "Tab Bar"
  );

  return (
    <>
      <Title
        main={dropdownPageData?.title ?? ""}
        sub={dropdownPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <Card>
        <TabComponent />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
      <Space height={92} />
    </>
  );
};

export default SearchBarComponentPage;
