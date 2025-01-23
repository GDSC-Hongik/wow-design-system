import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { css } from "@styled-system/css";

import TagsComponent from "@/component/tag/_components/TagsComponent";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Title main="Outline" variant="component" />
      <Space height={20} />
      <Card>
        <div className={tagContainerStyle}>
          <TagsComponent
            tagTexts={["Tag", "Tag", "Tag", "Tag"]}
            variant="outline"
          />
        </div>
      </Card>
      <Space height={40} />
      <Title main="Solid1" variant="component" />
      <Space height={20} />
      <Card>
        <div className={tagContainerStyle}>
          <TagsComponent tagTexts={["Tag", "Tag", "Tag"]} variant="solid1" />
        </div>
      </Card>
      <Space height={40} />
      <Title main="Solid2" variant="component" />
      <Space height={20} />
      <Card>
        <div className={tagContainerStyle}>
          <TagsComponent tagTexts={["Tag", "Tag", "Tag"]} variant="solid2" />
        </div>
      </Card>
    </>
  );
};

export default ComponentTab;

const tagContainerStyle = css({
  backgroundColor: "backgroundNormal",
  display: "flex",
  paddingY: "40px",
  width: "100%",
  justifyContent: "center",
});
