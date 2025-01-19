import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const PrimaryCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "74px 77px" }}>
      <Flex gap="xl" style={{ width: "100%" }}>
        <Flex flexDirection="column" gap="md">
          <Flex align="baseline" gap="md">
            <Text
              color="primary"
              style={{ fontSize: "42px" }}
              typo="display2WebPage"
            >
              GDSC Hongik
            </Text>
            <Text
              color="primary"
              style={{ fontSize: "12px" }}
              typo="display2WebPage"
            >
              Product Sans_Bold
            </Text>
          </Flex>
          <Flex align="baseline" gap="md">
            <Text color="primary" style={{ fontSize: "42px" }}>
              GDSC Hongik
            </Text>
            <Text color="primary" style={{ fontSize: "12px" }}>
              Product Sans_Regular
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="md">
          <Flex align="baseline" gap="md">
            <Text
              color="primary"
              style={{
                fontSize: "42px",
                fontWeight: "700",
              }}
            >
              지뎃시 홍익
            </Text>
            <Text
              color="primary"
              style={{ fontSize: "16.8px", fontWeight: "700" }}
            >
              SUIT_v1_Bold
            </Text>
          </Flex>
          <Flex align="baseline" gap="md" justifyContent="space-between">
            <Text
              color="primary"
              style={{ fontSize: "42px", fontWeight: "600" }}
            >
              지뎃시 홍익
            </Text>
            <Text
              color="primary"
              style={{ fontSize: "16.8px", fontWeight: "600" }}
            >
              SUIT_v1_Semibold
            </Text>
          </Flex>
          <Flex align="baseline" gap="md" justifyContent="space-between">
            <Text
              color="primary"
              style={{ fontSize: "42px", fontWeight: "500" }}
            >
              지뎃시 홍익
            </Text>
            <Text
              color="primary"
              style={{ fontSize: "16.8px", fontWeight: "500" }}
            >
              SUIT_v1_Medium
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default PrimaryCard;
