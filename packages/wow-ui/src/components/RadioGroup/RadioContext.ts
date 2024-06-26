import type { ChangeEvent } from "react";
import { createContext } from "react";

/**
 * @description RadioButton들 사이에 공유되는 RadioContext의 속성을 정의합니다.
 *
 * @param {string | undefined} name - 라디오 그룹의 이름.
 * @param {string | undefined} [value] - 외부에서 제어할 활성된 라디오 버튼의 값.
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} [onChange] - 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {boolean} [disabled] - 라디오 그룹이 비활성화되어 있는지 여부.
 */

export interface RadioContextProps {
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioContext = createContext<RadioContextProps>({
  name: "RadioGroupName",
  value: undefined,
  onChange: undefined,
  disabled: false,
});

export default RadioContext;
