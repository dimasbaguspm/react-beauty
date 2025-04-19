import { Icon } from "@react-beauty/ui-icon";

import { Button } from "./atoms";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "Button",
  args: {
    children: "Button text",
    variant: "fill",
    size: "sm",
    disabled: false,
    onClick: () => console.log("clicked"),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    variant: {
      options: ["fill", "outline", "ghost"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    isFullWidth: {
      control: { type: "boolean" },
    },
  },
  render: (args) => <Button {...args} />,
} satisfies Meta<typeof Button>;

export const Default = {};

export const PrefixIcon = {
  args: {
    prefixIcon: <Icon name="otherFrame" size="xs" />,
  },
} satisfies StoryObj<typeof meta>;

export const SuffixIcon = {
  args: {
    suffixIcon: <Icon name="otherFrame" size="xs" />,
  },
} satisfies StoryObj<typeof meta>;

export const OnlyIcon = {
  args: {
    children: <Icon name="otherFrame" size="xs" />,
  },
} satisfies StoryObj<typeof meta>;
export default meta;
