import Space from "@components/Space";
import Text from "@components/Text";
import { routePath } from "@constants/routePath";
import { css } from "@styled-system/css";
import Image from "next/image";
import Link from "next/link";
import { RightArrow } from "wowds-icons";

import OverviewBackgroundImage from "../../public/overview-background.png";

const OverviewPage = () => {
  return (
    <>
      <Text as="h1" color="white" typo="displayWebPage">
        WOW Design System
      </Text>
      <Space height={20} />
      <Text color="white">
        GDSC Hongik은 초심자들이 개발에 관심을 가지고 입문할 수 있도록 운영돼요.
        <br />
        그 취지에 맞게, 디자인에 대한 고민을 줄이고 개발에만 집중할 수 있도록
        돕는 디자인시스템을 제작했어요. <br />
        WOW 디자인시스템은 구글의 기존 무드를 따르되, GDSC Hongik의 서비스에 더
        적합하게
        <br />
        활용되는 가이드라인으로 구성함으로써 편의성과 확장성을 가지고 있어요.
      </Text>
      <Space height={60} />
      <Link className={linkTextStyle} href={routePath.foundation}>
        Foundation
        <RightArrow />
      </Link>
      <Space height={42} />
      <Link className={linkTextStyle} href={routePath.component}>
        Component
        <RightArrow />
      </Link>
      <Image
        alt="overview-background"
        className={backgroundImageStyle}
        height={505}
        src={OverviewBackgroundImage}
        width={821}
      />
    </>
  );
};

export default OverviewPage;

const linkTextStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "12px",
  borderBottom: "1px solid white",
  color: "white",
  textStyle: "h1",
  fontWeight: 700,
  width: "295px",
});

const backgroundImageStyle = css({
  position: "absolute",
  right: "101px",
  bottom: 0,
});
