import { render, type RenderResult, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import Toggle from "@/components/Toggle";

describe("toggle", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Toggle text="Text" />);
  });

  it("should render with attributes aria-pressed to be false, data-disabled to be false, aria-label to be toggle-inactivated by default", () => {
    const toggle = rendered.getByRole("button");

    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(toggle).toHaveAttribute("data-disabled", "false");
    expect(toggle).toHaveAttribute("aria-label", "toggle-inactivated");
  });

  it("should render text", () => {
    expect(rendered.getByText("Text")).toBeInTheDocument();
  });

  it("should toggle state when onClick event is fired", async () => {
    const toggle = rendered.getByRole("button");
    const onClickHandler = jest.fn();
    toggle.onclick = onClickHandler;

    fireEvent.click(toggle);

    await waitFor(() => {
      expect(toggle).toHaveAttribute("aria-pressed", "true");
      expect(toggle).toHaveAttribute("data-disabled", "false");
      expect(toggle).toHaveAttribute("aria-label", "toggle-activated");
    });
  });

  it("should toggle state when Enter key is pressed", async () => {
    const toggle = rendered.getByRole("button");

    fireEvent.type(toggle, "{enter}");

    await waitFor(() => {
      expect(toggle).toHaveAttribute("aria-pressed", "true");
      expect(toggle).toHaveAttribute("data-disabled", "false");
      expect(toggle).toHaveAttribute("aria-label", "toggle-activated");
    });
  });

  it("should toggle state when Space key is pressed", async () => {
    const toggle = rendered.getByRole("button");

    fireEvent.type(toggle, "{space}");

    await waitFor(() => {
      expect(toggle).toHaveAttribute("aria-pressed", "true");
      expect(toggle).toHaveAttribute("data-disabled", "false");
      expect(toggle).toHaveAttribute("aria-label", "toggle-activated");
    });
  });
});

describe("when initialIsActive is true", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Toggle initialIsActive />);
  });

  it("should render with attributes aria-pressed to be true, data-disabled to be false, aria-label to be toggle-activated", () => {
    const toggle = rendered.getByRole("button");

    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(toggle).toHaveAttribute("data-disabled", "false");
    expect(toggle).toHaveAttribute("aria-label", "toggle-activated");
  });
});

describe("disabled", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Toggle isDisabled />);
  });

  it("should render with attributes data-disabled to be true", () => {
    const toggle = rendered.getByRole("button");

    expect(toggle).toHaveAttribute("data-disabled", "true");
  });

  it("should not fire onClick", () => {
    const toggle = rendered.getByRole("button");
    const onClickHandler = jest.fn();
    toggle.onclick = onClickHandler;

    fireEvent.click(toggle);

    expect(onClickHandler).not.toHaveBeenCalled();
  });

  it("should not allow focusing", () => {
    const toggle = rendered.getByRole("button");
    fireEvent.click(toggle);

    expect(toggle).not.toHaveFocus();
  });

  it("should not toggle state when fire keyboard event on Enter key", async () => {
    const toggle = rendered.getByRole("button");

    fireEvent.type(toggle, "{enter}");

    await waitFor(() => {
      expect(toggle).toHaveAttribute("aria-pressed", "false");
      expect(toggle).toHaveAttribute("data-disabled", "true");
      expect(toggle).toHaveAttribute("aria-label", "toggle-inactivated");
    });
  });

  it("should not fire keyboard event on Space key", async () => {
    const toggle = rendered.getByRole("button");

    fireEvent.type(toggle, "{space}");

    await waitFor(() => {
      expect(toggle).toHaveAttribute("aria-pressed", "false");
      expect(toggle).toHaveAttribute("data-disabled", "true");
      expect(toggle).toHaveAttribute("aria-label", "toggle-inactivated");
    });
  });
});
