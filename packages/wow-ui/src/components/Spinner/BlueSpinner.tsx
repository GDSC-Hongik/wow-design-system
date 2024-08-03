import type { LottieComponentProps } from "lottie-react";
import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import blueSpinner from "@/assets/lottie/blueSpinner.json";

/**
 * @description 블루 스피너 컴포넌트입니다.
 *
 * @param {CSSProperties["width"]} [width] - 스피너의 너비.
 * @param {CSSProperties["height"]} [height] - 스피너의 높이.
 */
export interface BlueSpinnerProps
  extends Omit<LottieComponentProps, "animationData"> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const BlueSpinner = ({
  width = 223,
  height = 200,
  ...rest
}: BlueSpinnerProps) => {
  return (
    <Lottie
      animationData={blueSpinner}
      style={{
        width,
        height,
      }}
      {...rest}
    />
  );
};

export default BlueSpinner;
