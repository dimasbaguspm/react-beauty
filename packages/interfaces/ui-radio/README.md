# Radio Component

A modern, accessible radio button component for React applications with support for labels, helper text, and error states.

## Installation

```bash
npm install @react-beauty/ui-radio
```

## Usage

```jsx
import { RadioGroup, RadioInput } from '@react-beauty/ui-radio';
import { useState } from 'react';

// Basic Usage
function BasicRadio() {
  const [value, setValue] = useState('');
  
  return (
    <RadioGroup name="basic-radio" selectedValue={value} onValueChange={setValue}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
    </RadioGroup>
  );
}

// With Helper Text
function RadioWithHelper() {
  const [value, setValue] = useState('');
  
  return (
    <RadioGroup name="helper-radio" selectedValue={value} onValueChange={setValue}>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>This is a group-level helper text</RadioGroup.HelperText>
    </RadioGroup>
  );
}

// With Error State
function RadioWithError() {
  const [value, setValue] = useState('');
  
  return (
    <RadioGroup name="error-radio" selectedValue={value} onValueChange={setValue} hasError>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>This is an error message</RadioGroup.HelperText>
    </RadioGroup>
  );
}

// Disabled Radio
function DisabledRadio() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup name="disabled-radio" selectedValue={value} onValueChange={setValue} isDisabled>
      <RadioInput value="option1">
        <RadioInput.Field />
        <RadioInput.Label>Option 1</RadioInput.Label>
      </RadioInput>
      <RadioGroup.HelperText>This radio is disabled</RadioGroup.HelperText>
    </RadioGroup>
  );
}

// Radio Group with Multiple Options
function RadioGroupExample() {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
    <RadioGroup 
      name="radio-group" 
      selectedValue={selectedValue} 
      onValueChange={setSelectedValue}
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
      <RadioGroup.HelperText>Select one option from the list</RadioGroup.HelperText>
    </RadioGroup>
  );
}

// Interactive Radio Group with Validation
function InteractiveRadioGroup() {
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState(true);

  const handleChange = (value) => {
    setSelectedValue(value);
    setError(false);
  };

  return (
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
      {error && (
        <RadioGroup.HelperText>Please select a size</RadioGroup.HelperText>
      )}
    </RadioGroup>
  );
}
```

## Components

### RadioGroup

The container component for a group of radio inputs. Props include:
- `name`: string - The name for all radio buttons in the group (required)
- `selectedValue`: string - The currently selected value
- `onValueChange`: (value: string) => void - Callback when selection changes (required)
- `isDisabled`: boolean - Disables all radio buttons in the group
- `hasError`: boolean - Indicates if the radio group has an error

### RadioGroup.HelperText

Text displayed below the radio group to provide additional context or error messages.

### RadioInput

Container for an individual radio input. Props include:
- `value`: string - The value of the radio input (required)

### RadioInput.Field

The actual radio input element.

### RadioInput.Label

The label component for the radio input.

## Accessibility

The radio component is built with accessibility in mind:
- Properly associated labels and inputs
- ARIA attributes for error and disabled states
- Clear visual indicators for focus states
- Proper contrast for all states
- Keyboard navigation support

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system. The Radio component now features a refined 1px border styling using the `var(--colors-main-beerus)` color variable for improved visual design.