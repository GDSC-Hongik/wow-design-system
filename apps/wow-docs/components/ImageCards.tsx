import Card from "@components/Card";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

export type Item = {
  main: string;
  sub?: ReactNode;
  imageAlt: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  cardStyle?: CSSProperties;
};

interface ImageCardProps {
  items: Item[];
}

const ImageCards = ({ items }: ImageCardProps) => {
  return items.map(
    ({ main, sub, imageAlt, imageSrc, imageWidth, imageHeight, cardStyle }) => (
      <Fragment key={imageSrc}>
        <Title main={main} sub={sub} variant="component" />
        <Space height={20} />
        <Card style={cardStyle}>
          <Image
            alt={imageAlt}
            height={imageHeight}
            src={imageSrc}
            width={imageWidth}
          />
        </Card>
        <Space height={40} />
      </Fragment>
    )
  );
};

export default ImageCards;
