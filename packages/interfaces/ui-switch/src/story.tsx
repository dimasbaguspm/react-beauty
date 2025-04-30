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
      <Switch.Label>
        <Switch.Toggle />
        Default Switch
      </Switch.Label>
    </Switch>
  ),
};

export const Checked: Story = {
  render: () => (
    <Switch isChecked>
      <Switch.Label>
        <Switch.Toggle />
        Checked Switch
      </Switch.Label>
    </Switch>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Switch>
      <Switch.Label>
        <Switch.Toggle />
        Switch with helper text
      </Switch.Label>
      <Switch.HelperText>
        Additional information about the switch
      </Switch.HelperText>
    </Switch>
  ),
};

export const WithError: Story = {
  render: () => (
    <Switch hasError>
      <Switch.Label>
        <Switch.Toggle />
        Switch with error
      </Switch.Label>
      <Switch.HelperText>This field is required</Switch.HelperText>
    </Switch>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch isDisabled>
      <Switch.Label>
        <Switch.Toggle />
        Disabled Switch
      </Switch.Label>
    </Switch>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <Switch isDisabled isChecked>
      <Switch.Label>
        <Switch.Toggle />
        Disabled Checked Switch
      </Switch.Label>
    </Switch>
  ),
};

export const WithOnChange: Story = {
  render: () => (
    <Switch onChange={(checked) => console.log('Switch toggled:', checked)}>
      <Switch.Label>
        <Switch.Toggle />
        Interactive Switch (check console)
      </Switch.Label>
    </Switch>
  ),
};

export const LabelAfterToggle: Story = {
  render: () => (
    <Switch>
      <Switch.Label>
        Label after toggle
        <Switch.Toggle />
      </Switch.Label>
    </Switch>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Switch isChecked={isChecked} onChange={setIsChecked}>
          <Switch.Label>
            <Switch.Toggle />
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
