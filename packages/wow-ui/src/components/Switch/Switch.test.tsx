import { render, type RenderResult, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import Switch from "@/components/Switch";

describe("toggle", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch text="Text" />);
  });

  it("should render with attributes aria-pressed to be false, data-disabled to be false, aria-label to be switch-inactivated by default", () => {
    const switchComponent = rendered.getByRole("button");

    expect(switchComponent).toHaveAttribute("aria-pressed", "false");
    expect(switchComponent).toHaveAttribute("data-disabled", "false");
    expect(switchComponent).toHaveAttribute("aria-label", "switch-inactivated");
  });

  it("should render text", () => {
    expect(rendered.getByText("Text")).toBeInTheDocument();
  });

  it("should toggle state when onClick event is fired", async () => {
    const switchComponent = rendered.getByRole("button");
    const onClickHandler = jest.fn();
    switchComponent.onclick = onClickHandler;

    fireEvent.click(switchComponent);

    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-pressed", "true");
      expect(switchComponent).toHaveAttribute("data-disabled", "false");
      expect(switchComponent).toHaveAttribute("aria-label", "switch-activated");
    });
  });

  it("should toggle state when Enter key is pressed", async () => {
    const switchComponent = rendered.getByRole("button");

    fireEvent.type(switchComponent, "{enter}");

    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-pressed", "true");
      expect(switchComponent).toHaveAttribute("data-disabled", "false");
      expect(switchComponent).toHaveAttribute("aria-label", "switch-activated");
    });
  });

  it("should toggle state when Space key is pressed", async () => {
    const switchComponent = rendered.getByRole("button");

    fireEvent.type(switchComponent, "{space}");

    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-pressed", "true");
      expect(switchComponent).toHaveAttribute("data-disabled", "false");
      expect(switchComponent).toHaveAttribute("aria-label", "switch-activated");
    });
  });
});

describe("when defaultChecked is true", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch defaultChecked />);
  });

  it("should render with attributes aria-pressed to be true, data-disabled to be false, aria-label to be switch-activated", () => {
    const switchComponent = rendered.getByRole("button");

    expect(switchComponent).toHaveAttribute("aria-pressed", "true");
    expect(switchComponent).toHaveAttribute("data-disabled", "false");
    expect(switchComponent).toHaveAttribute("aria-label", "switch-activated");
  });
});

describe("disabled", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch isDisabled />);
  });

  it("should render with attributes data-disabled to be true", () => {
    const switchComponent = rendered.getByRole("button");

    expect(switchComponent).toHaveAttribute("data-disabled", "true");
  });

  it("should not fire onClick", () => {
    const switchComponent = rendered.getByRole("button");
    const onClickHandler = jest.fn();
    switchComponent.onclick = onClickHandler;

    fireEvent.click(switchComponent);

    expect(onClickHandler).not.toHaveBeenCalled();
  });

  it("should not allow focusing", () => {
    const switchComponent = rendered.getByRole("button");
    fireEvent.click(switchComponent);

    expect(switchComponent).not.toHaveFocus();
  });

  it("should not toggle state when fire keyboard event on Enter key", async () => {
    const switchComponent = rendered.getByRole("button");

    fireEvent.type(switchComponent, "{enter}");

    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-pressed", "false");
      expect(switchComponent).toHaveAttribute("data-disabled", "true");
      expect(switchComponent).toHaveAttribute(
        "aria-label",
        "switch-inactivated"
      );
    });
  });

  it("should not fire keyboard event on Space key", async () => {
    const switchComponent = rendered.getByRole("button");

    fireEvent.type(switchComponent, "{space}");

    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-pressed", "false");
      expect(switchComponent).toHaveAttribute("data-disabled", "true");
      expect(switchComponent).toHaveAttribute(
        "aria-label",
        "switch-inactivated"
      );
    });
  });
});
