import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

export interface AsProps<T extends ElementType> {
  as?: T;
}

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {},
> = AsProps<T> &
  ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
