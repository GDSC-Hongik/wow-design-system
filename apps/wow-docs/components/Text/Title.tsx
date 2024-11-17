import { Flex } from "@styled-system/jsx";
import Text from "components/Text";

interface TitleProps {
  variant: "header" | "component";
  main: string;
  sub: string;
}

const Title = ({ variant, main, sub }: TitleProps) => {
  const isHeader = variant === "header";
  return (
    <Flex display="flex" flexDirection="column" gap={isHeader ? "sm" : "xxs"}>
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
