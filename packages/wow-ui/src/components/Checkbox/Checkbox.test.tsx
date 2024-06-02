import type { RenderResult } from "@testing-library/react";
import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import type { CheckboxProps } from "./index";
import Checkbox from "./index";

describe("Checkbox component", () => {
  const renderCheckbox = (props: Partial<CheckboxProps> = {}): RenderResult => {
    return render(<Checkbox {...props}>Text</Checkbox>);
  };

  test("toggles checked state when clicked", async () => {
    const { getByLabelText } = renderCheckbox();
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    await waitFor(() => {
      expect(checkbox).toHaveAttribute("aria-checked", "true");
      expect(checkbox).toHaveAttribute("aria-disabled", "false");
    });

    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);

    await waitFor(() => {
      expect(checkbox).toHaveAttribute("aria-checked", "false");
      expect(checkbox).toHaveAttribute("aria-disabled", "false");
    });
  });

  test("calls onChange when state changes", async () => {
    const handleChange = jest.fn();
    const { getByLabelText } = renderCheckbox({ onChange: handleChange });
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test("does not toggle when disabled", async () => {
    const { getByLabelText } = renderCheckbox({ disabled: true });
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test("calls onMouseEnter and onMouseLeave", async () => {
    const handleMouseEnter = jest.fn();
    const handleMouseLeave = jest.fn();
    const { getByLabelText } = renderCheckbox({
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    });
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    await userEvent.hover(checkbox);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);

    await userEvent.unhover(checkbox);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  test("toggles checked state with keyboard Enter", async () => {
    const { getByLabelText } = renderCheckbox({ checked: true });
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    checkbox.focus();
    await userEvent.keyboard("{Enter}");
    expect(checkbox.checked).toBe(false);

    await waitFor(() => {
      expect(checkbox).toHaveAttribute("aria-checked", "false");
      expect(checkbox).toHaveAttribute("aria-disabled", "false");
    });
  });

  test("toggles checked state with keyboard Space", async () => {
    const { getByLabelText } = renderCheckbox({ checked: true });
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    checkbox.focus();
    await userEvent.keyboard(" ");
    expect(checkbox.checked).toBe(false);

    await waitFor(() => {
      expect(checkbox).toHaveAttribute("aria-checked", "false");
      expect(checkbox).toHaveAttribute("aria-disabled", "false");
    });
  });

  test("applies custom styles", () => {
    const customStyle = { color: "red !important" };
    const { getByLabelText } = renderCheckbox({ style: customStyle });
    const label = getByLabelText("checkbox").parentElement as HTMLElement;

    expect(label).toHaveStyle(customStyle);
  });
});
