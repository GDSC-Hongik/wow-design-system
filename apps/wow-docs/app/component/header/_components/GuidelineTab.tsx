import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import Image from "next/image";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Title
        main="PC"
        sub="그리드의 양끝에 정렬하여, 스크린 사이즈와 상관 없이 고정."
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "49px auto" }}>
        <Image
          alt="기본 아바타 그래픽을 제공하고 사용자 지정 이미지를 사용할 수 있습니다"
          height={125.6}
          src="/component/header/header-guide-1.svg"
          width={880}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Title
        main="Mobile"
        sub="좌우 Margin에 맞게 정렬하여, 반응형으로 조정"
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="S size를 아바타만 사용하거나 이름과 병행한 이미지"
          height={133}
          src="/component/header/header-guide-2.svg"
          width={390}
        />
      </Card>
    </>
  );
};

export default GuidelineTab;
