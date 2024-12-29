import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import Image from "next/image";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

export const metadata: Metadata = {
  title: "Grid",
  description: "와우 디자인 시스템의 Grid 입니다.",
};

type Item = {
  main: string;
  sub: string;
  imageAlt: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

const gridItems: Item[] = [
  {
    main: "Basic Grid - PC",
    sub: "데스크탑 환경에서 사용되는 그리드예요. 가운데 영역에 고정하여 배치해요.",
    imageAlt: "grid-1",
    imageSrc: "/grid/grid-1.png",
    imageWidth: 900,
    imageHeight: 280,
  },
  {
    main: "Admin Grid - PC",
    sub: "좌측에 사이드바 영역을 250px로 배치하고, 우측 남은 영역에 기본 PC 그리드를 동일하게 적용해요.",
    imageAlt: "grid-2",
    imageSrc: "/grid/grid-2.png",
    imageWidth: 900,
    imageHeight: 280,
  },
  {
    main: "Basic Grid - Mobile",
    sub: "4분할 반응형 그리드로, Margin과 Gutter값만 고정해요.",
    imageAlt: "grid-3",
    imageSrc: "/grid/grid-3.png",
    imageWidth: 300,
    imageHeight: 308,
  },
];

const breakpointItems: Item[] = [
  {
    main: "XS",
    sub: "최소 규격은 360px, 최대 규격은 599px로, 주로 모바일 환경에 대응해요.",
    imageAlt: "breakpoint-1",
    imageSrc: "/grid/breakpoint-1.png",
    imageWidth: 695,
    imageHeight: 280,
  },
  {
    main: "S",
    sub: "최소 규격은 600px, 최대 규격은 899px로, 주로 태블릿 세로 규격에 대응해요.",
    imageAlt: "breakpoint-2",
    imageSrc: "/grid/breakpoint-2.png",
    imageWidth: 630,
    imageHeight: 444,
  },
  {
    main: "M",
    sub: "최소 규격은 900px, 최대 규격은 1279px로, 주로 태블릿 가로 규격에 대응해요.",
    imageAlt: "breakpoint-3",
    imageSrc: "/grid/breakpoint-3.png",
    imageWidth: 895,
    imageHeight: 444,
  },
  {
    main: "L",
    sub: "최소 규격은 가로 1280px, 그 이상의 모든 해상도에 적용되는 레이아웃으로, 데스크탑 환경에 대응해요.",
    imageAlt: "breakpoint-4",
    imageSrc: "/grid/breakpoint-4.png",
    imageWidth: 895,
    imageHeight: 210,
  },
];

const GridPage = () => {
  return (
    <>
      <Title
        main="Grid"
        sub="그리드는 페이지의 일관성과 시각적 질서를 유지하기 위해 사용합니다."
        variant="header"
      />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Layout Grid
      </Text>
      <Space height={40} />
      {gridItems.map(
        ({ main, sub, imageAlt, imageSrc, imageWidth, imageHeight, fill }) => (
          <>
            <Title main={main} sub={sub} variant="component" />
            <Space height={20} />
            <Card>
              <Image
                alt={imageAlt}
                height={imageHeight}
                src={imageSrc}
                width={imageWidth}
              />
            </Card>
            <Space height={40} />
          </>
        )
      )}
      <Divider />
      <Space height={40} />
      <Text as="h2" typo="display2WebPage">
        Breakpoint
      </Text>
      <Space height={40} />
      {breakpointItems.map(
        ({ main, sub, imageAlt, imageSrc, imageWidth, imageHeight, fill }) => (
          <>
            <Title main={main} sub={sub} variant="component" />
            <Space height={20} />
            <Card>
              <Image
                alt={imageAlt}
                height={imageHeight}
                src={imageSrc}
                width={imageWidth}
              />
            </Card>
            <Space height={40} />
          </>
        )
      )}
    </>
  );
};

export default GridPage;
