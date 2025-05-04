import { Meta, StoryObj } from '@react-beauty/storybook';

import { Loader } from '.';

const meta = {
  title: 'Loader',
  component: Loader,
  argTypes: {
    isLoading: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['circular', 'linear'],
    },
  },
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    isLoading: true,
    type: 'circular',
  },
  render: (args) => (
    <div style={{ padding: '2rem', height: '200px', position: 'relative' }}>
      <Loader {...args}>
        <Loader.Spinner />
      </Loader>
    </div>
  ),
} satisfies Story;

export const WithText = {
  args: {
    isLoading: true,
    type: 'circular',
  },
  render: (args) => (
    <div style={{ padding: '2rem', height: '200px', position: 'relative' }}>
      <Loader {...args}>
        <Loader.Spinner />
        <Loader.Text>Loading...</Loader.Text>
      </Loader>
    </div>
  ),
} satisfies Story;

export const LinearType = {
  args: {
    isLoading: true,
    type: 'linear',
  },
  render: (args) => (
    <div style={{ padding: '2rem', height: '200px', position: 'relative' }}>
      <Loader {...args}>
        <Loader.Spinner />
        <Loader.Text>Loading content...</Loader.Text>
      </Loader>
    </div>
  ),
} satisfies Story;

export default meta;
