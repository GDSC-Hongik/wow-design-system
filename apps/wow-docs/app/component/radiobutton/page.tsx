import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";
import RadioButton from "wowds-ui/RadioButton";
import RadioGroup from "wowds-ui/RadioGroup";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Radio button",
  description: "와우 디자인 시스템의 Radio button 입니다.",
};

const RadioButtonPage = () => {
  return (
    <>
      <Title
        main="Radio button"
        sub="사용자가 선택할 수 있는 항목 중 하나만 선택할 수 있는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "73px 429px" }}>
        <RadioGroup defaultValue="Text">
          <RadioButton label="Text" value="Text" />
        </RadioGroup>
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default RadioButtonPage;
