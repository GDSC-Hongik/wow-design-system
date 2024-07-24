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
  const isControlled = useRef<boolean>(valueProp !== undefined);

  useLayoutEffect(() => {
    if (defaultValue) {
      setVariant("typed");
    } else {
      setVariant("default");
    }
  }, [defaultValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!disabled) setVariant("typing");

    if (maxLength && inputValue.length > maxLength) {
      const slicedValue = inputValue.slice(0, maxLength);
      if (!isControlled.current) {
        setInternalValue(slicedValue);
      } else {
        onChange?.(slicedValue);
      }
    } else {
      if (!isControlled.current) {
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

  const value = isControlled.current ? valueProp : internalValue;

  return {
    value,
    variant,
    setVariant,
    handleChange,
    handleBlur,
    handleFocus,
  };
}
