import { render, screen, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { useState } from "react";

import Checkbox from "@/components/Checkbox";
import MultiGroup from "@/components/MultiGroup";
import Switch from "@/components/Switch";

describe("multi group with checkbox", () => {
  it("should render checkbox components with children", () => {
    render(
      <MultiGroup variant="checkbox">
        <Checkbox label="checkbox1" value="checkbox1" />
        <Checkbox disabled label="checkbox2" value="checkbox2" />
        <Checkbox label="checkbox3" value="checkbox3" />
      </MultiGroup>
    );
    const checkbox1 = screen.getByText("checkbox1");
    const checkbox2 = screen.getByText("checkbox1");
    const checkbox3 = screen.getByText("checkbox1");

    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
    expect(checkbox3).toBeInTheDocument();
  });

  it("should render checkbox components with its own state", () => {
    const rendered = render(
      <MultiGroup variant="checkbox">
        <Checkbox label="checkbox1" value="checkbox1" />
        <Checkbox disabled label="checkbox2" value="checkbox2" />
        <Checkbox label="checkbox3" value="checkbox3" />
      </MultiGroup>
    );
    const checkboxes = rendered.getAllByRole("checkbox");

    expect(checkboxes[0]).toHaveAttribute("aria-disabled", "false");
    expect(checkboxes[1]).toHaveAttribute("aria-disabled", "true");
    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "false");

    expect(checkboxes[0]).toHaveAttribute("aria-checked", "false");
    expect(checkboxes[1]).toHaveAttribute("aria-checked", "false");
    expect(checkboxes[2]).toHaveAttribute("aria-checked", "false");
  });

  it("should render checkbox components with external value provided", async () => {
    const rendered = render(
      <MultiGroup checked={["checkbox2", "checkbox3"]} variant="checkbox">
        <Checkbox value="checkbox1" />
        <Checkbox value="checkbox2" />
        <Checkbox value="checkbox3" />
      </MultiGroup>
    );
    const checkboxes = rendered.getAllByRole("checkbox");

    expect(checkboxes[0]).toHaveAttribute("aria-checked", "false");
    expect(checkboxes[1]).toHaveAttribute("aria-checked", "true");
    expect(checkboxes[2]).toHaveAttribute("aria-checked", "true");
  });

  it("should render checkbox components with default value provided", () => {
    const rendered = render(
      <MultiGroup defaultValue={["checkbox1", "checkbox3"]} variant="checkbox">
        <Checkbox value="checkbox1" />
        <Checkbox value="checkbox2" />
        <Checkbox value="checkbox3" />
      </MultiGroup>
    );
    const checkboxes = rendered.getAllByRole("checkbox");

    expect(checkboxes[0]).toHaveAttribute("aria-checked", "true");
    expect(checkboxes[1]).toHaveAttribute("aria-checked", "false");
    expect(checkboxes[2]).toHaveAttribute("aria-checked", "true");
  });

  it("should toggle state when onChange event fired", async () => {
    const Component = () => {
      const [checked, setChecked] = useState(["checkbox3"]);
      const handleChange = (value: string) => {
        if (!checked.includes(value)) {
          setChecked((prev) => [...prev, value]);
        } else {
          setChecked((prev) => prev.filter((item) => item !== value));
        }
      };

      return (
        <MultiGroup
          checked={checked}
          variant="checkbox"
          onChange={handleChange}
        >
          <Checkbox value="checkbox1" />
          <Checkbox value="checkbox2" />
          <Checkbox value="checkbox3" />
        </MultiGroup>
      );
    };
    const rendered = render(<Component />);
    const checkboxes = rendered.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]!);
    fireEvent.click(checkboxes[1]!);
    fireEvent.click(checkboxes[2]!);

    await waitFor(() => {
      expect(checkboxes[0]).toHaveAttribute("aria-checked", "true");
      expect(checkboxes[1]).toHaveAttribute("aria-checked", "true");
      expect(checkboxes[2]).toHaveAttribute("aria-checked", "false");
    });
  });

  it("should not toggle state when toggle is disabled", async () => {
    const Component = () => {
      const [checked, setChecked] = useState(["checkbox3"]);
      const handleChange = (value: string) => {
        if (!checked.includes(value)) {
          setChecked((prev) => [...prev, value]);
        } else {
          setChecked((prev) => prev.filter((item) => item !== value));
        }
      };

      return (
        <MultiGroup
          disabled
          checked={checked}
          variant="checkbox"
          onChange={handleChange}
        >
          <Checkbox value="checkbox1" />
          <Checkbox value="checkbox2" />
          <Checkbox value="checkbox3" />
        </MultiGroup>
      );
    };
    const rendered = render(<Component />);
    const checkboxes = rendered.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]!);
    fireEvent.click(checkboxes[1]!);
    fireEvent.click(checkboxes[2]!);

    await waitFor(() => {
      expect(checkboxes[0]).toHaveAttribute("aria-disabled", "true");
      expect(checkboxes[1]).toHaveAttribute("aria-disabled", "true");
      expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true");

      expect(checkboxes[0]).toHaveAttribute("aria-checked", "false");
      expect(checkboxes[1]).toHaveAttribute("aria-checked", "false");
      expect(checkboxes[2]).toHaveAttribute("aria-checked", "true");
    });
  });
});

