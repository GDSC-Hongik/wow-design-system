import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";

describe("DropDown Component", () => {
  const options = [
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ];

  const renderDropDown = (props = {}) =>
    render(
      <DropDown {...props}>
        {options.map((option) => (
          <DropDownOption
            key={option.value}
            text={option.text}
            value={option.value}
          />
        ))}
      </DropDown>
    );

  test("renders the DropDown component with placeholder", () => {
    renderDropDown({ placeholder: "Select an option" });
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  test("opens the dropdown when clicked", async () => {
    renderDropDown({ placeholder: "Select an option" });
    await userEvent.click(screen.getByText("Select an option"));
    await waitFor(() => {
      options.forEach((option) => {
        expect(screen.getByText(option.text)).toBeInTheDocument();
      });
    });
  });

  test("selects an option and closes the dropdown", async () => {
    const onChange = jest.fn();
    renderDropDown({ placeholder: "Select an option", onChange });

    await userEvent.click(screen.getByText("Select an option"));
    await userEvent.click(screen.getByText("Option 2"));

    expect(onChange).toHaveBeenCalledWith({
      selectedValue: "option2",
      selectedText: "Option 2",
    });
    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Option 3")).not.toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });
  });

  test("handles keyboard navigation and selection", async () => {
    const onChange = jest.fn();
    renderDropDown({ placeholder: "Select an option", onChange });

    await userEvent.click(screen.getByText("Select an option"));
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");

    expect(onChange).toHaveBeenCalledWith({
      selectedValue: "option2",
      selectedText: "Option 2",
    });
    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Option 3")).not.toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });
  });

  test("closes dropdown when clicking outside", async () => {
    renderDropDown({ placeholder: "Select an option" });

    await userEvent.click(screen.getByText("Select an option"));
    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    await userEvent.click(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });
  });
});
