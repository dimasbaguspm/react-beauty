import { action } from "@react-beauty/storybook";
import { Icon } from "@react-beauty/ui-icon";
import { Tag } from "@react-beauty/ui-tag";

import { MenuItem } from ".";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "Menu Item",
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "var(--colors-main-goku)",
        },
      ],
    },
  },
  args: {
    children: "Your Value",
    onClick: action("clicked"),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  render: (args) => <MenuItem {...args} />,
} satisfies Meta<typeof MenuItem>;

export const Anchor = {
  args: {
    href: "https://www.google.com",
  },
};

export const Button = {
  args: {
    onClick: action("clicked"),
  },
};

export const WithTrail = {
  render: (args) => (
    <MenuItem {...args}>
      <MenuItem.Label>{args.children}</MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  ),
} satisfies StoryObj<typeof meta>;

export const WithLead = {
  render: (args) => (
    <MenuItem {...args}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label>{args.children}</MenuItem.Label>
    </MenuItem>
  ),
} satisfies StoryObj<typeof meta>;

export const WithLeadAndTrail = {
  render: (args) => (
    <MenuItem {...args}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label>{args.children}</MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  ),
} satisfies StoryObj<typeof meta>;

export const MultiLine = {
  render: (args) => (
    <MenuItem {...args}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label data-description="I am going to do it again, but this time I will do it really well.">
        {args.children}
      </MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  ),
} satisfies StoryObj<typeof meta>;
export default meta;
