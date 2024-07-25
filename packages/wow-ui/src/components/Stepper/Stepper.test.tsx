import { cleanup, render, screen } from "@testing-library/react";

import Stepper from "@/components/Stepper";

describe("Stepper rendering Test", () => {
  beforeEach(() => {
    render(<Stepper maxStep={5} step={3} />);
  });

  it("should render Stepper", () => {
    const stepper = screen.getByRole("progressbar");
    expect(stepper).toBeInTheDocument();
  });

  it("should render with attributes aria-label stepper", () => {
    const stepper = screen.getByRole("progressbar");

    expect(stepper).toHaveAttribute("aria-label", "stepper");
  });
});

describe("Stepper step state Test", () => {
  beforeEach(() => {
    render(<Stepper maxStep={5} step={3} />);
  });
  it("should stepper min value is 1", () => {
    const stepper = screen.getByRole("progressbar");
    expect(stepper).toHaveAttribute("aria-valuemin", "1");
  });

  it("should stepper value is 3", () => {
    const stepper = screen.getByRole("progressbar");
    expect(stepper).toHaveAttribute("aria-valuetext", "3");
  });

  it("should stepper max value is 5", () => {
    const stepper = screen.getByRole("progressbar");
    expect(stepper).toHaveAttribute("aria-valuemax", "5");
  });
});

describe("Stepper Labels Rendering Test", () => {
  beforeEach(() => {
    render(
      <Stepper
        maxStep={5}
        step={3}
        labels={[
          { value: 1, label: "Step1" },
          { value: 2, label: "Step2" },
          { value: 3, label: "Step3" },
          { value: 4, label: "Step4" },
          { value: 5, label: "Step5" },
        ]}
      />
    );
  });
  it("should stepper label render", () => {
    const step1 = screen.getByText("Step1");
    expect(step1).toBeInTheDocument();

    const step2 = screen.getByText("Step2");
    expect(step2).toBeInTheDocument();

    const step3 = screen.getByText("Step3");
    expect(step3).toBeInTheDocument();

    const step4 = screen.getByText("Step4");
    expect(step4).toBeInTheDocument();

    const step5 = screen.getByText("Step5");
    expect(step5).toBeInTheDocument();
  });
});

describe("Control step change Test", () => {
  it("should stepper step state change when external step changed ", async () => {
    const checkStepValue = async (step: number) => {
      render(<Stepper maxStep={5} step={step} />);
      const stepper = screen.getByRole("progressbar");
      expect(stepper).toHaveAttribute("aria-valuetext", step.toString());
      cleanup();
    };

    await checkStepValue(1);
    await checkStepValue(2);
    await checkStepValue(3);
    await checkStepValue(4);
    await checkStepValue(5);
  });

  it("should stepper maxStep state change when external maxStep changed ", async () => {
    const checkMaxStepValue = async (maxStep: number) => {
      render(<Stepper maxStep={maxStep} step={1} />);
      const stepper = screen.getByRole("progressbar");
      expect(stepper).toHaveAttribute("aria-valuemax", maxStep.toString());
      cleanup();
    };

    await checkMaxStepValue(1);
    await checkMaxStepValue(2);
    await checkMaxStepValue(3);
    await checkMaxStepValue(4);
    await checkMaxStepValue(5);
  });
});
