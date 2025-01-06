import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const HeaderCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "48px 77px" }}>
      <Flex flexDirection="column" gap="xl">
        <Text typo="header1">Header1 : Product Sans, 20px, 130%, 0%</Text>
        <Text typo="header2">Header2 : Product Sans, 14px, 130%, 0%</Text>
      </Flex>
    </Card>
  );
};

export default HeaderCard;
