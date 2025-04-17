import { AvatarImage, AvatarInitial } from "./avatar";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "UI/Avatar",
  component: AvatarInitial,
} satisfies Meta<typeof AvatarImage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Avatar",
  },
};
export default meta;
