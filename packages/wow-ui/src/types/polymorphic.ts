import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

export interface AsProps<T extends ElementType> {
  asProp?: T;
}

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  ComponentProps = {},
> = ComponentProps & { ref?: PolymorphicRef<C> };

export type PolymorphicComponentProps<
  T extends ElementType,
  ComponentProps = {},
> = AsProps<T> &
  ComponentPropsWithoutRef<T> &
  PolymorphicComponentPropsWithRef<T, ComponentProps>;
