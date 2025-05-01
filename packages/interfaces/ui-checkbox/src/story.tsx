import { useState } from 'react';

import { CheckboxGroup, CheckboxInput } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
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
    value: 'checkbox-value',
    onValueChange: () => {},
    children: null as unknown as ReactNode,
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'basic-checkbox',
  },
  render: (args) => (
    <CheckboxInput {...args}>
      <CheckboxInput.Field />
      <CheckboxInput.Label>Basic Checkbox</CheckboxInput.Label>
    </CheckboxInput>
  ),
};

export const WithHelperText: Story = {
  args: {
    value: 'helper-checkbox',
  },
  render: (args) => (
    <CheckboxGroup name="standalone-checkbox">
      <CheckboxInput {...args}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Checkbox with helper text</CheckboxInput.Label>
      </CheckboxInput>
      <CheckboxGroup.HelperText>This is a helper text</CheckboxGroup.HelperText>
    </CheckboxGroup>
  ),
};

export const WithError: Story = {
  args: {
    value: 'error-checkbox',
  },
  render: (args) => (
    <CheckboxGroup name="error-checkbox" hasError>
      <CheckboxInput {...args}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Error state checkbox</CheckboxInput.Label>
      </CheckboxInput>
      <CheckboxGroup.HelperText>
        This field is required
      </CheckboxGroup.HelperText>
    </CheckboxGroup>
  ),
};

export const Disabled: Story = {
  args: {
    value: 'disabled-checkbox',
    isDisabled: true,
  },
  render: (args) => (
    <CheckboxGroup name="disabled-checkbox" isDisabled>
      <CheckboxInput {...args}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Disabled checkbox</CheckboxInput.Label>
      </CheckboxInput>
      <CheckboxGroup.HelperText>
        This option is disabled
      </CheckboxGroup.HelperText>
    </CheckboxGroup>
  ),
};

export const CheckboxGroupExample: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([
      'option-1',
    ]);

    return (
      <CheckboxGroup
        name="checkbox-group"
        values={selectedValues}
        onValueChange={setSelectedValues}
      >
        <CheckboxInput value="option-1">
          <CheckboxInput.Field data-testid="checkbox-1" />
          <CheckboxInput.Label>Option 1</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="option-2">
          <CheckboxInput.Field data-testid="checkbox-2" />
          <CheckboxInput.Label>Option 2</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="option-3">
          <CheckboxInput.Field data-testid="checkbox-3" />
          <CheckboxInput.Label>Option 3</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxGroup.HelperText>
          Select one or more options
        </CheckboxGroup.HelperText>
      </CheckboxGroup>
    );
  },
};

export const CheckboxGroupWithError: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
      <CheckboxGroup
        name="error-checkbox-group"
        values={selectedValues}
        onValueChange={setSelectedValues}
        hasError
      >
        <CheckboxInput value="option-1">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 1</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="option-2">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 2</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="option-3">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 3</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxGroup.HelperText>
          Please select at least one option
        </CheckboxGroup.HelperText>
      </CheckboxGroup>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [error, setError] = useState(true);

    const handleChange = (values: string[]) => {
      setSelectedValues(values);
      setError(values.length === 0);
    };

    return (
      <CheckboxGroup
        name="interactive-checkbox-group"
        values={selectedValues}
        onValueChange={handleChange}
        hasError={error}
      >
        <CheckboxInput value="small">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Small</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="medium">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Medium</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="large">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Large</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxGroup.HelperText>
          {error
            ? 'Please select at least one option'
            : 'Thank you for your selection'}
        </CheckboxGroup.HelperText>
      </CheckboxGroup>
    );
  },
};
