import { fireEvent, render, waitFor } from "@testing-library/react";
import { useState } from "react";

import TextField from "@/components/TextField";

describe("TextField component", () => {
  it("should render label and placeholder", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <TextField label="Label" placeholder="Placeholder" />
    );
    const labelText = getByLabelText("Label");
    const placeholderText = getByPlaceholderText("Placeholder");

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
  });

  it("should render with default value", () => {
    const { getByLabelText } = render(
      <TextField defaultValue="textField" label="Label" />
    );
    const textField = getByLabelText("Label");

    expect(textField).toHaveValue("textField");
  });

  it("should render helperText", () => {
    const { getByText } = render(
      <TextField helperText="HelperText" label="Label" />
    );
    const helperText = getByText("HelperText");

    expect(helperText).toBeInTheDocument();
  });

  it("should handle max length correctly", async () => {
    const { getByLabelText } = render(
      <TextField label="Label" maxLength={5} />
    );
    const textField = getByLabelText("Label") as HTMLTextAreaElement;

    fireEvent.change(textField, { target: { value: "12345678910" } });

    await waitFor(() => {
      expect(textField.value).toHaveLength(5);
    });
  });

  it("should apply typing style while typing", async () => {
    const { getByLabelText, getByText } = render(<TextField label="Label" />);
    const textField = getByLabelText("Label");
    const label = getByText("Label");

    fireEvent.change(textField, { target: { value: "12345" } });

    await waitFor(() => {
      expect(label).toHaveStyle("color: textBlack");
      expect(textField).toHaveStyle("borderColor: primary");
      expect(textField).toHaveStyle("color: textBlack");
    });
  });

  it("should apply typed style after typing", async () => {
    const { getByLabelText, getByText } = render(<TextField label="Label" />);
    const textField = getByLabelText("Label");
    const label = getByText("Label");

    fireEvent.change(textField, { target: { value: "12345" } });
    fireEvent.blur(textField);

    await waitFor(() => {
      expect(label).toHaveStyle("color: textBlack");
      expect(textField).toHaveStyle("borderColor: sub");
      expect(textField).toHaveStyle("color: textBlack");
    });
  });

  it("should apply success style if success is true", () => {
    const { getByLabelText, getByText } = render(
      <TextField success label="Label" />
    );
    const textField = getByLabelText("Label");
    const label = getByText("Label");

    expect(label).toHaveStyle("color: textBlack");
    expect(textField).toHaveStyle("borderColor: success");
    expect(textField).toHaveStyle("color: textBlack");
  });

  it("should apply error style if error is true", () => {
    const { getByLabelText, getByText } = render(
      <TextField error label="Label" />
    );
    const textField = getByLabelText("Label");
    const label = getByText("Label");

    expect(label).toHaveStyle("color: textBlack");
    expect(textField).toHaveStyle("borderColor: error");
    expect(textField).toHaveStyle("color: textBlack");
  });

  it("should display error message with proper aria-describedBy", () => {
    const { getByLabelText } = render(
      <TextField error helperText="Error message" label="Label" />
    );
    const textField = getByLabelText("Label");

    expect(textField).toHaveAttribute(
      "aria-describedby",
      expect.stringContaining("error-message")
    );
  });

  it("should fire onFocus event when focused", () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <TextField label="Label" onFocus={handleFocus} />
    );
    const textField = getByLabelText("Label");

    fireEvent.focus(textField);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("should fire onBlur event when focus is lost", () => {
    const handleBlur = jest.fn();
    const { getByLabelText } = render(
      <TextField label="Label" onBlur={handleBlur} />
    );
    const textField = getByLabelText("Label");

    fireEvent.click(textField);
    fireEvent.blur(textField);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});

describe("external control and events", () => {
  it("should fire external onChange event", () => {
    const Component = () => {
      const [value, setValue] = useState("initial value");
      const handleChange = (newValue: string) => setValue(newValue);

      return <TextField label="Label" value={value} onChange={handleChange} />;
    };
    const { getByLabelText } = render(<Component />);
    const textField = getByLabelText("Label");

    expect(textField).toHaveValue("initial value");

    fireEvent.change(textField, { target: { value: "updated value" } });

    expect(textField).toHaveValue("updated value");
  });
});
