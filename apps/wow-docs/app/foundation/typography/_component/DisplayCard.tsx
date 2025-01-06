import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const DisplayCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "48px 77px" }}>
      <Flex flexDirection="column" gap="md">
        <Text typo="display1">Display1 : SUIT v1_Bold, 40px, 130%, -1%</Text>
        <Text typo="display2">Display2 : SUIT v1_Bold, 32px, 130%, -1%</Text>
      </Flex>
    </Card>
  );
};

export default DisplayCard;
