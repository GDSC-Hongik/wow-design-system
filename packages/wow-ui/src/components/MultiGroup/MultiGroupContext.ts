import { createContext } from "react";

import type { MultiGroupProps, VariantType } from "@/components/MultiGroup";

/**
 * @description 여러 체크박스 또는 스위치 컴포넌트 사이 공유되는 MultiGroupContext의 속성을 정의합니다.
 *
 * @template T 체크박스 또는 스위치 타입.
 *
 * @param {string} [name] 그룹명.
 * @param {string[]} [checked] 외부에서 제어할 활성 상태.
 * @param {(value: string) => void} [onChange] 외부 활성 상태가 변경될 때 호출되는 함수.
 * @param {boolean} [disabled] 그룹 내 모든 체크박스 또는 스위치가 비활성화되어 있는지 여부.
 */
export type MultiGroupContextProps<T extends VariantType> = Pick<
  MultiGroupProps<T>,
  "name" | "checked" | "onChange" | "disabled"
>;

const defaultContextValue: MultiGroupContextProps<VariantType> = {
  name: "MultiGroupName",
  checked: undefined,
  onChange: undefined,
  disabled: false,
};

const MultiGroupContext =
  createContext<MultiGroupContextProps<VariantType>>(defaultContextValue);

export default MultiGroupContext;
