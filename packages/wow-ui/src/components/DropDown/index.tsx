"use client";

import type {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { useId } from "react";

import { DropDownContext } from "@/components/DropDown/context/DropDownContext";
import { DropDownOptionList } from "@/components/DropDown/DropDownOptionList";
import DropDownTrigger from "@/components/DropDown/DropDownTrigger";
import useDropDownState from "@/hooks/useDropDownState";

import { CollectionProvider } from "./context/CollectionContext";
import { DropDownWrapper } from "./DropDownWrapper";
export interface DropDownWithTriggerProps extends PropsWithChildren {
  /**
   * @description 드롭다운을 열기 위한 외부 트리거 요소입니다.
   * @type {ReactElement}
   */
  trigger: ReactElement;
  /**
   * @description 트리거를 사용할 경우, 레이블은 사용할 수 없습니다.
   * @type {never}
   */
  label?: never;
  /**
   * @description 트리거를 사용할 경우, 플레이스홀더는 사용할 수 없습니다.
   * @type {never}
   */
  placeholder?: never;
}

export interface DropDownWithoutTriggerProps extends PropsWithChildren {
  /**
   * @description 외부 트리거를 사용하지 않는 경우 레이블을 사용할 수 있습니다.
   * @type {ReactNode}
   */
  label?: ReactNode;
  /**
   * @description 외부 트리거를 사용하지 않는 경우 선택되지 않았을 때 표시되는 플레이스홀더입니다.
   * @type {string}
   */
  placeholder?: string;
  /**
   * @description 외부 트리거를 사용하지 않는 경우, 트리거 요소는 사용할 수 없습니다.
   * @type {never}
   */
  trigger?: never;
}

/**
 * @description 사용자가 외부 트리거 컴포넌트나 내부 요소를 통해서 선택 옵션 리스트 중에 아이템을 선택할 수 있는 드롭다운 컴포넌트 입니다.
 *
 * @param {string} [id] 드롭다운 id 입니다.
 * @param {ReactElement} [trigger] 드롭다운을 열기 위한 외부 트리거 요소입니다.
 * @param {ReactNode} [label] 외부 트리거를 사용하지 않는 경우 레이블을 사용할 수 있습니다.
 * @param {string} [placeholder] 외부 트리거를 사용하지 않는 경우 선택되지 않았을 때 표시되는 플레이스홀더입니다.
 * @param {string} [defaultValue] 초기 선택된 값을 나타냅니다.
 * @param {string} [value] 현재 선택된 값을 나타냅니다.
 * @param {(value: {selectedValue: string; selectedText: ReactNode;}) => void} [onChange] 값이 변경될 때 호출되는 함수입니다.
 * @param {CSSProperties} [style] 드롭다운의 커스텀 스타일.
 * @param {string} [className] 드롭다운에 전달하는 커스텀 클래스.
 */
export type DropDownProps = (
  | DropDownWithTriggerProps
  | DropDownWithoutTriggerProps
) & {
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: {
    selectedValue: string;
    selectedText: ReactNode;
  }) => void;
  style?: CSSProperties;
  className?: string;
};

const DropDown = ({
  id,
  children,
  trigger,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...rest
}: DropDownProps) => {
  const dropdownState = useDropDownState({
    value,
    defaultValue,
    onChange,
  });

  const defaultId = useId();
  const dropdownId = id ?? `dropdown-${defaultId}`;

  return (
    <DropDownContext.Provider value={dropdownState}>
      <CollectionProvider>
        <DropDownWrapper
          dropdownId={dropdownId}
          hasCustomTrigger={!!trigger}
          {...rest}
        >
          <DropDownTrigger
            dropdownId={dropdownId}
            label={label}
            placeholder={placeholder}
            trigger={trigger}
          />
          <DropDownOptionList hasCustomTrigger={!!trigger}>
            {children}
          </DropDownOptionList>
        </DropDownWrapper>
      </CollectionProvider>
    </DropDownContext.Provider>
  );
};

DropDown.displayName = "DropDown";
export default DropDown;
