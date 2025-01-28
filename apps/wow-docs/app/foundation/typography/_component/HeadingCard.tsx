import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const HeadingCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "48px 77px" }}>
      <Flex flexDirection="column" gap="xl">
        <Text typo="h1">Heading1 : SUIT v1_Semibold, 24px, 130%, -1%</Text>
        <Text typo="h2">Heading2 : SUIT v1_Semibold, 18px, 130%, -1%</Text>
        <Text typo="h3">Heading3 : SUIT v1_Semibold, 16px, 130%, -1%</Text>
      </Flex>
    </Card>
  );
};

export default HeadingCard;
