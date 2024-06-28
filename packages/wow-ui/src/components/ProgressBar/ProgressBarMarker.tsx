import { styled } from "@styled-system/jsx";

export type MarkerType = {
  value: number;
  label: string;
  minValue?: number;
  maxValue?: number;
};
const ProgressBarMarker = ({
  marker,
  maxStep,
}: {
  marker: MarkerType;
  maxStep: number;
}) => {
  const { value, label } = marker;
  const calcPercent = (maxValue: number, value: number) => {
    return (value / maxValue) * 100;
  };

  return (
    <styled.div
      key={`${marker}-marker`}
      marginTop="8px"
      pointerEvents="none"
      position="absolute"
      translateX="-50%"
      style={{
        left: `${calcPercent(maxStep, value)}%`,
      }}
    >
      <styled.span color="textBlack" textStyle="label2">
        {label}
      </styled.span>
    </styled.div>
  );
};

export default ProgressBarMarker;
