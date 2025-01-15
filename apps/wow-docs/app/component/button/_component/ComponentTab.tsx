import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex, Grid } from "@styled-system/jsx";
import Button from "wowds-ui/Button";

type ButtonProps = {
  key: number;
  variant?: "outline" | "solid" | "sub";
  disabled?: boolean;
  "data-hover"?: boolean;
  "data-active"?: boolean;
};

const largeButtons: ButtonProps[] = [
  { key: 1 },
  { key: 2, variant: "outline" },
  { key: 3, disabled: true },
  { key: 4, variant: "outline", disabled: true },
  { key: 5, "data-hover": true },
  { key: 6, variant: "outline", "data-hover": true },
  { key: 7, "data-active": true },
  { key: 8, variant: "outline", "data-active": true },
];

const smallButtons: ButtonProps[] = [
  { key: 1 },
  { key: 2, disabled: true },
  { key: 3, "data-hover": true },
  { key: 4, "data-active": true },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />

      <Text as="h3" typo="headingWebPage">
        L size
      </Text>
      <Space height={20} />
      <Card isBackground>
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          justifyItems="center"
          maxWidth={328 * 2}
          width="100%"
        >
          <Text color="sub" typo="body1">
            Solid
          </Text>
          <Text color="sub" typo="body1">
            Outline
          </Text>
          {largeButtons.map(({ key, ...props }) => (
            <Button key={key} {...props}>
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
            {smallButtons.map(({ key, ...props }) => (
              <Button key={key} size="sm" variant="outline" {...props}>
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
            {smallButtons.map(({ key, ...props }) => (
              <Button key={key} size="sm" variant="solid" {...props}>
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
            {smallButtons.map(({ key, ...props }) => (
              <Button key={key} size="sm" variant="sub" {...props}>
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
