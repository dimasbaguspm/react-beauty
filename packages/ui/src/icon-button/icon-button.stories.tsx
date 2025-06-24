import {
  Sun,
  Moon,
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
  Loader2,
} from 'lucide-react';
import React from 'react';

import { IconButton } from './icon-button';
import { IconButtonVariant } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'radio',
      options: ['rounded', 'semi-square'],
    },
    variant: {
      control: 'select',
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
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'aria-label': { control: 'text' },
  },
  args: {
    size: 'md',
    shape: 'rounded',
    variant: 'primary',
    isLoading: false,
    disabled: false,
    'aria-label': 'Icon button',
    children: <Sun />,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Accessible, theme-aware icon button for React Beauty UI. Only accepts an icon as children. Supports all standard variants.',
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Sun />,
    'aria-label': 'Sun',
  },
};

export const AllVariants: Story = {
  render: (args) => {
    const icons = {
      primary: <Sun />,
      'primary-outline': <Sun />,
      'primary-ghost': <Sun />,
      surface: <Moon />,
      'surface-outline': <Moon />,
      'surface-ghost': <Moon />,
      danger: <XCircle />,
      'danger-outline': <XCircle />,
      'danger-ghost': <XCircle />,
      success: <CheckCircle2 />,
      'success-outline': <CheckCircle2 />,
      'success-ghost': <CheckCircle2 />,
      info: <Info />,
      'info-outline': <Info />,
      'info-ghost': <Info />,
      warning: <AlertTriangle />,
      'warning-outline': <AlertTriangle />,
      'warning-ghost': <AlertTriangle />,
    };
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {meta.argTypes.variant.options.map((variant) => (
          <IconButton
            key={variant}
            {...args}
            variant={variant as IconButtonVariant}
            children={icons[variant as IconButtonVariant]}
            aria-label={variant}
          />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <IconButton {...args} size="sm" aria-label="Small">
        <Sun />
      </IconButton>
      <IconButton {...args} size="md" aria-label="Medium">
        <Sun />
      </IconButton>
      <IconButton {...args} size="lg" aria-label="Large">
        <Sun />
      </IconButton>
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <IconButton {...args} shape="rounded" aria-label="Rounded">
        <Moon />
      </IconButton>
      <IconButton {...args} shape="semi-square" aria-label="Semi Square">
        <Moon />
      </IconButton>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: <Loader2 className="animate-spin" />,
    'aria-label': 'Loading',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Sun />,
    'aria-label': 'Disabled',
  },
};
