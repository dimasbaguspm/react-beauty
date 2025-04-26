import React from 'react';

import { Tooltip } from '.';

import type { TooltipPlacement } from '.';
import type { TooltipTriggerType } from './atoms/tooltip-context';
import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
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
    <Tooltip>
      <Tooltip.Trigger>
        <button>Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Content placement="top">This is a tooltip</Tooltip.Content>
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
        gap: '1rem',
      }}
    >
      {[
        { name: 'Top', placement: 'top' as TooltipPlacement },
        { name: 'Right', placement: 'right' as TooltipPlacement },
        { name: 'Bottom', placement: 'bottom' as TooltipPlacement },
        { name: 'Left', placement: 'left' as TooltipPlacement },
        { name: 'Center Top', placement: 'center-top' as TooltipPlacement },
        {
          name: 'Center Bottom',
          placement: 'center-bottom' as TooltipPlacement,
        },
      ].map(({ name, placement }) => (
        <Tooltip key={placement}>
          <Tooltip.Trigger>
            <button>{name}</button>
          </Tooltip.Trigger>
          <Tooltip.Content placement={placement}>
            {name} tooltip
          </Tooltip.Content>
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
        <Tooltip key={type} trigger={type} defaultVisible={defaultVisible}>
          <Tooltip.Trigger>
            <button>{label}</button>
          </Tooltip.Trigger>
          <Tooltip.Content placement="top">{description}</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
};

// Showcase visual options
export const Styling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>Default Tooltip</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">
          Default tooltip with pointer and shadow
        </Tooltip.Content>
      </Tooltip>

      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>No Pointer</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top" pointer={false}>
          Tooltip without pointer
        </Tooltip.Content>
      </Tooltip>

      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>No Shadow</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top" shadow={false}>
          Tooltip without shadow
        </Tooltip.Content>
      </Tooltip>

      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>No Pointer or Shadow</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top" pointer={false} shadow={false}>
          Tooltip without pointer or shadow
        </Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
