import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Grid } from "@styled-system/jsx";
import Image from "next/image";
import Switch from "wowds-ui/Switch";

import SwitchBtns from "@/component/switch/_components/SwitchBtns";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Btn</Text>
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="Switch 버튼의 checked, unchecked 상태를 dafault, hover, pressed, disabled로 분류해서 보여주는 이미지"
          height={188}
          src="/component/switch/switch-component-btn.svg"
          width={166}
        />
        <Grid columnGap="20px" columns={2}>
          <SwitchBtns />
        </Grid>
      </Card>
      <Space height={40} />
      <Text typo="headingWebPage">Btn + Text</Text>
      <Space height={20} />
      <Card
        style={{
          padding: "52px auto",
        }}
      >
        <Switch defaultChecked label="Text" />
      </Card>
    </>
  );
};

export default ComponentTab;
