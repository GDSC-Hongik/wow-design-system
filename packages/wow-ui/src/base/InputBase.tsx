// "use client";

// import { styled } from "@styled-system/jsx";
// import type { CSSProperties, InputHTMLAttributes } from "react";
// import { forwardRef, useLayoutEffect, useRef } from "react";

// import { useFormControl } from "../hooks/useFormControl";

// export interface InputBaseProps
//   extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
//   style?: CSSProperties;
//   className?: string;
//   defaultValue?: string;
//   value?: string;
//   maxLength?: number;
//   disabled?: boolean;
//   onChange?: (value: string) => void;
//   onBlur?: () => void;
//   onFocus?: () => void;
// }

// const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
//   (
//     {
//       defaultValue,
//       value: valueProp,
//       maxLength,
//       disabled,
//       onChange,
//       onBlur,
//       onFocus,
//       className,
//       ...props
//     },
//     ref
//   ) => {
//     const { value, setVariant, handleChange, handleBlur, handleFocus } =
//       useFormControl({
//         defaultValue,
//         value: valueProp,
//         maxLength,
//         disabled,
//         onChange,
//         onBlur,
//         onFocus,
//       });

//     useLayoutEffect(() => {
//       if (disabled) {
//         setVariant("disabled");
//       } else if (defaultValue) {
//         setVariant("typed");
//       } else {
//         setVariant("default");
//       }
//     }, [defaultValue, disabled, setVariant]);

//     const inputRef = useRef<HTMLInputElement>(null);
//     const inputElementRef = ref || inputRef;

//     return (
//       <styled.input
//         className={className}
//         disabled={disabled}
//         ref={inputElementRef}
//         value={value}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         onFocus={handleFocus}
//         {...props}
//       />
//     );
//   }
// );

// InputBase.displayName = "InputBase";
// export default InputBase;

"use client";

import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, InputHTMLAttributes } from "react";
import { forwardRef, useLayoutEffect } from "react";

import type { BaseVariantType } from "../hooks/useFormControl";
import { useFormControl } from "../hooks/useFormControl";

// Extend the BaseVariantType with CustomVariantType
export type CustomVariantType = BaseVariantType | "disabled";

export interface InputBaseProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "defaultValue"
    | "value"
    | "maxLength"
    | "disabled"
    | "onChange"
    | "onBlur"
    | "onFocus"
  > {
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  variant?: BaseVariantType;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, disabled, ...props }, ref) => {
    const { value, setVariant, handleChange, handleBlur, handleFocus } =
      useFormControl<CustomVariantType>(props);

    useLayoutEffect(() => {
      if (disabled) {
        setVariant("disabled");
      }
    }, [disabled, setVariant]);

    const handleChange = (event, ...args) => {
      if (!isControlled) {
        const element = event.target || inputRef.current;
        if (element == null) {
          throw new MuiError(
            "MUI: Expected valid input target. " +
              "Did you use a custom `inputComponent` and forget to forward refs? " +
              "See https://mui.com/r/input-component-ref-interface for more info."
          );
        }

        checkDirty({
          value: element.value,
        });
      }

      if (inputPropsProp.onChange) {
        inputPropsProp.onChange(event, ...args);
      }

      // Perform in the willUpdate
      if (onChange) {
        onChange(event, ...args);
      }
    };

    return (
      <styled.input
        className={className}
        ref={ref}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        {...props}
      />
    );
  }
);

InputBase.displayName = "InputBase";
export default InputBase;
