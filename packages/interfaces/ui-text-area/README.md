# Text Area Component

A modern, accessible text area component for React applications with support for labels, helper text, and error states.

## Installation

```bash
npm install @react-beauty/ui-text-area
```

## Usage

```jsx
import { TextArea } from '@react-beauty/ui-text-area';
import { useState } from 'react';

// Basic Usage
function BasicTextArea() {
  return (
    <TextArea>
      <TextArea.Label htmlFor="basic-textarea">Label</TextArea.Label>
      <TextArea.Field id="basic-textarea" placeholder="Placeholder text..." />
    </TextArea>
  );
}

// With Helper Text
function TextAreaWithHelper() {
  return (
    <TextArea>
      <TextArea.Label htmlFor="helper-textarea">Label</TextArea.Label>
      <TextArea.Field id="helper-textarea" placeholder="Placeholder text..." />
      <TextArea.HelperText>This is a helper text</TextArea.HelperText>
    </TextArea>
  );
}

// With Error State
function TextAreaWithError() {
  return (
    <TextArea hasError>
      <TextArea.Label htmlFor="error-textarea">Label</TextArea.Label>
      <TextArea.Field id="error-textarea" placeholder="Placeholder text..." />
      <TextArea.HelperText>This field is required</TextArea.HelperText>
    </TextArea>
  );
}

// Disabled TextArea
function DisabledTextArea() {
  return (
    <TextArea isDisabled>
      <TextArea.Label htmlFor="disabled-textarea">Label</TextArea.Label>
      <TextArea.Field
        id="disabled-textarea"
        placeholder="Placeholder text..."
        defaultValue="Disabled textarea"
      />
    </TextArea>
  );
}

// Resizable TextArea
function ResizableTextArea() {
  return (
    <TextArea>
      <TextArea.Label htmlFor="resizable-textarea">Resizable</TextArea.Label>
      <TextArea.Field
        id="resizable-textarea"
        placeholder="This textarea can be resized..."
        rows={4}
        style={{ resize: 'both' }}
      />
    </TextArea>
  );
}

// Interactive TextArea with Validation
function InteractiveTextArea() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
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
}
```

## Components

### TextArea

The main container component. Props include:
- `hasError`: boolean - Indicates if the textarea has an error
- `isDisabled`: boolean - Disables the entire textarea group

### TextArea.Label

The label component for the textarea field.

### TextArea.Field

The actual textarea field component.

### TextArea.HelperText

Text displayed below the textarea to provide additional context or error messages.

## Accessibility

The text area component is built with accessibility in mind:
- Properly associated labels and inputs
- ARIA attributes for error and disabled states
- Clear visual indicators for focus states
- Proper contrast for all states

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.