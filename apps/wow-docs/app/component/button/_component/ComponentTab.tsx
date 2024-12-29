import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import Button from "wowds-ui/Button";

const smallButtons = [
  {},
  { disabled: true },
  { "data-hover": true },
  { "data-active": true },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        L size
      </Text>
      <Space height={20} />
      <Card isBackground></Card>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        S size
      </Text>
      <Space height={20} />
      <Card
        isBackground
        contentStyle={{
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Flex alignItems="center" direction="column" gap={12}>
          <Text color="sub" typo="body1">
            Outline
          </Text>
          <Flex gap="1rem">
            {smallButtons.map((props) => (
              <Button size="sm" variant="outline" {...props}>
                Button2
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex alignItems="center" direction="column" gap={12}>
          <Text color="sub" typo="body1">
            Solid
          </Text>
          <Flex gap="1rem">
            {smallButtons.map((props) => (
              <Button size="sm" variant="solid" {...props}>
                Button2
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex alignItems="center" direction="column" gap={12}>
          <Text color="sub" typo="body1">
            Sub
          </Text>
          <Flex gap="1rem">
            {smallButtons.map((props) => (
              <Button size="sm" variant="sub" {...props}>
                Button2
              </Button>
            ))}
          </Flex>
        </Flex>
      </Card>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        Text
      </Text>
      <Space height={20} />
      <Card isBackground></Card>
      <Space height={40} />
    </>
  );
};

export default ComponentTab;
