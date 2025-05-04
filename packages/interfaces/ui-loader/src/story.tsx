import { Meta, StoryObj } from '@react-beauty/storybook';

import { Loader } from '.';

const meta = {
  title: 'Loader',
  component: Loader,
  argTypes: {
    type: {
      control: 'select',
      options: ['circular', 'linear'],
    },
  },
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
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
