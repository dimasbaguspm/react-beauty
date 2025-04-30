import { useState } from 'react';

import { TextArea } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Text Area',
  component: TextArea,
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <TextArea>
      <TextArea.Label htmlFor="basic-textarea">Label</TextArea.Label>
      <TextArea.Field id="basic-textarea" placeholder="Placeholder text..." />
    </TextArea>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <TextArea>
      <TextArea.Label htmlFor="helper-textarea">Label</TextArea.Label>
      <TextArea.Field id="helper-textarea" placeholder="Placeholder text..." />
      <TextArea.HelperText>This is a helper text</TextArea.HelperText>
    </TextArea>
  ),
};

export const WithError: Story = {
  render: () => (
    <TextArea hasError>
      <TextArea.Label htmlFor="error-textarea">Label</TextArea.Label>
      <TextArea.Field id="error-textarea" placeholder="Placeholder text..." />
      <TextArea.HelperText>This field is required</TextArea.HelperText>
    </TextArea>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextArea isDisabled>
      <TextArea.Label htmlFor="disabled-textarea">Label</TextArea.Label>
      <TextArea.Field
        id="disabled-textarea"
        placeholder="Placeholder text..."
        defaultValue="Disabled textarea"
      />
    </TextArea>
  ),
};

export const Resizable: Story = {
  render: () => (
    <TextArea>
      <TextArea.Label htmlFor="resizable-textarea">Resizable</TextArea.Label>
      <TextArea.Field
        id="resizable-textarea"
        placeholder="This textarea can be resized by the user..."
        rows={4}
        style={{ resize: 'both' }}
      />
      <TextArea.HelperText>
        Resize from the bottom right corner
      </TextArea.HelperText>
    </TextArea>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      setError(newValue.length < 10);
    };

    return (
      <TextArea hasError={error}>
        <TextArea.Label htmlFor="interactive-textarea">
          Description (min 10 chars)
        </TextArea.Label>
        <TextArea.Field
          id="interactive-textarea"
          value={value}
          onChange={handleChange}
          placeholder="Enter description..."
          rows={4}
        />
        <TextArea.HelperText>
          Description must be at least 10 characters
        </TextArea.HelperText>
      </TextArea>
    );
  },
};

export const ErrorHandlingExample: Story = {
  args: {
    children: null as unknown as ReactNode,
  },
  render: () => (
    <TextArea hasError>
      <TextArea.Label htmlFor="container-error">
        Form Field with Error
      </TextArea.Label>
      <TextArea.Field
        id="container-error"
        placeholder="Textarea with error state..."
        rows={3}
      />
      <TextArea.HelperText>
        Error message displayed automatically when TextArea has hasError=true
      </TextArea.HelperText>
    </TextArea>
  ),
};
