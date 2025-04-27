import { Icon } from '@react-beauty/ui-icon';

import { Breadcrumb } from './index';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: '',
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Library</Breadcrumb.Link>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item isActive>
        <Breadcrumb.Link href="#">Current Page</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const WithIconDividers: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Divider>
          <Icon name="arrowsChevronRight" size="xs" />
        </Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
        <Breadcrumb.Divider>
          <Icon name="arrowsChevronRight" size="xs" />
        </Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">
          Categories Longest Text Text Text
        </Breadcrumb.Link>
        <Breadcrumb.Divider>
          <Icon name="arrowsChevronRight" size="xs" />
        </Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item isActive>
        <Breadcrumb.Link href="#">Electronics</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
};
