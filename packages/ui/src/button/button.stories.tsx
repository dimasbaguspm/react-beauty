import { Star, ArrowRight } from 'lucide-react';
import React from 'react';

import { Button } from './button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: [
        'primary',
        'primary-outline',
        'primary-ghost',
        'surface',
        'surface-outline',
        'surface-ghost',
        'danger',
        'danger-outline',
        'danger-ghost',
        'success',
        'success-outline',
        'success-ghost',
        'info',
        'info-outline',
        'info-ghost',
        'warning',
        'warning-outline',
        'warning-ghost',
      ],
      description: 'The button variant (visual style).',
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled.',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
};
export const PrimaryOutline: Story = {
  args: { children: 'Primary Outline', variant: 'primary-outline' },
};
export const PrimaryGhost: Story = {
  args: { children: 'Primary Ghost', variant: 'primary-ghost' },
};
export const Surface: Story = {
  args: { children: 'Surface', variant: 'surface' },
};
export const SurfaceOutline: Story = {
  args: { children: 'Surface Outline', variant: 'surface-outline' },
};
export const SurfaceGhost: Story = {
  args: { children: 'Surface Ghost', variant: 'surface-ghost' },
};
export const Danger: Story = {
  args: { children: 'Danger', variant: 'danger' },
};
export const DangerOutline: Story = {
  args: { children: 'Danger Outline', variant: 'danger-outline' },
};
export const DangerGhost: Story = {
  args: { children: 'Danger Ghost', variant: 'danger-ghost' },
};
export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
};
export const SuccessOutline: Story = {
  args: { children: 'Success Outline', variant: 'success-outline' },
};
export const SuccessGhost: Story = {
  args: { children: 'Success Ghost', variant: 'success-ghost' },
};
export const Info: Story = {
  args: { children: 'Info', variant: 'info' },
};
export const InfoOutline: Story = {
  args: { children: 'Info Outline', variant: 'info-outline' },
};
export const InfoGhost: Story = {
  args: { children: 'Info Ghost', variant: 'info-ghost' },
};
export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
};
export const WarningOutline: Story = {
  args: { children: 'Warning Outline', variant: 'warning-outline' },
};
export const WarningGhost: Story = {
  args: { children: 'Warning Ghost', variant: 'warning-ghost' },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Left Icon',
    iconLeft: <Star size={16} aria-label="star" />,
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Right Icon',
    iconRight: <ArrowRight size={16} aria-label="arrow" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Both Icons',
    iconLeft: <Star size={16} aria-label="star" />,
    iconRight: <ArrowRight size={16} aria-label="arrow" />,
  },
};
