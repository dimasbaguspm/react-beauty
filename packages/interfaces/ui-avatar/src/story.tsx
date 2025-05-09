import { Avatar } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    size: 'md',
    children: <Avatar.Initial>dm</Avatar.Initial>,
  },
};

export const Picture: Story = {
  args: {
    size: 'md',
    children: <Avatar.Picture src="https://placecats.com/neo_2/300/200" />,
  },
};

export const Sizes: Story = {
  args: {
    children: null, // Placeholder, will be replaced in render
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="2xl">
        <Avatar.Initial>2xl</Avatar.Initial>
      </Avatar>
      <Avatar size="xl">
        <Avatar.Initial>xl</Avatar.Initial>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Initial>lg</Avatar.Initial>
      </Avatar>
      <Avatar size="md">
        <Avatar.Initial>md</Avatar.Initial>
      </Avatar>
      <Avatar size="sm">
        <Avatar.Initial>sm</Avatar.Initial>
      </Avatar>
      <Avatar size="xs">
        <Avatar.Initial>xs</Avatar.Initial>
      </Avatar>
    </div>
  ),
};

export const PictureSizes: Story = {
  args: {
    children: null, // Placeholder, will be replaced in render
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="2xl">
        <Avatar.Picture src="https://placecats.com/neo_2/300/300" />
      </Avatar>
      <Avatar size="xl">
        <Avatar.Picture src="https://placecats.com/neo_2/250/250" />
      </Avatar>
      <Avatar size="lg">
        <Avatar.Picture src="https://placecats.com/neo_2/200/200" />
      </Avatar>
      <Avatar size="md">
        <Avatar.Picture src="https://placecats.com/neo_2/150/150" />
      </Avatar>
      <Avatar size="sm">
        <Avatar.Picture src="https://placecats.com/neo_2/100/100" />
      </Avatar>
      <Avatar size="xs">
        <Avatar.Picture src="https://placecats.com/neo_2/50/50" />
      </Avatar>
    </div>
  ),
};
