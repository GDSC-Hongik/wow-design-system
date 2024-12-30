import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex, Grid } from "@styled-system/jsx";
import Button from "wowds-ui/Button";

type ButtonProps = {
  variant?: "outline" | "solid" | "sub";
  disabled?: boolean;
  "data-hover"?: boolean;
  "data-active"?: boolean;
};

const largeButtons: ButtonProps[] = [
  {},
  { variant: "outline" },
  { disabled: true },
  { variant: "outline", disabled: true },
  { "data-hover": true },
  { variant: "outline", "data-hover": true },
  { "data-active": true },
  { variant: "outline", "data-active": true },
];

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
      <Card isBackground>
        <Grid gridTemplateColumns="repeat(2, 1fr)" justifyItems="center">
          <Text color="sub" typo="body1">
            Solid
          </Text>
          <Text color="sub" typo="body1">
            Outline
          </Text>
          {largeButtons.map((props) => (
            <Button style={{ width: 328 }} {...props}>
              Button1
            </Button>
          ))}
        </Grid>
      </Card>
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
    </>
  );
};

export default ComponentTab;
