import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";

import SearchBar from "@/components/SearchBar";

describe("SearchBar component", () => {
  it("should render placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" />
    );
    const placeholderText = getByPlaceholderText("검색어를 입력하세요");

    expect(placeholderText).toBeInTheDocument();
  });

  it("should render with default value", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        defaultValue="default value"
        placeholder="검색어를 입력하세요"
      />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveValue("default value");
  });

  it("should handle max length correctly", async () => {
    const { getByPlaceholderText } = render(
      <SearchBar maxLength={5} placeholder="검색어를 입력하세요" />
    );
    const searchBar = getByPlaceholderText(
      "검색어를 입력하세요"
    ) as HTMLInputElement;

    userEvent.type(searchBar, "12345678910");

    await waitFor(() => {
      expect(searchBar.value).toHaveLength(5);
    });
  });

  it("should apply typing style while typing", async () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    userEvent.type(searchBar, "12345");

    await waitFor(() => {
      expect(searchBar).toHaveStyle("borderColor: primary");
      expect(searchBar).toHaveStyle("color: textBlack");
    });
  });

  it("should apply typed style after typing", async () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    userEvent.type(searchBar, "12345");
    userEvent.tab();

    await waitFor(() => {
      expect(searchBar).toHaveStyle("borderColor: sub");
      expect(searchBar).toHaveStyle("color: textBlack");
    });
  });

  it("should apply disabled style when disabled", () => {
    const { getByPlaceholderText } = render(
      <SearchBar disabled={true} placeholder="검색어를 입력하세요" />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveStyle("backgroundColor: backgroundAlternative");
    expect(searchBar).toHaveStyle("borderColor: sub");
  });

  it("should apply typed style when they have default value.", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        defaultValue="default value"
        placeholder="검색어를 입력하세요"
      />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveStyle("borderColor: sub");
    expect(searchBar).toHaveStyle("color: textBlack");
  });

  it("should fire onFocus event when focused", async () => {
    const handleFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" onFocus={handleFocus} />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    userEvent.click(searchBar);

    await waitFor(() => {
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });
  });

  it("should fire onBlur event when focus is lost", async () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" onBlur={handleBlur} />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    await userEvent.click(searchBar);
    await userEvent.tab();

    await waitFor(() => {
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  it("should have appropriate aria attributes", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        placeholder="검색어를 입력하세요"
        inputProps={{
          "aria-describedby": "description-id",
          "aria-label": "searchbar",
        }}
      />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveAttribute("aria-describedby", "description-id");
    expect(searchBar).toHaveAttribute("aria-label", "searchbar");
  });
});

describe("external control and events", () => {
  it("should fire external onChange event", async () => {
    const Component = () => {
      const [value, setValue] = useState("initial value");
      const handleChange = (newValue: string) => setValue(newValue);

      return (
        <SearchBar
          placeholder="검색어를 입력하세요"
          value={value}
          onChange={handleChange}
        />
      );
    };
    const { getByPlaceholderText } = render(<Component />);
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveValue("initial value");

    userEvent.clear(searchBar);
    userEvent.type(searchBar, "updated value");

    await waitFor(() => {
      expect(searchBar).toHaveValue("updated value");
    });
  });
});
