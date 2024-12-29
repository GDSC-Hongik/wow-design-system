import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";
import Button from "wowds-ui/Button";

import ComponentTab from "@/component/button/_component/ComponentTab";
import GuidelineTab from "@/component/button/_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Button",
  description: "와우 디자인 시스템의 Button 입니다.",
};

const ButtonPage = () => {
  return (
    <>
      <Title
        main="Button"
        sub="사용자가 설정한 동작을 수행하기 위해 누르는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "156px 154px", gap: 24 }}>
        <Button>Button1</Button>
        <Button variant="outline">Button1</Button>
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default ButtonPage;
