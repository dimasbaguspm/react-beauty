import { AvatarImage } from "./avatar";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "UI/Avatar",
  component: AvatarImage,
} satisfies Meta<typeof AvatarImage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200/300",
  },
};
export default meta;
