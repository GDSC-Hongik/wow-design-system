import type { ChangeEvent, FocusEvent } from "react";
import { useLayoutEffect, useRef, useState } from "react";

export type BaseVariantType = "default" | "typing" | "typed";

interface FormControlProps<VariantType> {
  defaultValue?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  variant?: VariantType;
}

export function useFormControl<VariantType>({
  defaultValue,
  value: valueProp,
  maxLength,
  disabled,
  onChange,
  onBlur,
  onFocus,
}: FormControlProps<VariantType>) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [variant, setVariant] = useState<VariantType | BaseVariantType>(
    "default"
  );
  const isControlled = useRef<boolean>(valueProp !== undefined).current;

  useLayoutEffect(() => {
    const hasDefaultValue = isControlled ? valueProp : defaultValue;
    if (hasDefaultValue) {
      setVariant("typed");
    } else {
      setVariant("default");
    }
  }, [defaultValue, isControlled, valueProp]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!disabled) setVariant("typing");

    if (maxLength && inputValue.length > maxLength) {
      const slicedValue = inputValue.slice(0, maxLength);
      if (!isControlled) {
        setInternalValue(slicedValue);
      } else {
        onChange?.(slicedValue);
      }
    } else {
      if (!isControlled) {
        setInternalValue(inputValue);
      }
      onChange?.(inputValue);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!disabled) setVariant(inputValue ? "typed" : "default");
    onBlur?.();
  };

  const handleFocus = () => {
    if (!disabled && variant !== "typing") {
      setVariant("typing");
    }
    onFocus?.();
  };

  return {
    value: isControlled ? valueProp : internalValue,
    variant,
    setVariant,
    handleChange,
    handleBlur,
    handleFocus,
  };
}
