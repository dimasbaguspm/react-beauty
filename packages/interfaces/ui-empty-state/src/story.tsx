import { EmptyState } from '.';

import type { Meta } from '@react-beauty/storybook';

const meta = {
  title: 'Empty State',
  render: (args) => (
    <EmptyState {...args}>
      <EmptyState.Title>Main title</EmptyState.Title>
      <EmptyState.Description>
        The body copy explains the empty state. The icon relates to the
        situation
      </EmptyState.Description>
    </EmptyState>
  ),
} satisfies Meta<typeof EmptyState>;

export const Text = {};

export const WithIcon = {
  render: (args) => (
    <EmptyState {...args}>
      <EmptyState.Icon />
      <EmptyState.Title>Main title</EmptyState.Title>
      <EmptyState.Description>
        The body copy explains the empty state. The icon relates to the
        situation
      </EmptyState.Description>
    </EmptyState>
  ),
} satisfies Meta<typeof EmptyState>;

export default meta;
