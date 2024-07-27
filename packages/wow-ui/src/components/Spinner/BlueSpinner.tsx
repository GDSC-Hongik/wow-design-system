import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import blueSpinner from "@/assets/lottie/blueSpinner.json";

/**
 * @description 블루 스피너 컴포넌트입니다.
 *
 * @param {CSSProperties["width"]} [width] - 스피너의 너비.
 * @param {CSSProperties["height"]} [height] - 스피너의 높이.
 * @param {boolean} [loop] - 애니메이션의 반복 재생 여부. 기본값은 `true`.
 * @param {boolean} [autoPlay] - 컴포넌트가 마운트될 때 자동으로 애니메이션이 재생될지 여부. 기본값은 `true`.
 */
export interface BlueSpinnerProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  autoPlay?: boolean;
  loop?: boolean;
}

const BlueSpinner = ({
  width = 223,
  height = 200,
  autoPlay = true,
  loop = true,
}: BlueSpinnerProps) => {
  return (
    <Lottie
      animationData={blueSpinner}
      autoPlay={autoPlay}
      loop={loop}
      style={{
        width,
        height,
      }}
    />
  );
};

export default BlueSpinner;
