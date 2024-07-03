import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { useCallback, useMemo } from "react";

import { calcPercent } from "@/utils/calcPercent";

export interface StepperProps {
  step: number;
  maxStep?: number;
  labels?: LabelType[];
  width?: number;
}

export type LabelType = {
  value: number;
  label: ReactNode;
};

const checkStepperStatus = (number: number, step: number) => {
  if (step === number) return "currentStep";
  if (step > number) return "checkedStep";
  return "default";
};

const Stepper = ({ step, maxStep = 3, labels, width }: StepperProps) => {
  const fillProgressBar = useCallback((maxStep: number, step: number) => {
    const ratio = (step - 1) / (maxStep - 1);
    return ratio > 1 ? "100%" : `${ratio * 100}%`;
  }, []);

  const circleNumbers = useMemo(
    () => Array.from({ length: maxStep }, (_, i) => i + 1),
    [maxStep]
  );

  return (
    <div
      aria-label="progressbar"
      aria-valuemax={maxStep}
      aria-valuemin={1}
      aria-valuetext={String(step)}
      role="progressbar"
    >
      <styled.div
        backgroundColor="outline"
        height="1.2px"
        minWidth="17.375rem"
        position="relative"
        style={{ width: width && width > 278 ? `${width}px` : "17.375rem" }}
      >
        <styled.div
          backgroundColor="primary"
          height="1.2px"
          style={{ width: fillProgressBar(maxStep, step) }}
        />
        <styled.ul position="relative" width="100%">
          {circleNumbers.map((circleNumber) => (
            <StepperCircle
              circleNumber={circleNumber}
              currentStep={step}
              key={`circle-${circleNumber}`}
              maxStep={maxStep}
            />
          ))}
        </styled.ul>
        {labels && (
          <styled.ul pointerEvents="none" position="relative" userSelect="none">
            {labels.map((label) => (
              <StepperLabel
                currentStep={step}
                key={`label-${label.value}`}
                labelObject={label}
                maxStep={maxStep}
              />
            ))}
          </styled.ul>
        )}
      </styled.div>
    </div>
  );
};

export default Stepper;

const StepperCircle = ({
  maxStep,
  circleNumber,
  currentStep,
}: {
  maxStep: number;
  circleNumber: number;
  currentStep: number;
}) => {
  return (
    <styled.li
      className={stepperCircleStyle({
        status: checkStepperStatus(circleNumber, currentStep),
      })}
      style={{
        left: `${calcPercent(maxStep, circleNumber - 1)}%`,
        top: "-12px",
      }}
    >
      {circleNumber}
    </styled.li>
  );
};

const stepperCircleStyle = cva({
  base: {
    textStyle: "label2",
    alignItems: "center",
    borderRadius: "full",
    display: "flex",
    height: "1.5rem",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    width: "1.5rem",
    borderWidth: "1px",
    transform: "translateX(-50%)",
  },
  variants: {
    status: {
      default: {
        borderWidth: "0.0625rem",
        borderColor: "outline",
        backgroundColor: "backgroundNormal",
        color: "sub",
      },
      checkedStep: {
        borderWidth: "0.0625rem",
        borderColor: "primary",
        color: "primary",
        backgroundColor: "backgroundNormal",
      },
      currentStep: {
        backgroundColor: "primary",
        color: "textWhite",
      },
    },
  },
});

const StepperLabel = ({
  labelObject,
  maxStep,
  currentStep,
}: {
  labelObject: LabelType;
  maxStep: number;
  currentStep: number;
}) => {
  const { value, label } = labelObject;

  return (
    <styled.li
      marginTop="14px"
      pointerEvents="none"
      position="absolute"
      transform="translateX(-50%)"
      style={{
        left: `${calcPercent(maxStep, value - 1)}%`,
      }}
    >
      <styled.span
        className={stepperLabelStyle({
          status: checkStepperStatus(value, currentStep),
        })}
      >
        {label}
      </styled.span>
    </styled.li>
  );
};

const stepperLabelStyle = cva({
  base: {
    textStyle: "label2",
  },
  variants: {
    status: {
      default: {
        color: "sub",
      },
      checkedStep: {
        color: "primary",
      },
      currentStep: {
        color: "textBlack",
      },
    },
  },
});
