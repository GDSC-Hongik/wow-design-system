import { space as wowSpace } from "wowds-tokens";

type WowSpaceKeyType = keyof typeof wowSpace;
type SpaceType = number | string | WowSpaceKeyType;

/**
 * @description Space 컴포넌트
 * @params {SpaceType} width - 가로 여백입니다.
 * @params {SpaceType} height - 세로 여백입니다.
 */
interface SpaceProps {
  width?: SpaceType;
  height?: SpaceType;
}

const getSpace = (space?: SpaceType) => {
  if (typeof space === "number") {
    return `${space}px`;
  } else if (typeof space === "string" && space in wowSpace) {
    return wowSpace[space as WowSpaceKeyType];
  }
  return space || "";
};

const Space = ({ width, height }: SpaceProps) => {
  return (
    <hr
      style={{
        width: getSpace(width),
        height: getSpace(height),
        border: "none",
      }}
    />
  );
};

export default Space;
