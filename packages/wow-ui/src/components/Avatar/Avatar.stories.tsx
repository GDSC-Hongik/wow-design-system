import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/components/Avatar/index.tsx";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle: "아바타 컴포넌트",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://i.ibb.co/2hz6hNP/2024-06-06-11-52-22.png",
  },
};

export const LargeWithUsername: Story = {
  args: {
    username: "김홍익 님",
  },
};

export const SmallWithUsernameOrientationLeft: Story = {
  args: {
    username: "김홍익 님",
    size: "sm",
    orientation: "left",
  },
};

export const SmallWithUsernameOrientationRight: Story = {
  args: {
    username: "김홍익 님",
    size: "sm",
  },
};
