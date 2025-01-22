import type { Item } from "@components/ImageCards";

export const widthTabBarItems: Item[] = [
  {
    main: "PC",
    sub: "탭 위치 좌측으로 정렬, 텍스트 너비에 맞게 Hug로 설정",
    imageAlt: "tabbar-pc",
    imageSrc: "/component/tabbar/tabbar-pc.svg",
    imageWidth: 907,
    imageHeight: 148,
  },
  {
    main: "Mobile",
    sub: "최대 탭 갯수 5개로 제한, 그리드 너비에 맞게 Fill로 설정",
    imageAlt: "tabbar-mobile",
    imageSrc: "/component/tabbar/tabbar-mobile.svg",
    imageWidth: 390,
    imageHeight: 202,
  },
];
