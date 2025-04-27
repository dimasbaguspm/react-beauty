# Text Input Component

A modern, accessible text input component for React applications with support for labels, helper text, and error states.

## Installation

```bash
npm install @react-beauty/ui-text-input
```

## Usage

```jsx
import { TextInput } from '@react-beauty/ui-text-input';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

// Basic Usage
function BasicInput() {
  return (
    <TextInput>
      <TextInput.Label htmlFor="basic-input">Label</TextInput.Label>
      <TextInput.Field id="basic-input" placeholder="Placeholder text..." />
    </TextInput>
  );
}

// With Helper Text
function InputWithHelper() {
  return (
    <TextInput>
      <TextInput.Label htmlFor="helper-input">Label</TextInput.Label>
      <TextInput.Field id="helper-input" placeholder="Placeholder text..." />
      <TextInput.HelperText>This is a helper text</TextInput.HelperText>
    </TextInput>
  );
}

// With Error State
function InputWithError() {
  return (
    <TextInput hasError>
      <TextInput.Label htmlFor="error-input">Label</TextInput.Label>
      <TextInput.Field id="error-input" placeholder="Placeholder text..." />
      <TextInput.HelperText>This field is required</TextInput.HelperText>
    </TextInput>
  );
}

// Disabled Input
function DisabledInput() {
  return (
    <TextInput isDisabled>
      <TextInput.Label htmlFor="disabled-input">Label</TextInput.Label>
      <TextInput.Field
        id="disabled-input"
        placeholder="Placeholder text..."
        value="Disabled input"
      />
    </TextInput>
  );
}

// With Lead Element (Icon)
function InputWithLeadIcon() {
  return (
    <TextInput>
      <TextInput.Label htmlFor="lead-input">Amount</TextInput.Label>
      <TextInput.Field id="lead-input" placeholder="0.00" />
      <TextInput.LeadElement>
        <Icon name="chartRound" size="md" />
      </TextInput.LeadElement>
    </TextInput>
  );
}

// With Trail Element (Icon)
function InputWithTrailIcon() {
  return (
    <TextInput>
      <TextInput.Label htmlFor="trail-input">Email</TextInput.Label>
      <TextInput.Field id="trail-input" placeholder="example@domain.com" />
      <TextInput.TrailElement>
        <Icon name="mailEmailStats" size="md" />
      </TextInput.TrailElement>
    </TextInput>
  );
}

// Interactive Input with Validation
function InteractiveInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
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
      <TextInput.HelperText>
        Username must be at least 3 characters
      </TextInput.HelperText>
    </TextInput>
  );
}
```

## Components

### TextInput

The main container component. Props include:
- `hasError`: boolean - Indicates if the input has an error
- `isDisabled`: boolean - Disables the entire input group

### TextInput.Label

The label component for the input field.

### TextInput.Field

The actual input field component.

### TextInput.HelperText

Text displayed below the input to provide additional context or error messages.

### TextInput.LeadElement

Container for elements displayed before the input (like icons or currency symbols).

### TextInput.TrailElement

Container for elements displayed after the input (like icons or action buttons).

## Accessibility

The text input component is built with accessibility in mind:
- Properly associated labels and inputs
- ARIA attributes for error and disabled states
- Clear visual indicators for focus states
- Proper contrast for all states

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.