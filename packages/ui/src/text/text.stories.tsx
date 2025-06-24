import { Text } from './text';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'caption', 'heading', 'subheading', 'overline', 'code'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'surface',
        'danger',
        'warning',
        'info',
        'success',
        'disabled',
      ],
    },
    truncate: { control: 'boolean' },
    as: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Sample text',
    variant: 'body',
    weight: 'regular',
    color: 'surface',
    truncate: false,
    as: 'span',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: { children: 'Body text', variant: 'body' },
};

export const Heading: Story = {
  args: { children: 'Heading', variant: 'heading', as: 'h2' },
};

export const Subheading: Story = {
  args: { children: 'Subheading', variant: 'subheading', as: 'h3' },
};

export const Caption: Story = {
  args: { children: 'Caption text', variant: 'caption' },
};

export const Overline: Story = {
  args: { children: 'OVERLINE', variant: 'overline' },
};

export const Code: Story = {
  args: { children: 'const a = 1;', variant: 'code', as: 'code' },
};

export const Truncated: Story = {
  render: (args) => (
    <div style={{ maxWidth: 120 }}>
      <Text {...args} truncate>
        This is a very long text that will be truncated with ellipsis if it
        overflows the container.
      </Text>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text {...args} color="primary">
        Primary
      </Text>
      <Text {...args} color="surface">
        Surface
      </Text>
      <Text {...args} color="danger">
        Danger
      </Text>
      <Text {...args} color="warning">
        Warning
      </Text>
      <Text {...args} color="info">
        Info
      </Text>
      <Text {...args} color="success">
        Success
      </Text>
      <Text {...args} color="disabled">
        Disabled
      </Text>
    </div>
  ),
};

export const Unselectable: Story = {
  name: 'Unselectable Text',
  args: {
    children: 'This text cannot be selected or highlighted.',
    unselectable: true,
  },
};
