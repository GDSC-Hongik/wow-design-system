import { render } from "@testing-library/react";

import Button from ".";

test("Button renders correctly", () => {
  const { getByText } = render(<Button>Click me</Button>);

  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeTruthy();
});