describe("multi group with switch", () => {
  it("should render switch components with children", () => {
    render(
      <MultiGroup variant="switch">
        <Switch label="switch1" value="switch1" />
        <Switch disabled label="switch2" value="switch2" />
        <Switch label="switch3" value="switch3" />
      </MultiGroup>
    );
    const switch1 = screen.getByText("switch1");
    const switch2 = screen.getByText("switch2");
    const switch3 = screen.getByText("switch3");

    expect(switch1).toBeInTheDocument();
    expect(switch2).toBeInTheDocument();
    expect(switch3).toBeInTheDocument();
  });

  it("should render switch components with its own state", () => {
    const rendered = render(
      <MultiGroup variant="switch">
        <Switch label="switch1" value="switch1" />
        <Switch disabled label="switch2" value="switch2" />
        <Switch label="switch3" value="switch3" />
      </MultiGroup>
    );
    const switches = rendered.getAllByRole("checkbox");

    expect(switches[0]).toHaveAttribute("aria-disabled", "false");
    expect(switches[1]).toHaveAttribute("aria-disabled", "true");
    expect(switches[2]).toHaveAttribute("aria-disabled", "false");

    expect(switches[0]).toHaveAttribute("aria-checked", "false");
    expect(switches[1]).toHaveAttribute("aria-checked", "false");
    expect(switches[2]).toHaveAttribute("aria-checked", "false");
  });

  it("should render switch components with external value provided", async () => {
    const rendered = render(
      <MultiGroup checked={["switch2", "switch3"]} variant="switch">
        <Switch value="switch1" />
        <Switch value="switch2" />
        <Switch value="switch3" />
      </MultiGroup>
    );
    const switches = rendered.getAllByRole("checkbox");

    expect(switches[0]).toHaveAttribute("aria-checked", "false");
    expect(switches[1]).toHaveAttribute("aria-checked", "true");
    expect(switches[2]).toHaveAttribute("aria-checked", "true");
  });

  it("should render switch components with default value provided", () => {
    const rendered = render(
      <MultiGroup defaultValue={["switch1", "switch3"]} variant="switch">
        <Switch value="switch1" />
        <Switch value="switch2" />
        <Switch value="switch3" />
      </MultiGroup>
    );
    const switches = rendered.getAllByRole("checkbox");

    expect(switches[0]).toHaveAttribute("aria-checked", "true");
    expect(switches[1]).toHaveAttribute("aria-checked", "false");
    expect(switches[2]).toHaveAttribute("aria-checked", "true");
  });

  it("should toggle state when onChange event fired", async () => {
    const Component = () => {
      const [checked, setChecked] = useState(["switch3"]);
      const handleChange = (value: string) => {
        if (!checked.includes(value)) {
          setChecked((prev) => [...prev, value]);
        } else {
          setChecked((prev) => prev.filter((item) => item !== value));
        }
      };

      return (
        <MultiGroup checked={checked} variant="switch" onChange={handleChange}>
          <Switch value="switch1" />
          <Switch value="switch2" />
          <Switch value="switch3" />
        </MultiGroup>
      );
    };
    const rendered = render(<Component />);
    const switches = rendered.getAllByRole("checkbox");

    fireEvent.click(switches[0]!);
    fireEvent.click(switches[1]!);
    fireEvent.click(switches[2]!);

    await waitFor(() => {
      expect(switches[0]).toHaveAttribute("aria-checked", "true");
      expect(switches[1]).toHaveAttribute("aria-checked", "true");
      expect(switches[2]).toHaveAttribute("aria-checked", "false");
    });
  });

  it("should not toggle state when toggle is disabled", async () => {
    const Component = () => {
      const [checked, setChecked] = useState(["switch3"]);
      const handleChange = (value: string) => {
        if (!checked.includes(value)) {
          setChecked((prev) => [...prev, value]);
        } else {
          setChecked((prev) => prev.filter((item) => item !== value));
        }
      };

      return (
        <MultiGroup
          disabled
          checked={checked}
          variant="switch"
          onChange={handleChange}
        >
          <Switch value="switch1" />
          <Switch value="switch2" />
          <Switch value="switch3" />
        </MultiGroup>
      );
    };
    const rendered = render(<Component />);
    const switches = rendered.getAllByRole("checkbox");

    fireEvent.click(switches[0]!);
    fireEvent.click(switches[1]!);
    fireEvent.click(switches[2]!);

    await waitFor(() => {
      expect(switches[0]).toHaveAttribute("aria-disabled", "true");
      expect(switches[1]).toHaveAttribute("aria-disabled", "true");
      expect(switches[2]).toHaveAttribute("aria-disabled", "true");

      expect(switches[0]).toHaveAttribute("aria-checked", "false");
      expect(switches[1]).toHaveAttribute("aria-checked", "false");
      expect(switches[2]).toHaveAttribute("aria-checked", "true");
    });
  });
});
