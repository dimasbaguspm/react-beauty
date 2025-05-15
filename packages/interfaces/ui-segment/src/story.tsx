import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

import { Segment } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Segment',
  component: Segment,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    value: 'segment1',
    onValueChange: () => {},
    children: null,
  },
} satisfies Meta<typeof Segment>;

export default meta;

type Story = StoryObj<typeof meta>;

const BasicSegmentDemo = () => {
  const [value, setValue] = useState('segment1');

  return (
    <div style={{ width: '400px' }}>
      <Segment value={value} onValueChange={setValue}>
        <Segment.Item value="segment1">Daily</Segment.Item>
        <Segment.Item value="segment2">Weekly</Segment.Item>
        <Segment.Item value="segment3">Monthly</Segment.Item>
      </Segment>

      {/* Content managed by consumer */}
      {value === 'segment1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Daily View</h3>
          <p>Showing daily statistics and metrics.</p>
        </div>
      )}
      {value === 'segment2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Weekly View</h3>
          <p>Showing weekly statistics and metrics.</p>
        </div>
      )}
      {value === 'segment3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Monthly View</h3>
          <p>Showing monthly statistics and metrics.</p>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <BasicSegmentDemo />,
  args: {
    value: 'segment1',
    onValueChange: () => {},
    children: null,
  },
};

const SegmentWithIconsDemo = () => {
  const [value, setValue] = useState('segment1');

  return (
    <div style={{ width: '400px' }}>
      <Segment value={value} onValueChange={setValue}>
        <Segment.Item value="segment1">
          <Icon name="genericBookmark" size="md" />
          Bookmark
        </Segment.Item>
        <Segment.Item value="segment2">
          <Icon name="genericStar" size="md" />
          Star
        </Segment.Item>
        <Segment.Item value="segment3">
          <Icon name="genericInfo" size="md" />
          Info
        </Segment.Item>
      </Segment>

      {/* Content managed by consumer */}
      {value === 'segment1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Bookmark View</h3>
          <p>Content in list format</p>
        </div>
      )}
      {value === 'segment2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Star</h3>
          <p>Bookmarked content</p>
        </div>
      )}
      {value === 'segment3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Info</h3>
          <p>Downloaded content</p>
        </div>
      )}
    </div>
  );
};

export const WithIcons: Story = {
  render: () => <SegmentWithIconsDemo />,
};

const IconOnlySegmentDemo = () => {
  const [value, setValue] = useState('segment1');

  return (
    <div style={{ width: '200px' }}>
      <Segment value={value} onValueChange={setValue}>
        <Segment.Item value="segment1">
          <Icon name="genericBookmark" size="md" />
        </Segment.Item>
        <Segment.Item value="segment2">
          <Icon name="genericStar" size="md" />
        </Segment.Item>
        <Segment.Item value="segment3">
          <Icon name="genericInfo" size="md" />
        </Segment.Item>
      </Segment>

      {/* Content managed by consumer */}
      {value === 'segment1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Bookmark View</h3>
          <p>Content in list format</p>
        </div>
      )}
      {value === 'segment2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Star</h3>
          <p>Bookmarked content</p>
        </div>
      )}
      {value === 'segment3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Info</h3>
          <p>Downloaded content</p>
        </div>
      )}
    </div>
  );
};

export const IconOnly: Story = {
  render: () => <IconOnlySegmentDemo />,
};
