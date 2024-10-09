import type { RenderResult } from "@testing-library/react";
import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import type { TabsProps } from "@/components/Tabs";
import Tabs from "@/components/Tabs";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsItem from "@/components/Tabs/TabsItem";
import TabsList from "@/components/Tabs/TabsList";

describe("Tabs component", () => {
  const uncontrolledTabs = (props: Partial<TabsProps> = {}): RenderResult => {
    return render(
      <Tabs defaultValue="tab1" {...props}>
        <TabsList>
          <TabsItem value="tab1">Tab 1</TabsItem>
          <TabsItem value="tab2">Tab 2</TabsItem>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>
    );
  };

  const controlledTabs = (props: Partial<TabsProps> = {}): RenderResult => {
    return render(
      <Tabs {...props}>
        <TabsList>
          <TabsItem value="tab1">Tab 1</TabsItem>
          <TabsItem value="tab2">Tab 2</TabsItem>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>
    );
  };
  test("renders correctly with default value", async () => {
    const { getByText } = uncontrolledTabs();
    expect(getByText("Tab 1 Content")).toBeVisible();
  });

  test("switches content when clicking on tab triggers", async () => {
    const { getByText } = uncontrolledTabs();
    await userEvent.click(getByText("Tab 2"));
    await waitFor(() => {
      expect(getByText("Tab 2 Content")).toBeVisible();
    });
  });

  test("calls onChange when the tab is changed", async () => {
    const handleChange = jest.fn();
    const { getByText } = controlledTabs({
      value: "tab1",
      onChange: handleChange,
    });
    await userEvent.click(getByText("Tab 2"));
    expect(handleChange).toHaveBeenCalledWith("tab2");
  });

  test("can navigate between tabs using keyboard (ArrowRight)", async () => {
    const { getByText } = uncontrolledTabs();
    const tab1 = getByText("Tab 1");
    const tab2 = getByText("Tab 2");

    tab1.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(tab2).toHaveFocus();

    await waitFor(() => {
      expect(getByText("Tab 2 Content")).toBeVisible();
    });
  });

  test("can navigate between tabs using keyboard (ArrowLeft)", async () => {
    const { getByText } = uncontrolledTabs();
    const tab1 = getByText("Tab 1");
    const tab2 = getByText("Tab 2");

    tab1.focus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(tab2).toHaveFocus();

    await waitFor(() => {
      expect(getByText("Tab 2 Content")).toBeVisible();
    });
  });
});
