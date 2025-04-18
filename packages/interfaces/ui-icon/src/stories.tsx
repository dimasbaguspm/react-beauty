import { Icon } from "./icon";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: "arrowsRightCurved",
    size: "md",
  },
} satisfies Story;
export default meta;
