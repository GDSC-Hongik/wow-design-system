import { render, type RenderResult, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import Switch from "@/components/Switch";

describe("toggle", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch label="Label" value="switch" />);
  });

  it("should render with attributes checked to be false, aria-disabled to be false by default", () => {
    const switchComponent = rendered.getByRole("checkbox");

    expect(switchComponent).not.toBeChecked();
    expect(switchComponent).toHaveAttribute("aria-disabled", "false");
  });

  it("should render label", () => {
    expect(rendered.getByText("Label")).toBeInTheDocument();
  });

  it("should toggle state when onClick event is fired", async () => {
    const switchComponent = rendered.getByRole("checkbox");
    const onClickHandler = jest.fn();
    switchComponent.onclick = onClickHandler;

    fireEvent.click(switchComponent);

    await waitFor(() => {
      expect(switchComponent).toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "false");
    });
  });

  it("should toggle state when Enter key is pressed", async () => {
    const switchComponent = rendered.getByRole("checkbox");

    fireEvent.type(switchComponent, "{enter}");

    await waitFor(() => {
      expect(switchComponent).toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "false");
    });
  });

  it("should toggle state when Space key is pressed", async () => {
    const switchComponent = rendered.getByRole("checkbox");

    fireEvent.type(switchComponent, "{space}");

    await waitFor(() => {
      expect(switchComponent).toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "false");
    });
  });
});

describe("when defaultChecked is true", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch defaultChecked value="switch" />);
  });

  it("should render with attributes checked to be true, aria-disabled to be false", () => {
    const switchComponent = rendered.getByRole("checkbox");

    expect(switchComponent).toBeChecked();
    expect(switchComponent).toHaveAttribute("aria-disabled", "false");
  });
});

describe("disabled", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Switch disabled value="switch" />);
  });

  it("should render with attributes aria-disabled to be true", () => {
    const switchComponent = rendered.getByRole("checkbox");

    expect(switchComponent).toHaveAttribute("aria-disabled", "true");
  });

  it("should not fire onClick", () => {
    const switchComponent = rendered.getByRole("checkbox");
    const onClickHandler = jest.fn();
    switchComponent.onclick = onClickHandler;

    fireEvent.click(switchComponent);

    expect(onClickHandler).not.toHaveBeenCalled();
  });

  it("should not allow focusing", () => {
    const switchComponent = rendered.getByRole("checkbox");
    fireEvent.click(switchComponent);

    expect(switchComponent).not.toHaveFocus();
  });

  it("should not toggle state when fire keyboard event on Enter key", async () => {
    const switchComponent = rendered.getByRole("checkbox");

    fireEvent.type(switchComponent, "{enter}");

    await waitFor(() => {
      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "true");
    });
  });

  it("should not fire keyboard event on Space key", async () => {
    const switchComponent = rendered.getByRole("checkbox");

    fireEvent.type(switchComponent, "{space}");

    await waitFor(() => {
      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "true");
    });
  });
});

describe("external control and events", () => {
  let rendered: RenderResult;

  it("should fire external onClick event", async () => {
    rendered = render(<Switch value="switch" />);
    const switchComponent = rendered.getByRole("checkbox");
    const onClickHandler = jest.fn();
    switchComponent.onclick = onClickHandler;

    fireEvent.click(switchComponent);

    await waitFor(() => {
      expect(onClickHandler).toHaveBeenCalled();
    });
  });

  it("should fire external onKeyDown event", async () => {
    rendered = render(<Switch value="switch" />);
    const switchComponent = rendered.getByRole("checkbox");
    const onKeyDownHandler = jest.fn();
    switchComponent.onkeydown = onKeyDownHandler;

    fireEvent.type(switchComponent, "{enter}");

    await waitFor(() => {
      expect(onKeyDownHandler).toHaveBeenCalled();
    });
  });

  it("should toggle external checked state when onClick event fired", async () => {
    let checked = false;
    const handleChange = () => {
      checked = !checked;
    };
    const rendered = render(<Switch checked={checked} value="switch" />);
    const switchComponent = rendered.getByRole("checkbox");
    switchComponent.onchange = handleChange;

    fireEvent.click(switchComponent);

    await waitFor(() => {
      expect(switchComponent).toBeChecked();
      expect(switchComponent).toHaveAttribute("aria-disabled", "false");
    });
  });
});
