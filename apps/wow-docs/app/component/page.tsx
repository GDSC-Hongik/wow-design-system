import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/data";
import { css } from "@styled-system/css";
import { Grid } from "@styled-system/jsx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "와우 디자인 시스템의 컴포넌트 입니다.",
};

const ComponentPage = () => {
  return (
    <>
      <Title
        main="Component"
        sub="컴포넌트는 기능을 수행할 수 있는 최소 단위로,일관된 UI와 효율적인 개발을 위해 사용합니다."
        variant="header"
      />
      <Space height={68} />
      <Grid gap="22px" gridTemplateColumns="repeat(3, 1fr)">
        {componentItems.map((item) => (
          <Link className={containerStyle} href={item.href} key={item.imageAlt}>
            <Image
              alt={item.imageAlt}
              className={imageStyle}
              height={200}
              src={item.imageSrc}
              width={314}
            />
            <Title
              className={titleStyle}
              main={item.title}
              padding="20px"
              sub={item.description}
              variant="component"
            />
          </Link>
        ))}
      </Grid>
      <Space height={127} />
    </>
  );
};

export default ComponentPage;

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
});

const titleStyle = css({
  borderRadius: "0 0 8px 8px",
  border: "1px solid",
  borderColor: "outline",
  borderTop: "none",
  flex: "auto",
});

const imageStyle = css({
  width: "100%",
});
