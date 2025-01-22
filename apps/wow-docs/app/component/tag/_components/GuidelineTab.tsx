import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Image from "next/image";

import TagsComponent from "@/component/tag/_components/TagsComponent";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Guideline</Text>
      <Space height={40} />
      <Text color="sub" typo="body1">
        텍스트와 병렬시 간격 8px
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="tag-guide"
          className={guideImageStyle}
          height={110}
          src="/component/tag/tag-guide.svg"
          width={907}
        />
      </Card>
      <Space height={40} />
      <Title main="Outline" sub="난이도를 표시할 때 사용" variant="component" />
      <Space height={20} />
      <Card>
        <div className={tagContainerStyle}>
          <TagsComponent
            tagTexts={["기초", "초급", "중급", "고급"]}
            variant="outline"
          />
        </div>
      </Card>
      <Space height={40} />
      <Title
        main="Solid1"
        sub="스터디 종류를 표시할 때 사용"
        variant="component"
      />
      <Space height={20} />
      <Card>
        <div className={tagContainerStyle}>
          <TagsComponent
            tagTexts={["온라인 세션", "오프라인 세션", "과 스터디"]}
            variant="solid1"
          />
        </div>
      </Card>
      <Space height={40} />
      <Title
        main="Solid2"
        sub="출석, 과제제출 여부를 표시할 때 사용"
        variant="component"
      />
      <Space height={20} />
      <Card>
        <Flex
          alignItems="center"
          className={tagContainerStyle}
          flexDirection="column"
          gap="20px"
        >
          <Flex>
            <TagsComponent
              tagTexts={["출석 완료", "출석 전", "미출석"]}
              variant="solid2"
            />
          </Flex>
          <Flex>
            <TagsComponent
              tagTexts={["제출 완료", "과제휴강", "제출실패"]}
              variant="solid2"
            />
          </Flex>
          <Flex>
            <TagsComponent tagTexts={["진행중", "진행전"]} variant="solid2" />
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default GuidelineTab;

const tagContainerStyle = css({
  backgroundColor: "backgroundNormal",
  display: "flex",
  paddingY: "40px",
  width: "100%",
  justifyContent: "center",
});

const guideImageStyle = css({
  width: "100%",
});
