import type { Item } from "@components/ImageCards";

export const radiusDescription: Item = {
  main: "",
  imageSrc: "/spacing/spacing_radius.svg",
  imageWidth: 755,
  imageHeight: 316,
  imageAlt: "컴포넌트에 적용되는 둥근 모서리를 나타내는 이미지",
};

export const paddingDescription: Item = {
  main: "Padding",
  sub: (
    <>
      4의 배수를 규칙으로 적용해요. 지정해둔 토큰은 컴포넌트에 적용되는 값으로,
      <br />
      이외에 레이아웃에 더 큰 4의 배수 값을 사용할 수 있어요.
    </>
  ),
  imageSrc: "/spacing/spacing_padding.svg",
  imageWidth: 360,
  imageHeight: 333,
  imageAlt: "레이아웃에 적용되는 패딩을 나타내는 이미지",
};

export const strokeDescription: Item = {
  main: "Stroke",
  imageSrc: "/spacing/spacing_stroke.svg",
  imageWidth: 541,
  imageHeight: 316,
  imageAlt:
    "컴포넌트의 테두리 또는 화살표, 구분선 등 선에 적용되는 두께를 나타내는 이미지",
};
