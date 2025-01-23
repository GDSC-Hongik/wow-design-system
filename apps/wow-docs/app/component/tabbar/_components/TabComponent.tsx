import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

interface TabComponentProps {
  tabCount?: number;
}
export const TabComponent = ({ tabCount = 5 }: TabComponentProps) => {
  const tabs = Array.from(
    { length: tabCount },
    (_, index) => `tab${index + 1}`
  );
  return (
    <Tabs
      defaultValue="tab1"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <TabsList>
        {tabs.map((tabValue, index) => (
          <TabsItem key={tabValue} value={tabValue}>
            {`Tab ${index + 1}`}
          </TabsItem>
        ))}
      </TabsList>
      {tabs.map((tabValue) => (
        <TabsContent key={tabValue} value={tabValue} />
      ))}
    </Tabs>
  );
};
