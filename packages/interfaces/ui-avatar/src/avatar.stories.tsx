import { AvatarInitial, AvatarPicture } from "./avatar";

import type { Meta } from "@react-beauty/storybook";

const meta = {
  title: "Avatar",
  argTypes: {
    size: {
      options: ["2xl", "xl", "lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
  },
} satisfies Meta;

export const Initial = {
  render: (args) => <AvatarInitial {...args}>dm</AvatarInitial>,
} satisfies Meta<typeof AvatarInitial>;

export const Picture = {
  args: {
    src: "https://placecats.com/neo_2/300/200",
  },
  render: (args) => <AvatarPicture {...args} />,
} satisfies Meta<typeof AvatarPicture>;

export default meta;
