import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "./_component/ComponentTab";
import DividerCard from "./_component/DividerCard";
import GuidelineTab from "./_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Divider",
  description: "와우 디자인 시스템의 Divider 입니다.",
};

const DividerPage = () => {
  const title = componentItems.find((item) => item.title === "Divider");
  return (
    <>
      <Title
        main={title?.title || ""}
        sub={title?.description || ""}
        variant="header"
      />
      <Space height={40} />
      <DividerCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default DividerPage;
