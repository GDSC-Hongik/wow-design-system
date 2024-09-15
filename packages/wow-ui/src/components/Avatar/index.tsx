/**
 *
 */

import { cva } from "@styled-system/css";
import type { ElementType, PropsWithChildren } from "react";
import { forwardRef } from "react";
import { BlueAvatar, GreenAvatar, RedAvatar, YellowAvatar } from "wowds-icons";

import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic.ts";

type AvatarSizeType = "sm" | "lg";

export interface _AvatarProps {
  size?: AvatarSizeType;
  variant?: "blue" | "green" | "yellow" | "red";
  imageUrl?: string;
  username?: string;
  orientation?: "left" | "right";
}

type AvatarProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _AvatarProps
> &
  PropsWithChildren;

const Avatar = forwardRef(
  <T extends ElementType = "div">(
    {
      asProp,
      size = "lg",
      variant = "blue",
      imageUrl,
      username,
      orientation,
      ...rest
    }: AvatarProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = asProp || "div";
    const AvatarComponent = avatarMap[variant];

    return (
      <Component
        ref={ref}
        className={avatarContainerStyle({
          size,
          orientation: size === "lg" ? "default" : orientation ?? "right",
        })}
        {...rest}
      >
        {imageUrl ? (
          <img
            alt="avatar"
            className={avatarSizeStyle({ size })}
            src={imageUrl}
          />
        ) : (
          <AvatarComponent
            aria-hidden={!!imageUrl}
            className={avatarSizeStyle({ size })}
          />
        )}
        <label aria-hidden={!username} className={avatarLabelStyle({ size })}>
          {username}
        </label>
      </Component>
    );
  }
);

Avatar.displayName = "Avatar";
export default Avatar;

const avatarMap = {
  blue: BlueAvatar,
  green: GreenAvatar,
  red: RedAvatar,
  yellow: YellowAvatar,
};

const avatarContainerStyle = cva({
  base: {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    size: {
      sm: {
        gap: 8,
      },
      lg: {
        gap: 12,
      },
    },
    orientation: {
      default: {
        flexDirection: "column",
      },
      left: {
        flexDirection: "row-reverse",
      },
      right: {
        flexDirection: "row",
      },
    },
  },
});

const avatarSizeStyle = cva({
  base: {
    borderRadius: "50%",
  },
  variants: {
    size: {
      sm: {
        width: 32,
        height: 32,
      },
      lg: {
        width: 100,
        height: 100,
      },
    },
  },
});

const avatarLabelStyle = cva({
  variants: {
    size: {
      sm: {
        textStyle: "label1",
      },
      lg: {
        textStyle: "h1",
      },
    },
  },
});
