import type { Item } from "@components/ImageCards";

export const gridItems: Item[] = [
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

export const breakpointItems: Item[] = [
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
