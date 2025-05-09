import { useState } from 'react';

import { RadioGroup, RadioInput } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Radio',
  component: RadioGroup,
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
    name: 'radio-name',
    selectedValue: '',
    onValueChange: () => {},
    children: null as unknown as ReactNode,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'basic-radio',
    selectedValue: 'option1',
    onValueChange: () => {},
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
    </RadioGroup>
  ),
};

export const WithHelperText: Story = {
  args: {
    name: 'helper-radio',
    selectedValue: 'option1',
    onValueChange: () => {},
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>
        This is a group-level helper text
      </RadioGroup.HelperText>
    </RadioGroup>
  ),
};

export const WithError: Story = {
  args: {
    name: 'error-radio',
    selectedValue: 'option1',
    onValueChange: () => {},
    hasError: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>This is an error message</RadioGroup.HelperText>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: {
    name: 'disabled-radio',
    selectedValue: 'option1',
    onValueChange: () => {},
    isDisabled: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>This radio is disabled</RadioGroup.HelperText>
    </RadioGroup>
  ),
};

export const RadioGroupExample: Story = {
  args: {
    name: 'radio-group',
  },
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <RadioGroup
        name="radio-group"
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
      >
        <RadioInput value="option1">
          <RadioInput.Field data-testid="radio-1" />
          <RadioInput.Label>Option 1</RadioInput.Label>
        </RadioInput>
        <RadioInput value="option2">
          <RadioInput.Field data-testid="radio-2" />
          <RadioInput.Label>Option 2</RadioInput.Label>
        </RadioInput>
        <RadioInput value="option3">
          <RadioInput.Field data-testid="radio-3" />
          <RadioInput.Label>Option 3</RadioInput.Label>
        </RadioInput>
      </RadioGroup>
    );
  },
};

export const RadioGroupWithError: Story = {
  args: {
    name: 'error-radio-group',
    hasError: true,
  },
  render: () => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <>
        <RadioGroup
          name="error-radio-group"
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          hasError
        >
          <RadioInput value="option1">
            <RadioInput.Field />
            <RadioInput.Label>Option 1</RadioInput.Label>
          </RadioInput>
          <RadioInput value="option2">
            <RadioInput.Field />
            <RadioInput.Label>Option 2</RadioInput.Label>
          </RadioInput>
          <RadioInput value="option3">
            <RadioInput.Field />
            <RadioInput.Label>Option 3</RadioInput.Label>
          </RadioInput>
        </RadioGroup>
        <div
          style={{ marginTop: '8px', color: 'var(--colors-supportive-chichi)' }}
        >
          Please select an option
        </div>
      </>
    );
  },
};

export const RadioGroupDisabled: Story = {
  args: {
    name: 'disabled-radio-group',
    isDisabled: true,
  },
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option2');

    return (
      <RadioGroup
        name="disabled-radio-group"
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
        isDisabled
      >
        <RadioInput value="option1">
          <RadioInput.Field />
          <RadioInput.Label>Option 1</RadioInput.Label>
        </RadioInput>
        <RadioInput value="option2">
          <RadioInput.Field />
          <RadioInput.Label>Option 2</RadioInput.Label>
        </RadioInput>
        <RadioInput value="option3">
          <RadioInput.Field />
          <RadioInput.Label>Option 3</RadioInput.Label>
        </RadioInput>
      </RadioGroup>
    );
  },
};

export const Interactive: Story = {
  args: {
    name: 'interactive-radio-group',
  },
  render: () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [error, setError] = useState(true);

    const handleChange = (value: string) => {
      setSelectedValue(value);
      setError(false);
    };

    return (
      <>
        <RadioGroup
          name="interactive-radio-group"
          selectedValue={selectedValue}
          onValueChange={handleChange}
          hasError={error}
        >
          <RadioInput value="option1">
            <RadioInput.Field />
            <RadioInput.Label>Small</RadioInput.Label>
          </RadioInput>
          <RadioInput value="option2">
            <RadioInput.Field />
            <RadioInput.Label>Medium</RadioInput.Label>
          </RadioInput>
          <RadioInput value="option3">
            <RadioInput.Field />
            <RadioInput.Label>Large</RadioInput.Label>
          </RadioInput>
        </RadioGroup>
        {error && (
          <div
            style={{
              marginTop: '8px',
              color: 'var(--colors-supportive-chichi)',
            }}
          >
            Please select a size
          </div>
        )}
      </>
    );
  },
};
