import Lottie from "lottie-react";
import type { CSSProperties } from "react";

import blueSpinner from "@/assets/lottie/blueSpinner.json";

export interface BlueSpinnerProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const BlueSpinner = ({ width = 223, height = 200 }: BlueSpinnerProps) => {
  return (
    <Lottie
      animationData={blueSpinner}
      style={{
        width,
        height,
      }}
    />
  );
};

export default BlueSpinner;
