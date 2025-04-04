import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import type { Metadata } from "next";
import Tag from "wowds-ui/Tag";

import ComponentTab from "@/component/tag/_components/ComponentTab";
import GuidelineTab from "@/component/tag/_components/GuidelineTab";

export const metadata: Metadata = {
  title: "Tag",
  description: "와우 디자인 시스템의 tag component 입니다.",
};

const TagComponentPage = () => {
  const tagPageData = componentItems.find((item) => item.title === "Tag");

  return (
    <>
      <Title
        main={tagPageData?.title ?? ""}
        sub={tagPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <Card className={tagContainerStyle}>
        <Tag color="blue" variant="outline">
          Tag
        </Tag>
        <Tag color="blue" variant="solid2">
          Tag
        </Tag>
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

export default TagComponentPage;

const tagContainerStyle = css({
  gap: "20px",
});
