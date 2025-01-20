import Card from "@components/Card";
import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { widthDropdownItems } from "@constants/store";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Image from "next/image";
import type { CSSProperties } from "react";
import Chip from "wowds-ui/Chip";
import Divider from "wowds-ui/Divider";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

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
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-list-combination-1"
          height={364}
          src="/component/dropdown/dropdown-guide-1.svg"
          width={907}
        />
        <Space height={20} />
        <Image
          alt="dropdown-guide-list-combination-2"
          height={364}
          src="/component/dropdown/dropdown-guide-2.svg"
          width={907}
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
      <Text color="sub" typo="body1">
        그 외에는 함께 사용되는 요소의 너비에 맞추기
      </Text>
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-list-2"
          height={230}
          src="/component/dropdown/dropdown-guide-5.svg"
          width={907}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Usuage
      </Text>
      <Space height={40} />
      <Title main="L Size" sub="Label 텍스트 활용" variant="component" />
      <Space height={20} />
      <Card className={containerStyle}>
        <Flex alignItems="center" gap="37px">
          <Chip label="Label 0" />
          <DropDown
            label="Label"
            placeholder="목록을 눌러 선택하세요"
            style={dropdownStyle}
          >
            <DropDownOption text="Text" value="Text" />
          </DropDown>
        </Flex>
        <Space height={40} />
        <Flex gap="37px">
          <Chip label="Label X" />
          <DropDown placeholder="목록을 눌러 선택하세요" style={dropdownStyle}>
            <DropDownOption text="Text" value="Text" />
          </DropDown>
        </Flex>
      </Card>
      <Space height={40} />
      <Text color="sub" typo="body1">
        텍스트 필드와 함께 사용 가능
      </Text>
      <Space height={20} />
      <Card className={containerStyle}>
        <Image
          alt="dropdown-guide-usuage-textfield"
          height={161}
          src="/component/dropdown/dropdown-guide-6.svg"
          width={907}
        />
      </Card>
    </>
  );
};

const containerStyle = css({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const dropdownStyle: CSSProperties = {
  width: "360px",
};
