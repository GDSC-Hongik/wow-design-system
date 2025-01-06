import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const BodyCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "48px 77px" }}>
      <Flex flexDirection="column" gap="xl">
        <Text typo="body0">Body0 : SUIT v1_Medium, 18px, 160%, -1%</Text>
        <Text typo="body1">Body1 : SUIT v1_Medium, 16px, 160%, -1%</Text>
        <Text typo="body2">Body2 : SUIT v1_Medium, 14px, 160%, -1%</Text>
        <Text typo="body3">Body3 : SUIT v1_Medium, 12px, 140%, 0%</Text>
      </Flex>
    </Card>
  );
};

export default BodyCard;
