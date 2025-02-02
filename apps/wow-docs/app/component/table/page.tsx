import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/table/_component/ComponentTab";
import GuidelineTab from "@/component/table/_component/GuidelineTab";
import TableCard from "@/component/table/_component/TableCard";

export const metadata: Metadata = {
  title: "Table",
  description: "와우 디자인 시스템의 Table 입니다.",
};

const TablePage = () => {
  return (
    <>
      <Title
        main="Table"
        sub="데이터를 표 형식으로 표현하고 싶을 때 사용하는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <TableCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default TablePage;
