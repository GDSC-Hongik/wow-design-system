import Text from "@components/Text";
import type { FlexProps } from "@styled-system/jsx";
import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";

interface TitleProps extends FlexProps {
  variant: "header" | "component";
  main: string;
  sub: ReactNode;
}

const Title = ({ variant, main, sub, ...rest }: TitleProps) => {
  const isHeader = variant === "header";
  return (
    <Flex
      display="flex"
      flexDirection="column"
      gap={isHeader ? "sm" : "xxs"}
      {...rest}
    >
      <Text
        as={isHeader ? "h1" : "h3"}
        typo={isHeader ? "displayWebPage" : "headingWebPage"}
      >
        {main}
      </Text>
      <Text color="sub" typo={isHeader ? "body0" : "body1"}>
        {sub}
      </Text>
    </Flex>
  );
};

export default Title;
