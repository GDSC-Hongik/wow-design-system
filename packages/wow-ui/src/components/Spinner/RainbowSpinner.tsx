import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import rainbowSpinner from "@/assets/lottie/rainbowSpinner.json";

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
