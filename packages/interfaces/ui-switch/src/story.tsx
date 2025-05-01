import { useState } from 'react';

import { Switch } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
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
    children: null,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Switch>
      <Switch.Toggle />
      <Switch.Label>Default Switch</Switch.Label>
    </Switch>
  ),
};

export const Checked: Story = {
  render: () => (
    <Switch isChecked>
      <Switch.Toggle />
      <Switch.Label>Checked Switch</Switch.Label>
    </Switch>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Switch>
      <Switch.Toggle />
      <Switch.Label>Switch with helper text</Switch.Label>
      <Switch.HelperText>
        Additional information about the switch
      </Switch.HelperText>
    </Switch>
  ),
};

export const WithError: Story = {
  render: () => (
    <Switch hasError>
      <Switch.Toggle />
      <Switch.Label>Switch with error</Switch.Label>
      <Switch.HelperText>This field is required</Switch.HelperText>
    </Switch>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch isDisabled>
      <Switch.Toggle />
      <Switch.Label>Disabled Switch</Switch.Label>
    </Switch>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <Switch isDisabled isChecked>
      <Switch.Toggle />
      <Switch.Label>Disabled Checked Switch</Switch.Label>
    </Switch>
  ),
};

export const WithOnChange: Story = {
  render: () => (
    <Switch onChange={(checked) => console.log('Switch toggled:', checked)}>
      <Switch.Toggle />
      <Switch.Label>Interactive Switch (check console)</Switch.Label>
    </Switch>
  ),
};

export const LabelAfterToggle: Story = {
  render: () => (
    <Switch>
      <Switch.Label>Label after toggle</Switch.Label>
      <Switch.Toggle />
    </Switch>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Switch isChecked={isChecked} onChange={setIsChecked}>
          <Switch.Toggle />
          <Switch.Label>
            Interactive State: {isChecked ? 'ON' : 'OFF'}
          </Switch.Label>
        </Switch>
        <div>
          <button
            onClick={() => setIsChecked(!isChecked)}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              background: 'var(--colors-main-picollo)',
              color: 'var(--colors-main-goten)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Toggle Switch
          </button>
        </div>
      </div>
    );
  },
};

export const FlexibleLayout: Story = {
  render: () => (
    <Switch>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch.Toggle />
        <div>
          <Switch.Label style={{ display: 'block', marginBottom: '4px' }}>
            Compound Part Structure
          </Switch.Label>
          <div style={{ fontSize: '12px', color: 'gray' }}>
            Toggle is a sibling of Label, not nested inside it
          </div>
        </div>
      </div>
      <Switch.HelperText>
        This demonstrates the flexible component structure
      </Switch.HelperText>
    </Switch>
  ),
};

export const SiblingComponents: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Switch isChecked={isChecked} onChange={setIsChecked}>
        <Switch.Toggle />
        <Switch.Label>
          Interactive State: {isChecked ? 'ON' : 'OFF'}
        </Switch.Label>
      </Switch>
    );
  },
};
