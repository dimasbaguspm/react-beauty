import { Icon } from '@react-beauty/ui-icon';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select } from './index';

// Consistent layout wrapper for all stories
const StoryLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minWidth: '300px' }}>{children}</div>
);

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

// Basic Select
export const Basic: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
      </Select>
    </StoryLayout>
  ),
};

// Controlled Select
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    return (
      <StoryLayout>
        <Select value={value} onValueChange={handleChange}>
          <Select.Label>Controlled select</Select.Label>
          <Select.Field>
            <Select.Option value="option1">Option 1</Select.Option>
            <Select.Option value="option2">Option 2</Select.Option>
            <Select.Option value="option3">Option 3</Select.Option>
          </Select.Field>
          <Select.HelperText>Selected value: {value}</Select.HelperText>
        </Select>
      </StoryLayout>
    );
  },
};

// Select with Helper Text
export const WithHelperText: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
        <Select.HelperText>
          Please select one option from the list
        </Select.HelperText>
      </Select>
    </StoryLayout>
  ),
};

// Select with Error State
export const WithError: Story = {
  render: () => (
    <StoryLayout>
      <Select hasError>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
        <Select.HelperText>This field is required</Select.HelperText>
      </Select>
    </StoryLayout>
  ),
};

// Disabled Select
export const Disabled: Story = {
  render: () => (
    <StoryLayout>
      <Select isDisabled>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
        <Select.HelperText>This field is disabled</Select.HelperText>
      </Select>
    </StoryLayout>
  ),
};

// With Disabled Option
export const WithDisabledOption: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2" disabled>
            Option 2 (Disabled)
          </Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
      </Select>
    </StoryLayout>
  ),
};

// With Lead Element
export const WithLeadElement: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.LeadElement>
          <Icon name="otherFrame" />
        </Select.LeadElement>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
      </Select>
    </StoryLayout>
  ),
};

// With Trail Element
export const WithTrailElement: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
        <Select.TrailElement>
          <Icon name="controlsChevronDown" />
        </Select.TrailElement>
      </Select>
    </StoryLayout>
  ),
};

// With Both Lead and Trail Elements
export const WithBothLeadAndTrailElements: Story = {
  render: () => (
    <StoryLayout>
      <Select>
        <Select.LeadElement>
          <Icon name="otherFrame" />
        </Select.LeadElement>
        <Select.Label>Choose an option</Select.Label>
        <Select.Field placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select.Field>
        <Select.TrailElement>
          <Icon name="controlsChevronDown" />
        </Select.TrailElement>
      </Select>
    </StoryLayout>
  ),
};
