import React from 'react';

import { Tooltip } from '.';

import type {
  TooltipPlacement,
  TooltipTriggerType,
} from './atoms/tooltip-context';
import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
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
  argTypes: {
    defaultVisible: {
      control: 'boolean',
      description: 'Is the tooltip visible by default',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'manual'],
      description: 'The interaction that triggers the tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic example with default configuration
export const Basic: Story = {
  render: () => (
    <Tooltip placement="top-center">
      <Tooltip.Trigger>
        <button>Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

// Showcase all possible placement options
export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10rem',
      }}
    >
      {[
        { name: 'Top Left', placement: 'top-left' },
        { name: 'Top Center', placement: 'top-center' },
        { name: 'Top Right', placement: 'top-right' },
        { name: 'Bottom Left', placement: 'bottom-left' },
        { name: 'Bottom Center', placement: 'bottom-center' },
        { name: 'Bottom Right', placement: 'bottom-right' },
        { name: 'Right Top', placement: 'right-top' },
        { name: 'Right Center', placement: 'right-center' },
        { name: 'Right Bottom', placement: 'right-bottom' },
        { name: 'Left Top', placement: 'left-top' },
        { name: 'Left Center', placement: 'left-center' },
        { name: 'Left Bottom', placement: 'left-bottom' },
      ].map(({ name, placement }) => (
        <Tooltip
          key={placement}
          trigger="hover"
          placement={placement as TooltipPlacement}
        >
          <Tooltip.Trigger>
            <button style={{ width: '100%' }}>{name}</button>
          </Tooltip.Trigger>
          <Tooltip.Content>{name} tooltip</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
};

// Showcase all trigger options
export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {[
        {
          type: 'hover' as TooltipTriggerType,
          label: 'Hover',
          description: 'Hover to show',
        },
        {
          type: 'click' as TooltipTriggerType,
          label: 'Click',
          description: 'Click to show/hide',
        },
        {
          type: 'manual' as TooltipTriggerType,
          label: 'Manual (Always visible)',
          description: 'Manually controlled',
          defaultVisible: true,
        },
      ].map(({ type, label, description, defaultVisible = false }) => (
        <Tooltip
          key={type}
          trigger={type}
          defaultVisible={defaultVisible}
          placement="top-center"
        >
          <Tooltip.Trigger>
            <button>{label}</button>
          </Tooltip.Trigger>
          <Tooltip.Content>{description}</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
};

// Showcase visual options
export const Styling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <Tooltip defaultVisible placement="top-center">
        <Tooltip.Trigger>
          <button>Default Tooltip</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Default tooltip with pointer and shadow
        </Tooltip.Content>
      </Tooltip>

      <Tooltip defaultVisible placement="top-center" pointer={false}>
        <Tooltip.Trigger>
          <button>No Pointer</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip without pointer</Tooltip.Content>
      </Tooltip>

      <Tooltip defaultVisible placement="top-center" shadow={false}>
        <Tooltip.Trigger>
          <button>No Shadow</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip without shadow</Tooltip.Content>
      </Tooltip>

      <Tooltip
        defaultVisible
        placement="top-center"
        pointer={false}
        shadow={false}
      >
        <Tooltip.Trigger>
          <button>No Pointer or Shadow</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip without pointer or shadow</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
