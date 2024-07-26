import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import rainbowSpinner from "@/assets/lottie/rainbowSpinner.json";

/**
 * @description 레인보우 스피너 컴포넌트입니다.
 *
 * @param {CSSProperties["width"]} [width] - 스피너의 너비.
 * @param {CSSProperties["height"]} [height] - 스피너의 높이.
 */
export interface RainbowSpinnerProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const RainbowSpinner = ({ width = 223, height = 200 }: RainbowSpinnerProps) => {
  return (
    <Lottie
      animationData={rainbowSpinner}
      style={{
        width,
        height,
      }}
    />
  );
};

export default RainbowSpinner;
