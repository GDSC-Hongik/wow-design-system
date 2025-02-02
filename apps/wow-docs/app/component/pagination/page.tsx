import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/pagination/_component/ComponentTab";
import GuidelineTab from "@/component/pagination/_component/GuidelineTab";
import PaginationCard from "@/component/pagination/_component/PaginationCard";

export const metadata: Metadata = {
  title: "Pagination",
  description: "와우 디자인 시스템의 Pagination 입니다.",
};

const PaginationPage = () => {
  return (
    <>
      <Title
        main="Pagination"
        sub="많은 콘텐츠를 여러 화면에 나누고 번호를 매겨 여러 페이지로 이동 가능하게 하는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <PaginationCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default PaginationPage;
