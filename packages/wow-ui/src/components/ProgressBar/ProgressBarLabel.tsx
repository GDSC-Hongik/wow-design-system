import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

import { calcPercent } from "@/utils/calcPercent";

export type LabelType = {
  value: number;
  text: string;
};
const ProgressBarLabel = ({
  label,
  maxStep,
  currentStep,
}: {
  label: LabelType;
  maxStep: number;
  currentStep: number;
}) => {
  const { value, text } = label;

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
      key={`${text}-marker`}
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
          status: checkCurrentMarkerStatus(label.value, currentStep),
        })}
      >
        {text}
      </styled.span>
    </styled.div>
  );
};

export default ProgressBarLabel;

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
