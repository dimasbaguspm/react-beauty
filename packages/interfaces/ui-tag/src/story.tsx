import { Icon } from "@react-beauty/ui-icon";

import { Tag } from "./atoms";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "Tag",
  args: {
    children: "Button text",
    isUppercase: false,
    hasBoldText: false,
    size: "sm",
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
  },
  render: (args) => <Tag {...args} />,
} satisfies Meta<typeof Tag>;

export const Default = {};

export const PrefixIcon = {
  render: (args) => (
    <Tag {...args} prefixIcon={<Icon name="otherFrame" size="xs" />} />
  ),
} satisfies StoryObj<typeof meta>;

export const SuffixIcon = {
  render: (args) => (
    <Tag {...args} suffixIcon={<Icon name="controlsCloseSmall" size="xs" />} />
  ),
} satisfies StoryObj<typeof meta>;

export const Complete = {
  render: (args) => (
    <Tag
      {...args}
      prefixIcon={<Icon name="otherFrame" size="xs" />}
      suffixIcon={<Icon name="controlsCloseSmall" size="xs" />}
    />
  ),
} satisfies StoryObj<typeof meta>;
export default meta;
