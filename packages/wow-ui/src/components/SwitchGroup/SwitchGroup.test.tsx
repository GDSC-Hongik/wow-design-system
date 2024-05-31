import type { RenderResult } from "@testing-library/react";
import { render, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import Switch from "@/components/Switch";
import SwitchGroup from "@/components/SwitchGroup";

describe("switch group", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <SwitchGroup>
        <Switch text="Switch 1" />
        <Switch isDisabled text="Switch 2" />
        <Switch text="Switch 3" />
      </SwitchGroup>
    );
  });

  it("should render switch components with its own state", () => {
    const switchComponents = rendered.getAllByRole("checkbox");

    expect(switchComponents[0]).toHaveAttribute("aria-checked", "false");
    expect(switchComponents[1]).toHaveAttribute("aria-disabled", "true");
    expect(switchComponents[2]).toHaveAttribute("aria-checked", "false");
  });
});

describe("with external value provided", () => {
  it("should render switch components with external value provided", () => {
    const rendered = render(
      <SwitchGroup value={[true, false, true]}>
        <Switch text="Switch 1" />
        <Switch text="Switch 2" />
        <Switch text="Switch 3" />
      </SwitchGroup>
    );
    const switchComponents = rendered.getAllByRole("checkbox");

    expect(switchComponents[0]).toHaveAttribute("aria-checked", "true");
    expect(switchComponents[1]).toHaveAttribute("aria-checked", "false");
    expect(switchComponents[2]).toHaveAttribute("aria-checked", "true");
  });

  it("should render switch components with default unchecked value provided", () => {
    const rendered = render(
      <SwitchGroup value={[]}>
        <Switch text="Switch 1" />
        <Switch text="Switch 2" />
        <Switch text="Switch 3" />
      </SwitchGroup>
    );
    const switchComponents = rendered.getAllByRole("checkbox");

    expect(switchComponents[0]).toHaveAttribute("aria-checked", "false");
    expect(switchComponents[1]).toHaveAttribute("aria-checked", "false");
    expect(switchComponents[2]).toHaveAttribute("aria-checked", "false");
  });

  it("should toggle state when onChange event fired", async () => {
    const checkedStates = [true, false, true];
    const handleChange = jest.fn((index: number) => {
      checkedStates[index] = !checkedStates[index];
    });
    const rendered = render(
      <SwitchGroup value={checkedStates} onChange={handleChange}>
        <Switch text="Switch 1" />
        <Switch text="Switch 2" />
        <Switch text="Switch 3" />
      </SwitchGroup>
    );
    const switchComponents = rendered.getAllByRole("checkbox");

    fireEvent.click(switchComponents[0]!);
    fireEvent.click(switchComponents[1]!);
    fireEvent.click(switchComponents[2]!);

    await waitFor(() => {
      expect(checkedStates[0]).toBe(false);
      expect(checkedStates[1]).toBe(true);
      expect(checkedStates[2]).toBe(false);
    });
  });

  it("should not toggle state when toggle is disabled", async () => {
    const checkedStates = [true, false, true];
    const handleChange = jest.fn((index: number) => {
      checkedStates[index] = !checkedStates[index];
    });
    const rendered = render(
      <SwitchGroup value={checkedStates} onChange={handleChange}>
        <Switch text="Switch 1" />
        <Switch isDisabled text="Switch 2" />
        <Switch text="Switch 3" />
      </SwitchGroup>
    );
    const switchComponents = rendered.getAllByRole("checkbox");

    fireEvent.click(switchComponents[0]!);
    fireEvent.click(switchComponents[1]!);
    fireEvent.click(switchComponents[2]!);

    await waitFor(() => {
      expect(checkedStates[0]).toBe(false);
      expect(checkedStates[1]).toBe(false);
      expect(checkedStates[2]).toBe(false);
    });
  });
});
