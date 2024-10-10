import { cva } from "@styled-system/css";
import type { ElementType, PropsWithChildren, ReactNode } from "react";
import { forwardRef } from "react";
import { BlueAvatar, GreenAvatar, RedAvatar, YellowAvatar } from "wowds-icons";

import type {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/types/polymorphic.ts";

/**
 * @description Avatar 컴포넌트는 사용자 프로필을 나타내는 컴포넌트입니다.
 *
 * @param {("sm" | "lg")} [size="lg"] - 아바타의 크기.
 * @param {("blue" | "green" | "yellow" | "red")} [variant="blue"] - 아바타의 색상.
 * @param {string} [imageUrl] - 아바타에 표시할 이미지의 URL.
 * @param {string} [username] - 아바타 옆에 표시할 사용자 이름. 사용자 이름이 제공되면 레이블로 표시됨.
 * @param {("left" | "right")} [orientation="right"] - 사용자 이름 레이블의 방향. size가 'sm'인 경우 지정 가능.
 * @param {React.ElementType} [asProp="div"] - 렌더링할 HTML 요소나 React 컴포넌트. 기본값은 "div".
 */

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

type AvatarComponent = <T extends ElementType = "div">(
  props: PolymorphicComponentPropsWithRef<T, AvatarProps<T>>
) => ReactNode;

const Avatar: AvatarComponent & { displayName?: string } = forwardRef(
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
