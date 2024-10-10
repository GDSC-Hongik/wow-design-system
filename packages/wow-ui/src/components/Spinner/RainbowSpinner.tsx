import type { LottieComponentProps } from "lottie-react";
import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import rainbowSpinner from "@/assets/lotties/rainbowSpinner.json";

/**
 * @description 레인보우 스피너 컴포넌트입니다. Lottie 애니메이션을 사용하여 스피너를 표시합니다.
 *
 * @param {CSSProperties["width"]} [width] - 스피너의 너비.
 * @param {CSSProperties["height"]} [height] - 스피너의 높이.
 */
export interface RainbowSpinnerProps
  extends Omit<LottieComponentProps, "animationData"> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const RainbowSpinner = ({
  width = 223,
  height = 200,
  ...rest
}: RainbowSpinnerProps) => {
  return (
    <Lottie
      animationData={rainbowSpinner}
      style={{
        width,
        height,
      }}
      {...rest}
    />
  );
};

export default RainbowSpinner;
