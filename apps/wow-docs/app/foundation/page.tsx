import Space from "@components/Space";
import Title from "@components/Text/Title";
import { css } from "@styled-system/css";
import { Flex, Grid } from "@styled-system/jsx";
import Image from "next/image";
import Link from "next/link";

const foundationItems = [
  {
    title: "Color",
    description:
      "컬러는 사용자가 브랜드 아이덴티티와 기능을 인지하는 것을 돕는 시각적 요소입니다.",
    imageAlt: "foundation-color",
    imageSrc: "/foundation/foundation-color.png",
    href: "/foundation/color",
  },
  {
    title: "Typography",
    description:
      "타이포그래피는 가독성과 명료성에 영향을 주며, 화면 내 요소들 간 위계를 만듭니다.",
    imageAlt: "foundation-typography",
    imageSrc: "/foundation/foundation-typography.png",
    href: "/foundation/typography",
  },
  {
    title: "Grid",
    description:
      "그리드는 페이지의 일관성과 시각적 질서를 유지하기 위해 사용합니다.",
    imageAlt: "foundation-grid",
    imageSrc: "/foundation/foundation-grid.png",
    href: "/foundation/grid",
  },
  {
    title: "Icon",
    description:
      "아이콘은 간결한 표현을 통해 쉽고 빠르게 정보를 전달하는 것을 목표로 합니다.",
    imageAlt: "foundation-icon",
    imageSrc: "/foundation/foundation-icon.png",
    href: "/foundation/icon",
  },
  {
    title: "Spacing",
    description:
      "스페이싱은 일관된 간격으로 요소를 배치해 일관된 UI를 만드는 것을 목표로 합니다.",
    imageAlt: "foundation-spacing",
    imageSrc: "/foundation/foundation-spacing.png",
    href: "/foundation/spacing",
  },
  {
    title: "Graphic",
    description:
      "그래픽 이미지를 통해 와우 디자인 시스템의 브랜드 아이덴티티를 일관되게 전달합니다.",
    imageAlt: "foundation-graphic",
    imageSrc: "/foundation/foundation-graphic.png",
    href: "/foundation/graphic",
  },
];

const FoundationPage = () => {
  return (
    <>
      <Title
        main="Foundation"
        sub="파운데이션은 가장 기초적인 디자인 요소로, 일관된 디자인을 위해 다음의 규칙에 맞게 사용합니다"
        variant="header"
      />
      <Space height={68} />
      <Grid gap="22px" gridTemplateColumns="repeat(2, 1fr)">
        {foundationItems.map((item) => (
          <Link className={containerStyle} href={item.href} key={item.imageAlt}>
            <Flex>
              <Title
                justifyContent="end"
                main={item.title}
                padding="20px"
                sub={item.description}
                variant="component"
              />

              <Image
                alt={item.imageAlt}
                height={200}
                src={item.imageSrc}
                width={200}
              />
            </Flex>
          </Link>
        ))}
      </Grid>
      <Space height={127} />
    </>
  );
};

export default FoundationPage;

const containerStyle = css({
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "outline",
});
