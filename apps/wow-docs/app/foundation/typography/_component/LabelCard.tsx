import Card from "@components/Card";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";

const LabelCard = () => {
  return (
    <Card style={{ justifyContent: "flex-start", padding: "48px 77px" }}>
      <Flex gap="xl">
        <Flex flexDirection="column" gap="md">
          <Text typo="label1">Label1 : SUIT v1_Semibold, 16px, 100%, -1%</Text>
          <Text typo="label1U">
            Label1_U : SUIT v1_Semibold, 16px, 100%, -1%
          </Text>
          <Text typo="label2">Label2 : SUIT v1_Semibold, 14px, 100%, -1%</Text>
          <Flex flexDirection="column" gap="sm">
            <Text typo="label2U">
              Label2_U : SUIT v1_Semibold, 14px, 100%, -1%
            </Text>
            <Text typo="label2U">링크 버튼 등에 활용해요.</Text>
          </Flex>
          <Flex flexDirection="column" gap="sm">
            <Text typo="label2U2">
              Label2_U2 : SUIT v1_Medium, 14px, 160%, -1%
            </Text>
            <Text typo="label2U2">링크 버튼 등에 활용해요.</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="md">
          <Text typo="label2Mono">
            Label2_U2 : SUIT v1_Medium, 14px, 160%, -1%
          </Text>
          <Text color="sub" typo="label2Mono">
            포인트 텍스트로 자유롭게 활용하되, 영문으로만 사용해요. <br />
            문장 단위로 사용하지 않아요.
          </Text>
          <Text typo="label3">Label3 : SUIT v1_Semibold, 12px, 100%, 0%</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default LabelCard;
