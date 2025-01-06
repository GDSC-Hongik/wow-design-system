import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const SecondaryCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "74px 77px" }}>
      <Flex align="baseline" gap="md">
        <Text
          color="primary"
          style={{ fontFamily: "Roboto-Mono", fontSize: "42px" }}
        >
          GDSC Hongik
        </Text>
        <Text
          color="primary"
          style={{ fontFamily: "Roboto-Mono", fontSize: "16px" }}
        >
          Roboto Mono_Regular
        </Text>
      </Flex>
    </Card>
  );
};

export default SecondaryCard;
