import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import rainbowSpinner from "@/assets/lottie/rainbowSpinner.json";

/**
 * @description 레인보우 스피너 컴포넌트입니다. Lottie 애니메이션을 사용하여 스피너를 표시합니다.
 *
 * @param {CSSProperties["width"]} [width] - 스피너의 너비.
 * @param {CSSProperties["height"]} [height] - 스피너의 높이.
 * @param {boolean} [loop] - 애니메이션의 반복 재생 여부. 기본값은 `true`.
 * @param {boolean} [autoPlay] - 컴포넌트가 마운트될 때 자동으로 애니메이션이 재생될지 여부. 기본값은 `true`.
 */
export interface RainbowSpinnerProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  autoPlay?: boolean;
  loop?: boolean;
}

const RainbowSpinner = ({
  width = 223,
  height = 200,
  autoPlay = true,
  loop = true,
}: RainbowSpinnerProps) => {
  return (
    <Lottie
      animationData={rainbowSpinner}
      autoPlay={autoPlay}
      loop={loop}
      style={{
        width,
        height,
      }}
    />
  );
};

export default RainbowSpinner;
