# Checkbox Component

A customizable, accessible checkbox component for React applications.

## Installation

```bash
npm install @react-beauty/ui-checkbox
```

## Usage

The checkbox component follows a compound component pattern, allowing for flexible and customizable usage:

### Basic Checkbox

```jsx
import { CheckboxInput } from '@react-beauty/ui-checkbox';

function MyComponent() {
  return (
    <CheckboxInput value="checkbox-1" onValueChange={(checked) => console.log(checked)}>
      <CheckboxInput.Field />
      <CheckboxInput.Label>Basic Checkbox</CheckboxInput.Label>
    </CheckboxInput>
  );
}
```

### Checkbox with Helper Text

```jsx
import { CheckboxInput } from '@react-beauty/ui-checkbox';

function MyComponent() {
  return (
    <CheckboxInput value="checkbox-with-helper">
      <CheckboxInput.Field />
      <CheckboxInput.Label>Checkbox with helper text</CheckboxInput.Label>
      <CheckboxInput.HelperText>This is a helper text</CheckboxInput.HelperText>
    </CheckboxInput>
  );
}
```

### Error State

```jsx
import { CheckboxInput } from '@react-beauty/ui-checkbox';

function MyComponent() {
  return (
    <CheckboxInput value="error-checkbox" hasError={true}>
      <CheckboxInput.Field />
      <CheckboxInput.Label>Error state checkbox</CheckboxInput.Label>
      <CheckboxInput.HelperText>This field is required</CheckboxInput.HelperText>
    </CheckboxInput>
  );
}
```

### Disabled Checkbox

```jsx
import { CheckboxInput } from '@react-beauty/ui-checkbox';

function MyComponent() {
  return (
    <CheckboxInput value="disabled-checkbox" isDisabled={true}>
      <CheckboxInput.Field />
      <CheckboxInput.Label>Disabled checkbox</CheckboxInput.Label>
    </CheckboxInput>
  );
}
```

### Checkbox Group

```jsx
import { useState } from 'react';
import { CheckboxGroup, CheckboxInput } from '@react-beauty/ui-checkbox';

function MyComponent() {
  const [selectedValues, setSelectedValues] = useState(['option-1']);

  return (
    <CheckboxGroup
      name="checkbox-group"
      values={selectedValues}
      onValueChange={setSelectedValues}
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
    </CheckboxGroup>
  );
}
```

## Props

### CheckboxInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | The value of the checkbox |
| checked | boolean | undefined | Controlled checked state |
| defaultChecked | boolean | false | Initial checked state for uncontrolled components |
| onValueChange | (checked: boolean) => void | undefined | Callback function when the checkbox state changes |
| hasError | boolean | false | Whether the checkbox has an error state |
| isDisabled | boolean | false | Whether the checkbox is disabled |
| children | ReactNode | required | The content of the checkbox (Field, Label, HelperText) |

### CheckboxGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | required | The name of the checkbox group |
| values | string[] | undefined | Controlled selected values |
| defaultValues | string[] | [] | Initial selected values for uncontrolled components |
| onValueChange | (values: string[]) => void | undefined | Callback function when any checkbox in the group changes |
| hasError | boolean | false | Whether the checkbox group has an error state |
| isDisabled | boolean | false | Whether all checkboxes in the group are disabled |
| children | ReactNode | required | The content of the checkbox group (CheckboxInput components) |

## Accessibility

The checkbox component is built with accessibility in mind:

- Proper keyboard navigation support
- ARIA attributes for screen readers
- Focus management for keyboard users
- High contrast visual indicators

## License

MIT