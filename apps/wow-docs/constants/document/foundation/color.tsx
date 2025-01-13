import type { Item } from "@components/ImageCards";

export const semanticDescriptions: Item[] = [
  {
    main: "Background",
    imageSrc: "/color/color_background.svg",
    imageWidth: 416,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Background Color을 나타내는 이미지",
  },
];

export const componentDescriptions: Item[] = [
  {
    main: "Default",
    imageSrc: "/color/color_default.svg",
    imageWidth: 842,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Default Color를 나타내는 이미지",
  },
  {
    main: "Disabled",
    imageSrc: "/color/color_disabled.svg",
    imageWidth: 558,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Disabled Color를 나타내는 이미지",
  },
  {
    main: "Hover",
    imageSrc: "/color/color_hover.svg",
    imageWidth: 426,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Hover Color를 나타내는 이미지",
  },
  {
    main: "Pressed",
    imageSrc: "/color/color_pressed.svg",
    imageWidth: 426,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Pressed Color를 나타내는 이미지",
  },
  {
    main: "Status",
    imageSrc: "/color/color_status.svg",
    imageWidth: 274,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Status Color를 나타내는 이미지",
  },
  {
    main: "Shadow",
    imageSrc: "/color/color_shadow.svg",
    imageWidth: 426,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Shadow Color를 나타내는 이미지",
  },
  {
    main: "Gradient",
    sub: (
      <>
        그래픽 에셋 등에 활용되는 그라디언트예요. <br />
        편리한 사용을 위해 시스템화한 것으로, 그래픽 확장을 위해 자유롭게 추가할
        수 있어요.
      </>
    ),
    imageSrc: "/color/color_gradient.svg",
    imageWidth: 558,
    imageHeight: 315,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Gradient Color를 나타내는 이미지",
  },
  {
    main: "ETC.",
    sub: (
      <>
        UI 내 요소들에 사용되는 컬러로, State별로 나누어서 정리했어요. <br />
        정리된 토큰 외 컬러 사용시 변형 및 확장이 가능해요.
      </>
    ),
    imageSrc: "/color/color_etc.svg",
    imageWidth: 274,
    imageHeight: 132,
    cardStyle: { justifyContent: "flex-start" },
    imageAlt: "전체 컬러 팔레트 중 Etc Color를 나타내는 이미지",
  },
];

export const globalDescription: Item = {
  main: "Global",
  sub: (
    <>
      모든 컬러의 셰이드를 지정했어요. 그래픽 및 UI 요소를 확장할 시 이 안에서
      <br />
      참조하여 사용해요.
    </>
  ),
  imageSrc: "/color/color_global.svg",
  imageWidth: 909,
  imageHeight: 415,
  imageAlt: "모든 컬러의 셰이드. 그래픽 및 UI 요소의 컬러를 나타내는 이미지",
};
