import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
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
  const title = componentItems.find((item) => item.title === "Radio Button");
  return (
    <>
      <Title
        main={title?.title || ""}
        sub={title?.description || ""}
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
