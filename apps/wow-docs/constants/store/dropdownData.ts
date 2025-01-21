import type { Item } from "@components/ImageCards";

export const widthDropdownItems: Item[] = [
  {
    main: "PC",
    sub: "최대 너비, 고정 너비는 그리드 기준 4칸",
    imageAlt: "dropdown-guide-pc",
    imageSrc: "/component/dropdown/dropdown-guide-3.svg",
    imageWidth: 907,
    imageHeight: 160,
  },
  {
    main: "Mobile",
    sub: "전체 그리드 혹은 박스 컴포넌트에 Fill로 너비 맞추기",
    imageAlt: "dropdown-guide-mobile",
    imageSrc: "/component/dropdown/dropdown-guide-7.svg",
    imageWidth: 390,
    imageHeight: 276,
  },
  {
    main: "List",
    sub: "상단 입력란의 너비와 맞추는 것이 기본",
    imageAlt: "dropdown-guide-list",
    imageSrc: "/component/dropdown/dropdown-guide-4.svg",
    imageWidth: 907,
    imageHeight: 282,
  },
];
