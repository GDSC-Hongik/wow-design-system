import Card from "@components/Card";
import { Flex } from "@styled-system/jsx";
import Divider from "wowds-ui/Divider";

const DividerCard = () => {
  return (
    <Card>
      <Flex direction="column" gap={40} paddingY={40} width="100%">
        <Divider />
        <Divider type="dark" />
      </Flex>
    </Card>
  );
};

export default DividerCard;
