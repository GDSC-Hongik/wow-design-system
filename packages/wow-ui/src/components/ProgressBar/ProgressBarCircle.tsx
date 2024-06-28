import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

import { calcPercent } from "@/utils/calcPercent";

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
    <styled.div
      key={`${circleNumber}-step`}
      className={progressBarCircleStyle({
        status: checkCurrentCircleStatus(circleNumber, currentStep),
      })}
      style={{
        left: `${calcPercent(maxStep, circleNumber - 1)}%`,
        top: "-12px",
      }}
    >
      {circleNumber}
    </styled.div>
  );
};

export default ProgressBarCircle;

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
