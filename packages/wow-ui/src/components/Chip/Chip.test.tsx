import { render, type RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//테스트는 서술적이고, 읽기 쉽고, 이해하기 쉬운 테스트 코드를 만들어야 한다.
// 사용자의 행위를 기반으로 테스트 시나리오를 정의해야 한다.주어진 상황에 대해 결과를 검증해야.
//개발자가 이해하기 쉽도록 Given-When-Then 시나리오로 진행하자 (환경세팅, 상호작용, 결과)
import Chip from "@/components/Chip";

// 랜더링 시 문구가 잘 노출되는가?
// 사용자가 버튼을 클릭하며 상호작용 하였을 때, 변경된 문구가 노출되는가?
describe("Chip rendering Test", () => {
  let renderChip: RenderResult;
  beforeEach(() => {
    renderChip = render(<Chip label="Chip" />);
  });

  it("should render Chip", () => {
    const { getByText } = renderChip;
    expect(getByText("Chip")).toBeInTheDocument();
  });

  it("should render with attributes aria-checked to be false, aria-disabled to be false by default", () => {
    const switchComponent = renderChip.getByRole("contentinfo");

    expect(switchComponent).toHaveAttribute("aria-checked", "false");
    expect(switchComponent).toHaveAttribute("aria-disabled", "false");
  });
});

describe("Chip toggle Test", () => {
  let renderChip: RenderResult;
  beforeEach(() => {
    renderChip = render(<Chip clickable={true} label="Chip" />);
  });

  it("should toggle state when onClick event is fired", async () => {
    const ChipComponent = renderChip.getByRole("checkbox");
    const user = userEvent.setup();

    await user.click(ChipComponent);
    expect(ChipComponent).toHaveAttribute("aria-checked", "true");
    await user.click(ChipComponent);
    expect(ChipComponent).toHaveAttribute("aria-checked", "false");
  });

  it("should toggle state when Enter key is pressed", async () => {
    const switchComponent = renderChip.getByRole("checkbox");
    userEvent.type(switchComponent, "{enter}");
    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-checked", "true");
    });
    userEvent.type(switchComponent, "{enter}");
    await waitFor(() => {
      expect(switchComponent).toHaveAttribute("aria-checked", "false");
    });
  });

  it("should toggle state when Space key is pressed", async () => {
    const chipComponent = renderChip.getByRole("checkbox");

    await userEvent.type(chipComponent, "{space}");
    expect(chipComponent).toHaveAttribute("aria-checked", "true");
    await userEvent.type(chipComponent, "{space}");
    expect(chipComponent).toHaveAttribute("aria-checked", "false");
  });
});

describe("Chip disabled Test", () => {
  let renderChip: RenderResult;
  beforeEach(() => {
    renderChip = render(<Chip disabled label="Chip" />);
  });

  it("should render with attributes aria-disabled to be true", () => {
    const chipComponent = renderChip.getByRole("contentinfo");

    expect(chipComponent).toHaveAttribute("aria-disabled", "true");
  });

  it("should not allow focusing", () => {
    const chipComponent = renderChip.getByRole("contentinfo");
    userEvent.click(chipComponent);

    expect(chipComponent).not.toHaveFocus();
  });
});

describe("external control and events", () => {
  let renderChip: RenderResult;

  it("should fire external onClick event", async () => {
    renderChip = render(<Chip clickable label="Chip" />);
    const chipComponent = renderChip.getByRole("checkbox");
    const user = userEvent.setup();
    const onClickHandler = jest.fn();
    chipComponent.onclick = onClickHandler;

    await user.click(chipComponent);
    expect(onClickHandler).toHaveBeenCalled();
  });

  it("should fire external onKeyDown event", async () => {
    renderChip = render(<Chip clickable label="Chip" />);
    const user = userEvent.setup();
    const chipComponent = renderChip.getByRole("checkbox");
    const onKeyDownHandler = jest.fn();
    chipComponent.onkeydown = onKeyDownHandler;
    await user.type(chipComponent, "{enter}");
    expect(onKeyDownHandler).toHaveBeenCalled();
  });

  it("should toggle external checked state when onClick event fired", async () => {
    const user = userEvent.setup();
    let checked = false;
    const handleChange = () => {
      checked = !checked;
    };
    const rendered = render(<Chip clickable label="Chip" />);
    const chipComponent = rendered.getByRole("checkbox");
    chipComponent.onchange = handleChange;

    await user.click(chipComponent);

    expect(chipComponent).toHaveAttribute("aria-checked", "true");
    expect(chipComponent).toHaveAttribute("aria-disabled", "false");
  });
});
