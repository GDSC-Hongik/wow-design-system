import type { Item } from "@components/ImageCards";

export const pcItems: Item[] = [
  {
    main: "Fixed ver.",
    sub: "column 너비에 맞게 사용",
    imageAlt:
      "8-Columns의 경우 652px, 10-Columns의 경우 820px, 12-Columns의 경우 988px 너비 사용을 안내하는 이미지",
    imageSrc: "/component/divider/pc-1.svg",
    imageWidth: 912,
    imageHeight: 260,
  },
  {
    main: "Fluid ver.",
    sub: "Box 너비에 맞게 Fill로 설정하여 사용",
    imageAlt: "Box 너비에 맞게 사용을 안내하는 이미지",
    imageSrc: "/component/divider/pc-2.svg",
    imageWidth: 912,
    imageHeight: 160,
  },
];

export const mobileItems: Item[] = [
  {
    main: "Full ver.",
    sub: "Grid 너비에 맞게 사용",
    imageAlt: "Grid 너비에 맞게 사용을 안내하는 이미지",
    imageSrc: "/component/divider/mobile-1.svg",
    imageWidth: 912,
    imageHeight: 160,
  },
  {
    main: "Fluid ver.",
    sub: "Box 너비에 맞게 Fill로 설정하여 사용",
    imageAlt: "Box 너비에 맞게 사용을 안내하는 이미지",
    imageSrc: "/component/divider/mobile-2.svg",
    imageWidth: 912,
    imageHeight: 160,
  },
];
