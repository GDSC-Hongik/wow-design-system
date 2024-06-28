import { styled } from "@styled-system/jsx";

import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import type { LabelType } from "@/components/ProgressBar/ProgressBarLabel";
import ProgressBarLabel from "@/components/ProgressBar/ProgressBarLabel";

export interface ProgressBarProps {
  step: number;
  maxStep?: number;
  labels?: LabelType[];
  width?: number;
}

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
        ></styled.div>
        <styled.div position="relative" width="100%">
          {circleNumbers.map((circleNumber) => (
            <ProgressBarCircle
              circleNumber={circleNumber}
              currentStep={step}
              maxStep={maxStep}
            />
          ))}
        </styled.div>
        {labels && (
          <styled.div
            pointerEvents="none"
            position="relative"
            userSelect="none"
          >
            {labels.map((label) => (
              <ProgressBarLabel
                currentStep={step}
                label={label}
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
