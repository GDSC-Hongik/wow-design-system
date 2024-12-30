import Card from "@components/Card";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import Image from "next/image";

export type Item = {
  main: string;
  sub: string;
  imageAlt: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

interface ImageCardProps {
  items: Item[];
}

const ImageCards = ({ items }: ImageCardProps) => {
  return items.map(
    ({ main, sub, imageAlt, imageSrc, imageWidth, imageHeight }) => (
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
  );
};

export default ImageCards;
