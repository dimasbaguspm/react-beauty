import { AvatarInitial } from './atoms/avatar-initial';
import { AvatarPicture } from './atoms/avatar-picture';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Avatar',
  argTypes: {
    size: {
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
    },
  },
} satisfies Meta;

export const Initial = {
  argTypes: {
    children: {
      description: 'The children of the avatar',
      defaultValue: 'dm',
      type: 'string',
      control: { type: 'text' },
    },
  },
  args: {
    size: 'md',
    children: 'dm',
  },
  render: (args) => <AvatarInitial {...args} />,
} satisfies StoryObj<typeof AvatarInitial>;

export const Picture = {
  args: {
    src: 'https://placecats.com/neo_2/300/200',
  },
  render: (args) => <AvatarPicture {...args} />,
} satisfies Meta<typeof AvatarPicture>;

export default meta;
