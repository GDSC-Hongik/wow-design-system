import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { breakpointItems, gridItems } from "@constants/store";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

export const metadata: Metadata = {
  title: "Grid",
  description: "와우 디자인 시스템의 Grid 입니다.",
};

const GridPage = () => {
  return (
    <>
      <Title
        main="Grid"
        sub="그리드는 페이지의 일관성과 시각적 질서를 유지하기 위해 사용합니다."
        variant="header"
      />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Layout Grid
      </Text>
      <Space height={40} />
      <ImageCards items={gridItems} />
      <Divider />
      <Space height={40} />
      <Text as="h2" typo="display2WebPage">
        Breakpoint
      </Text>
      <Space height={40} />
      <ImageCards items={breakpointItems} />
    </>
  );
};

export default GridPage;
