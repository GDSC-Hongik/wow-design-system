import Card from "@components/Card";
import type { Item } from "@components/ImageCard";
import ImageCards from "@components/ImageCard";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { css } from "@styled-system/css";
import Image from "next/image";
import type { CSSProperties } from "react";
import Chip from "wowds-ui/Chip";
import Divider from "wowds-ui/Divider";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const widthDropdownItems: Item[] = [
  {
    main: "PC",
    sub: "최대 너비, 고정 너비는 그리드 기준 4칸",
    imageAlt: "width-1",
    imageSrc: "/component/dropdown/dropdown-guide-3.svg",
    imageWidth: 907,
    imageHeight: 160,
  },
  {
    main: "Mobile",
    sub: "전체 그리드 혹은 박스 컴포넌트에 Fill로 너비 맞추기",
    imageAlt: "width-2",
    imageSrc: "/component/dropdown/dropdown-guide-4.svg",
    imageWidth: 390,
    imageHeight: 276,
  },
  {
    main: "List",
    sub: "상단 입력란의 너비와 맞추는 것이 기본",
    imageAlt: "width-2",
    imageSrc: "/component/dropdown/dropdown-guide-5.svg",
    imageWidth: 907,
    imageHeight: 282,
  },
];

export const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Title
        main="List Combination"
        variant="component"
        sub={
          <>
            List 컴포넌트를 사용하여 선택지 영역을 조합,
            <br /> H값은 Hug로 설정하되, 최대 300px로 제한하고 넘칠 시 스크롤바
            사용
          </>
        }
      />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-list-combination-1"
          height={907}
          src="/component/dropdown/dropdown-guide-1.svg"
          width={364}
        />
        <Space height={20} />
        <Image
          alt="dropdown-guide-list-combination-2"
          height={907}
          src="/component/dropdown/dropdown-guide-2.svg"
          width={364}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Width
      </Text>
      <Space height={40} />
      <ImageCards items={widthDropdownItems} />
      <Space height={40} />
      <Text color="sub" typo="body1">
        그 외에는 함께 사용되는 요소의 너비에 맞추기
      </Text>
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-list-combination-2"
          height={907}
          src="/component/dropdown/dropdown-guide-6.svg"
          width={230}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Usuage
      </Text>
      <Space height={40} />
      <Title main="L Size" sub="Label 텍스트 호ㅑㄹ용" variant="component" />
      <Card className={containerStyle}>
        <Chip label="Label 0" />
        <DropDown
          label="Label"
          placeholder="목록을 눌러 선택하세요"
          style={dropdownStyle}
        >
          <DropDownOption text="Text" value="Text" />
        </DropDown>
        <Chip label="Label X" />
        <DropDown placeholder="목록을 눌러 선택하세요" style={dropdownStyle}>
          <DropDownOption text="Text" value="Text" />
        </DropDown>
      </Card>
      <Space height={40} />
      <Text color="sub" typo="body1">
        텍스트 필드와 함께 사용 가능
      </Text>
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-list-combination-2"
          height={907}
          src="/component/dropdown/dropdown-guide-7.svg"
          width={161}
        />
      </Card>
    </>
  );
};

const containerStyle = css({
  display: "flex",
  justifyContent: "center",
});

const dropdownStyle: CSSProperties = {
  width: "360px",
};
