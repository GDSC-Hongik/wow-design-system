import Space from "@components/Space";
import Title from "@components/Text/Title";
import { foundationItems } from "@constants/data";
import { css } from "@styled-system/css";
import { Flex, Grid } from "@styled-system/jsx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation",
  description: "와우 디자인 시스템의 foundation 입니다.",
};

const FoundationPage = () => {
  return (
    <>
      <Title
        main="Foundation"
        sub="파운데이션은 가장 기초적인 디자인 요소로, 일관된 디자인을 위해 다음의 규칙에 맞게 사용합니다"
        variant="header"
      />
      <Space height={68} />
      <Grid gap="22px" gridTemplateColumns="repeat(2, 1fr)">
        {foundationItems.map((item) => (
          <Link className={containerStyle} href={item.href} key={item.imageAlt}>
            <Flex>
              <Title
                justifyContent="end"
                main={item.title}
                padding="20px"
                sub={item.description}
                variant="component"
              />

              <Image
                alt={item.imageAlt}
                height={200}
                src={item.imageSrc}
                width={200}
              />
            </Flex>
          </Link>
        ))}
      </Grid>
      <Space height={127} />
    </>
  );
};

export default FoundationPage;

const containerStyle = css({
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "outline",
});
