import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";

import { calcPercent } from "@/utils/calcPercent";

export interface ProgressBarProps {
  step: number;
  maxStep?: number;
  labels?: LabelType[];
  width?: number;
}

export type LabelType = {
  value: number;
  label: ReactNode;
};

const ProgressBar = ({
  step,
  maxStep = 3,
  labels,
  width,
}: ProgressBarProps) => {
  const fillProgressBar = (maxValue: number, value: number) => {
    const ratio = (value - 1) / (maxValue - 1);
    return ratio > 1 ? "100%" : `${ratio * 100}%`;
  };

  const circleNumbers = Array.from({ length: maxStep }, (_, i) => i + 1);

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
            <ProgressBarCircle
              circleNumber={circleNumber}
              currentStep={step}
              key={`circle-${circleNumber}`}
              maxStep={maxStep}
            />
          ))}
        </styled.ul>
        {labels && (
          <styled.div
            pointerEvents="none"
            position="relative"
            userSelect="none"
          >
            {labels.map((label) => (
              <ProgressBarLabel
                currentStep={step}
                key={`label-${label.value}`}
                labelObject={label}
                maxStep={maxStep}
              />
            ))}
          </styled.div>
        )}
      </styled.div>
    </div>
  );
};

export default ProgressBar;

const ProgressBarCircle = ({
  maxStep,
  circleNumber,
  currentStep,
}: {
  maxStep: number;
  circleNumber: number;
  currentStep: number;
}) => {
  const checkCurrentCircleStatus = (
    circleNumber: number,
    currentStep: number
  ) => {
    if (currentStep === circleNumber) return "currentStep";
    else if (currentStep > circleNumber) return "checkedStep";
    else return "default";
  };

  return (
    <styled.li
      className={progressBarCircleStyle({
        status: checkCurrentCircleStatus(circleNumber, currentStep),
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

const progressBarCircleStyle = cva({
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

const ProgressBarLabel = ({
  labelObject,
  maxStep,
  currentStep,
}: {
  labelObject: LabelType;
  maxStep: number;
  currentStep: number;
}) => {
  const { value, label } = labelObject;

  const checkCurrentMarkerStatus = (
    markerValue: number,
    currentStep: number
  ) => {
    if (currentStep === markerValue) return "currentStep";
    else if (currentStep > markerValue) return "checkedStep";
    else return "default";
  };

  return (
    <styled.div
      marginTop="14px"
      pointerEvents="none"
      position="absolute"
      transform="translateX(-50%)"
      style={{
        left: `${calcPercent(maxStep, value - 1)}%`,
      }}
    >
      <styled.span
        className={progressBarLabelStyle({
          status: checkCurrentMarkerStatus(value, currentStep),
        })}
      >
        {label}
      </styled.span>
    </styled.div>
  );
};

const progressBarLabelStyle = cva({
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
