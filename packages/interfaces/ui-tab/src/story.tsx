import { Icon } from '@react-beauty/ui-icon';
import { Tag } from '@react-beauty/ui-tag';
import { useState } from 'react';

import { Tabs } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    value: 'tab1',
    onValueChange: () => {},
    children: null,
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const BasicTabsDemo = () => {
  const [value, setValue] = useState('tab1');

  return (
    <div style={{ width: '400px' }}>
      <Tabs value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Recent</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLabel>Popular</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab3">
            <Tabs.ItemLabel>Trending</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>

      {/* Content managed by consumer */}
      {value === 'tab1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Recent Content</h3>
          <p>This is the recent content tab.</p>
        </div>
      )}
      {value === 'tab2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Popular Content</h3>
          <p>This is the popular content tab.</p>
        </div>
      )}
      {value === 'tab3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Trending Content</h3>
          <p>This is the trending content tab.</p>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <BasicTabsDemo />,
  args: {
    value: 'tab1',
    onValueChange: () => {},
    children: null,
  },
};

const TabsWithIconsDemo = () => {
  const [value, setValue] = useState('tab1');

  return (
    <div style={{ width: '400px' }}>
      <Tabs value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLead>
              <Icon name="genericHome" size="xs" />
            </Tabs.ItemLead>
            <Tabs.ItemLabel>Schedule</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLead>
              <Icon name="genericSettings" size="xs" />
            </Tabs.ItemLead>
            <Tabs.ItemLabel>Settings</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab3">
            <Tabs.ItemLead>
              <Icon name="genericUser" size="xs" />
            </Tabs.ItemLead>
            <Tabs.ItemLabel>Profile</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>

      {/* Content managed by consumer */}
      {value === 'tab1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Schedule Content</h3>
          <p>View and manage your schedule here.</p>
        </div>
      )}
      {value === 'tab2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Settings Content</h3>
          <p>Adjust your application settings here.</p>
        </div>
      )}
      {value === 'tab3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Profile Content</h3>
          <p>View and edit your profile information.</p>
        </div>
      )}
    </div>
  );
};

export const WithIcons: Story = {
  render: () => <TabsWithIconsDemo />,
};

const TabsWithBadgesDemo = () => {
  const [value, setValue] = useState('tab1');

  return (
    <div style={{ width: '400px' }}>
      <Tabs value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Inbox</Tabs.ItemLabel>
            <Tabs.ItemTrail>
              <Tag size="sm">5</Tag>
            </Tabs.ItemTrail>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLabel>Sent</Tabs.ItemLabel>
            <Tabs.ItemTrail>
              <Tag size="sm">New</Tag>
            </Tabs.ItemTrail>
          </Tabs.Item>
          <Tabs.Item value="tab3" disabled>
            <Tabs.ItemLabel>Trash</Tabs.ItemLabel>
            <Tabs.ItemTrail>
              <Tag size="sm">99+</Tag>
            </Tabs.ItemTrail>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>

      {/* Content managed by consumer */}
      {value === 'tab1' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Inbox Content</h3>
          <p>View your incoming messages.</p>
        </div>
      )}
      {value === 'tab2' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Sent Content</h3>
          <p>View your sent messages.</p>
        </div>
      )}
      {value === 'tab3' && (
        <div style={{ paddingTop: '16px' }}>
          <h3>Trash Content</h3>
          <p>View your deleted messages.</p>
        </div>
      )}
    </div>
  );
};

export const WithBadges: Story = {
  render: () => <TabsWithBadgesDemo />,
};

const TabTypeVariantsDemo = () => {
  const [underlineValue, setUnderlineValue] = useState('tab1');
  const [pillValue, setPillValue] = useState('tab1');
  const [ghostValue, setGhostValue] = useState('tab1');

  return (
    <div
      style={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <div>
        <h3>Underline Tabs (Default)</h3>
        <Tabs
          value={underlineValue}
          onValueChange={setUnderlineValue}
          type="underline"
        >
          <Tabs.List>
            <Tabs.Item value="tab1">
              <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab2">
              <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab3">
              <Tabs.ItemLabel>Tab 3</Tabs.ItemLabel>
            </Tabs.Item>
          </Tabs.List>
        </Tabs>
        {underlineValue && (
          <div style={{ paddingTop: '16px' }}>
            <p>Content for {underlineValue}</p>
          </div>
        )}
      </div>

      <div>
        <h3>Pill Tabs</h3>
        <Tabs value={pillValue} onValueChange={setPillValue} type="pill">
          <Tabs.List>
            <Tabs.Item value="tab1">
              <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab2">
              <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab3">
              <Tabs.ItemLabel>Tab 3</Tabs.ItemLabel>
            </Tabs.Item>
          </Tabs.List>
        </Tabs>
        {pillValue && (
          <div style={{ paddingTop: '16px' }}>
            <p>Content for {pillValue}</p>
          </div>
        )}
      </div>

      <div>
        <h3>Ghost Tabs</h3>
        <Tabs value={ghostValue} onValueChange={setGhostValue} type="ghost">
          <Tabs.List>
            <Tabs.Item value="tab1">
              <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab2">
              <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
            </Tabs.Item>
            <Tabs.Item value="tab3">
              <Tabs.ItemLabel>Tab 3</Tabs.ItemLabel>
            </Tabs.Item>
          </Tabs.List>
        </Tabs>
        {ghostValue && (
          <div style={{ paddingTop: '16px' }}>
            <p>Content for {ghostValue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const TabTypes: Story = {
  render: () => <TabTypeVariantsDemo />,
};
