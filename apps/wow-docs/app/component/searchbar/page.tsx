import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next";
import SearchBar from "wowds-ui/SearchBar";

import { ComponentTab } from "@/component/searchbar/_components/ComponentTab";
import GuidelineTab from "@/component/searchbar/_components/GuidelineTab";

export const metadata: Metadata = {
  title: "SeachBar",
  description: "와우 디자인 시스템의 search bar component 입니다.",
};

const SearchBarComponentPage = () => {
  const dropdownPageData = componentItems.find(
    (item) => item.title === "Search Bar"
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
        <SearchBar defaultValue="Text" />
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
