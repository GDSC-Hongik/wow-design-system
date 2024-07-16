"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
} from "react";
import { forwardRef, useId, useLayoutEffect, useRef, useState } from "react";
import { Search as SearchIcon } from "wowds-icons";
// import InputBase from "../../components/SearchBar/InputBase";

type VariantType = "default" | "typing" | "typed" | "disabled";

/**
 * @description 사용자가 검색할 텍스트를 입력하는 서치바 컴포넌트입니다.
 *
 * @param {string} [placeholder] 서치바의 플레이스홀더 텍스트.
 * @param {string} [defaultValue] 서치바의 기본 값.
 * @param {string} [value] 외부에서 제어할 활성 상태.
 * @param {number} [maxLength] 서치바의 최대 입력 길이.
 * @param {(value: string) => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {() => void} [onBlur] 서치바가 포커스를 잃을 때 호출될 콜백 함수.
 * @param {() => void} [onFocus] 서치바가 포커스됐을 때 호출될 콜백 함수.
 * @param {InputHTMLAttributes<HTMLInputElement>} [inputProps] 서치바에 전달할 추가 textarea 속성.
 * @param {CSSProperties} [style] 서치바의 커스텀 스타일 속성.
 * @param {string} [className] 서치바에 전달하는 커스텀 클래스명.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      onBlur,
      onChange,
      onFocus,
      placeholder = "",
      defaultValue,
      value: valueProp,
      maxLength,
      inputProps,
      disabled,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const textareaId = inputProps?.id || id;

    const textareaRef = useRef<HTMLInputElement>(null);
    const textareaElementRef = ref || textareaRef;

    const [value, setValue] = useState(valueProp ?? defaultValue ?? "");
    const [variant, setVariant] = useState<VariantType>("default");

    useLayoutEffect(() => {
      if (disabled) {
        setVariant("disabled");
      } else if (defaultValue) {
        setVariant("typed");
      } else {
        setVariant("default");
      }
    }, [defaultValue, disabled]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const textareaValue = e.target.value;
      setVariant("typing");

      if (maxLength && textareaValue.length > maxLength) {
        setValue(textareaValue.slice(0, maxLength));
      } else {
        setValue(textareaValue);
        onChange?.(textareaValue);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      setVariant(inputValue ? "typed" : "default");
      onBlur?.();
    };

    const handleFocus = () => {
      if (variant !== "typing") {
        setVariant("typing");
      }
      onFocus?.();
    };

    return (
      <Flex className={containerStyle({ type: variant })} gap="xs">
        <SearchIcon
          stroke={
            variant === "default"
              ? "outline"
              : variant === "typing"
                ? "primary"
                : variant === "typed"
                  ? "sub"
                  : "outline"
          }
        />
        <styled.input
          {...inputProps}
          aria-describedby={textareaId}
          aria-label={inputProps?.["aria-label"] ?? "searchbar"}
          className={inputStyle()}
          id={textareaId}
          maxLength={maxLength}
          placeholder={placeholder}
          ref={textareaElementRef}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          {...rest}
        />
        {/* <InputBase
          {...inputProps}
          className={inputStyle({ type: variant })}
          id={textareaId}
          maxLength={maxLength}
          placeholder={placeholder}
          ref={textareaElementRef}
          rows={1}
          setValue={setValue}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          onValueChange={() => {
            setVariant("typing");
          }}
          {...rest}
        /> */}
      </Flex>
    );
  }
);

SearchBar.displayName = "TextField";
export default SearchBar;

const containerStyle = cva({
  base: {
    lg: {
      minWidth: "19.75rem",
      maxWidth: "40.75rem",
    },
    smDown: {
      width: "100%",
    },
    borderRadius: "sm",
    borderWidth: "button",
    paddingX: "sm",
    paddingY: "xs",
    textStyle: "body1",
    height: "2.625rem",
    maxHeight: "7.5rem",
    backgroundColor: "backgroundNormal",
    _placeholder: {
      color: "outline",
    },
    _focus: {
      outline: "none",
    },
  },
  variants: {
    type: {
      default: {
        borderColor: "outline",
        color: "outline",
      },
      typing: {
        borderColor: "primary",
        color: "textBlack",
      },
      typed: {
        borderColor: "sub",
        color: "textBlack",
      },
      disabled: {
        backgroundColor: "backgroundAlternative",
        borderColor: "sub",
        cursor: "not-allowed",
      },
    },
  },
});

const inputStyle = cva({
  base: {
    width: "100%",
    overflowY: "hidden",
    resize: "none",
    outline: "none",
  },
});