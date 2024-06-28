import { styled } from "@styled-system/jsx";

import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";
import type { MarkerType } from "@/components/ProgressBar/ProgressBarMarker";
import ProgressBarMarker from "@/components/ProgressBar/ProgressBarMarker";

export interface ProgressBarProps {
  step: number;
  maxStep?: number;
  markers?: MarkerType[];
}

const ProgressBar = ({ step, maxStep = 3, markers }: ProgressBarProps) => {
  const fillProgressBar = (maxValue: number, value: number) => {
    const ratio = (value - 1) / (maxValue - 1);
    return ratio > 1 ? "100%" : `${ratio * 100}%`;
  };

  const circleNumbers = Array.from({ length: maxStep }, (_, i) => i + 1);

  return (
    <div
      aria-valuemax={maxStep}
      aria-valuemin={0}
      aria-valuetext={String(step)}
      role="progressbar"
    >
      <styled.div
        backgroundColor="outline"
        height="1.2px"
        position="relative"
        width="17.375rem"
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
        {markers && (
          <styled.div
            pointerEvents="none"
            position="relative"
            userSelect="none"
          >
            {markers.map((marker) => (
              <ProgressBarMarker marker={marker} maxStep={maxStep} />
            ))}
          </styled.div>
        )}
      </styled.div>
    </div>
  );
};

export default ProgressBar;
