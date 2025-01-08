import Card from "@components/Card";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { PageTabs } from "@/component/dropdown/Tabs";

export const metadata: Metadata = {
  title: "DropDown",
  description: "와우 디자인 시스템의 dropdown component 입니다.",
};

const DropDownComponentPage = () => {
  const dropdownPageData = componentItems.find(
    (item) => item.title === "Dropdown"
  );

  return (
    <>
      <Title
        main={dropdownPageData?.title ?? ""}
        sub={dropdownPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <Card className={cardStyle}>
        <DropDown label="Label" placeholder="선택하세요" style={dropdownStyle}>
          <DropDownOption text="Text" value="Text" />
        </DropDown>
        <DropDown
          defaultValue="Text"
          placeholder="내용을 입력하세요"
          style={dropdownStyle}
        >
          <DropDownOption text="Text" value="Text" />
        </DropDown>
      </Card>
      <Space height={92} />
      <PageTabs />
      <Space height={92} />
    </>
  );
};

export default DropDownComponentPage;

const dropdownStyle: CSSProperties = {
  width: "300px",
};

const cardStyle = css({
  alignItems: "end",
  gap: "20px",
});
