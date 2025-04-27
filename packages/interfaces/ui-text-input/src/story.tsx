import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

import { TextInput } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Text Input',
  component: TextInput,
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
    children: null as unknown as ReactNode,
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <TextInput>
      <TextInput.Label htmlFor="basic-input">Label</TextInput.Label>
      <TextInput.Field id="basic-input" placeholder="Placeholder text..." />
    </TextInput>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <TextInput>
      <TextInput.Label htmlFor="helper-input">Label</TextInput.Label>
      <TextInput.Field id="helper-input" placeholder="Placeholder text..." />
      <TextInput.HelperText>This is a helper text</TextInput.HelperText>
    </TextInput>
  ),
};

export const WithError: Story = {
  render: () => (
    <TextInput hasError>
      <TextInput.Label htmlFor="error-input">Label</TextInput.Label>
      <TextInput.Field id="error-input" placeholder="Placeholder text..." />
      <TextInput.HelperText>This field is required</TextInput.HelperText>
    </TextInput>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextInput isDisabled>
      <TextInput.Label htmlFor="disabled-input">Label</TextInput.Label>
      <TextInput.Field
        id="disabled-input"
        placeholder="Placeholder text..."
        value="Disabled input"
      />
    </TextInput>
  ),
};

export const WithLeadElement: Story = {
  render: () => (
    <TextInput>
      <TextInput.Label htmlFor="lead-input">Amount</TextInput.Label>
      <TextInput.Field id="lead-input" placeholder="0.00" />
      <TextInput.LeadElement>
        <Icon name="chartRound" size="md" />
      </TextInput.LeadElement>
    </TextInput>
  ),
};

export const WithTrailElement: Story = {
  render: () => (
    <TextInput>
      <TextInput.Label htmlFor="trail-input">Email</TextInput.Label>
      <TextInput.Field id="trail-input" placeholder="example@domain.com" />
      <TextInput.TrailElement>
        <Icon name="mailEmailStats" size="md" />
      </TextInput.TrailElement>
    </TextInput>
  ),
};

export const WithBothElements: Story = {
  render: () => (
    <TextInput>
      <TextInput.Label htmlFor="both-input">Search</TextInput.Label>
      <TextInput.Field id="both-input" placeholder="Search..." />
      <TextInput.LeadElement>
        <Icon name="otherFrame" size="md" />
      </TextInput.LeadElement>
      <TextInput.TrailElement>
        <Icon name="controlsCloseSmall" size="md" />
      </TextInput.TrailElement>
    </TextInput>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      setError(newValue.length < 3);
    };

    return (
      <TextInput hasError={error}>
        <TextInput.Label htmlFor="interactive-input">
          Username (min 3 chars)
        </TextInput.Label>
        <TextInput.Field
          id="interactive-input"
          value={value}
          onChange={handleChange}
          placeholder="Enter username..."
        />
        <TextInput.TrailElement>
          <Icon name="controlsCloseSmall" size="md" />
        </TextInput.TrailElement>
        <TextInput.HelperText>
          Username must be at least 3 characters
        </TextInput.HelperText>
      </TextInput>
    );
  },
};

// Update to show only the container-level error API
export const ErrorHandlingExample: Story = {
  args: {
    children: null as unknown as ReactNode,
  },
  render: () => (
    <TextInput hasError>
      <TextInput.Label htmlFor="container-error">
        Form Field with Error
      </TextInput.Label>
      <TextInput.Field
        id="container-error"
        placeholder="Input with error state..."
      />
      <TextInput.HelperText>
        Error message displayed automatically when TextInput has hasError=true
      </TextInput.HelperText>
    </TextInput>
  ),
};
