import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";
import Stepper from "wowds-ui/Stepper";

import ComponentTab from "@/component/stepper/_component/ComponentTab";
import GuidelineTab from "@/component/stepper/_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Stepper",
  description: "와우 디자인 시스템의 Stepper 입니다.",
};

const StepperPage = () => {
  return (
    <>
      <Title
        main="Stepper"
        sub="사용자에게 작업이 어느 정도 진행되었는지 보여줄 때 사용하는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "100px" }}>
        <Stepper maxStep={3} step={2} />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default StepperPage;
