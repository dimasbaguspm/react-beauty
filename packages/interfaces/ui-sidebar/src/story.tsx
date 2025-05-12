import { Button } from '@react-beauty/ui-button';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

import { Sidebar } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--colors-main-goku)',
        },
      ],
    },
  },
  args: {
    isExpanded: true,
    onExpandedChange: () => {},
    children: null as unknown as ReactNode,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          color: 'var(--colors-main-bulma)',
        }}
      >
        <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Sidebar.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-main-picollo)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                RB
              </span>
              {isExpanded && (
                <span style={{ fontWeight: 'bold' }}>React Beauty</span>
              )}
            </div>
            <Sidebar.ToggleButton />
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Section>
              <Sidebar.SectionTitle>Main</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon size="md" name="genericHome" />}
                  active
                  onClick={() => {}}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericUser" />}
                  onClick={() => {}}
                >
                  Profile
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericSettings" />}
                  onClick={() => {}}
                >
                  Settings
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />

            <Sidebar.Section>
              <Sidebar.SectionTitle>Tools</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="chartLine" />}
                  onClick={() => {}}
                >
                  Analytics
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="devicesMac" />}
                  onClick={() => {}}
                >
                  Devices
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericLogOut" />}
                  onClick={() => {}}
                >
                  Logout
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Footer>
        </Sidebar>
        <div
          style={{
            padding: '24px',
          }}
        >
          <h1>Main Content Area</h1>
          <p>
            This is the main content that adjusts based on the sidebar width.
          </p>
        </div>
      </div>
    );
  },
};

export const WithSections: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          color: 'var(--colors-main-bulma)',
        }}
      >
        <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Sidebar.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-main-picollo)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                RB
              </span>
              {isExpanded && (
                <span style={{ fontWeight: 'bold' }}>React Beauty</span>
              )}
            </div>
            <Sidebar.ToggleButton />
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Section>
              <Sidebar.SectionTitle>Main</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericHome" />}
                  active
                  onClick={() => {}}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericUser" />}
                  onClick={() => {}}
                >
                  Profile
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericSettings" />}
                  onClick={() => {}}
                >
                  Settings
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />

            <Sidebar.Section>
              <Sidebar.SectionTitle>Reports</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="chartLine" />}
                  onClick={() => {}}
                >
                  Analytics
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="devicesMac" />}
                  onClick={() => {}}
                >
                  Devices
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="chartDashboard" />}
                  onClick={() => {}}
                >
                  Statistics
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />

            <Sidebar.Section>
              <Sidebar.SectionTitle>Account</Sidebar.SectionTitle>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericUser" />}
                  onClick={() => {}}
                >
                  My Account
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="securityShield" />}
                  onClick={() => {}}
                >
                  Security
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="notificationsBellAlarm" />}
                  onClick={() => {}}
                >
                  Notifications
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />
          </Sidebar.Body>
          <Sidebar.Footer>
            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericLogOut" />}
                  onClick={() => {}}
                >
                  Logout
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Footer>
        </Sidebar>
        <div
          style={{
            padding: '24px',
          }}
        >
          <h1>Main Content Area</h1>
          <p>
            This is the main content that adjusts based on the sidebar width.
          </p>
        </div>
      </div>
    );
  },
};

export const WithCustomToggle: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          color: 'var(--colors-main-bulma)',
        }}
      >
        <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Sidebar.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-main-picollo)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                RB
              </span>
              {isExpanded && (
                <span style={{ fontWeight: 'bold' }}>React Beauty</span>
              )}
            </div>
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericHome" />}
                  active
                  onClick={() => {}}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericUser" />}
                  onClick={() => {}}
                >
                  Profile
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericSettings" />}
                  onClick={() => {}}
                >
                  Settings
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />

            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="chartLine" />}
                  onClick={() => {}}
                >
                  Analytics
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="devicesMac" />}
                  onClick={() => {}}
                >
                  Devices
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
          </Sidebar.Footer>
        </Sidebar>
        <div
          style={{
            padding: '24px',
          }}
        >
          <h1>Main Content Area</h1>
          <p>
            This is the main content that adjusts based on the sidebar width.
          </p>
        </div>
      </div>
    );
  },
};

export const InitiallyCollapsed: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          color: 'var(--colors-main-bulma)',
        }}
      >
        <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Sidebar.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-main-picollo)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                RB
              </span>
              {isExpanded && (
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  React Beauty
                </span>
              )}
            </div>
            <Sidebar.ToggleButton />
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericHome" />}
                  active
                  onClick={() => {}}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericUser" />}
                  onClick={() => {}}
                >
                  Profile
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="genericSettings" />}
                  onClick={() => {}}
                >
                  Settings
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>

            <Sidebar.Divider />

            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="chartLine" />}
                  onClick={() => {}}
                >
                  Analytics
                </Sidebar.Item>
                <Sidebar.Item
                  icon={<Icon name="devicesMac" />}
                  onClick={() => {}}
                >
                  Devices
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Sidebar.Section>
              <Sidebar.ItemList>
                <Sidebar.Item
                  icon={<Icon name="genericLogOut" />}
                  onClick={() => {}}
                >
                  Logout
                </Sidebar.Item>
              </Sidebar.ItemList>
            </Sidebar.Section>
          </Sidebar.Footer>
        </Sidebar>
        <div
          style={{
            padding: '24px',
          }}
        >
          <h1>Main Content Area</h1>
          <p>
            This is the main content that adjusts based on the sidebar width.
          </p>
          <p>The sidebar starts collapsed in this example.</p>
        </div>
      </div>
    );
  },
};
