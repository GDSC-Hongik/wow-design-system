import { fireEvent, render, waitFor } from "@testing-library/react";
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

    fireEvent.change(searchBar, { target: { value: "12345678910" } });

    await waitFor(() => {
      expect(searchBar.value).toHaveLength(5);
    });
  });

  it("should apply typing style while typing", async () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    fireEvent.change(searchBar, { target: { value: "12345" } });

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

    fireEvent.change(searchBar, { target: { value: "12345" } });
    fireEvent.blur(searchBar);

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

  it("should fire onFocus event when focused", () => {
    const handleFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" onFocus={handleFocus} />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    fireEvent.focus(searchBar);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("should fire onBlur event when focus is lost", () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="검색어를 입력하세요" onBlur={handleBlur} />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    fireEvent.click(searchBar);
    fireEvent.blur(searchBar);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
  it("should have appropriate aria attributes", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        aria-describedby="description-id"
        aria-label="searchbar"
        placeholder="검색어를 입력하세요"
      />
    );
    const searchBar = getByPlaceholderText("검색어를 입력하세요");

    expect(searchBar).toHaveAttribute("aria-describedby", "description-id");
    expect(searchBar).toHaveAttribute("aria-label", "searchbar");
  });
});

describe("external control and events", () => {
  it("should fire external onChange event", () => {
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

    fireEvent.change(searchBar, { target: { value: "updated value" } });

    expect(searchBar).toHaveValue("updated value");
  });
});
