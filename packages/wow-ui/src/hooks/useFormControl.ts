import type { ChangeEvent, FocusEvent } from "react";
import { useLayoutEffect, useState } from "react";

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
  const [value, setValue] = useState(valueProp ?? defaultValue ?? "");
  const [variant, setVariant] = useState<VariantType | BaseVariantType>(
    "default"
  );

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
      setValue(inputValue.slice(0, maxLength));
    } else {
      setValue(inputValue);
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
    value,
    variant,
    setVariant,
    handleChange,
    handleBlur,
    handleFocus,
  };
}
