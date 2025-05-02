# UI Select Component

A flexible, accessible select component for React Beauty that uses native HTML select elements to provide the best accessibility and platform consistency.

## Installation

```bash
npm install @react-beauty/ui-select
```

## Usage

The UI Select component uses a compound component pattern for flexibility and easy composition.

### Basic Usage

```tsx
import { Select } from '@react-beauty/ui-select';

function Example() {
  return (
    <Select>
      <Select.Label>Choose an option</Select.Label>
      <Select.Field placeholder="Select an option">
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
        <Select.Option value="option3">Option 3</Select.Option>
      </Select.Field>
    </Select>
  );
}
```

### Controlled Select

```tsx
import { useState } from 'react';
import { Select } from '@react-beauty/ui-select';

function ControlledExample() {
  const [value, setValue] = useState('option1');
  
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <Select value={value} onValueChange={handleChange}>
      <Select.Label>Controlled select</Select.Label>
      <Select.Field>
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
        <Select.Option value="option3">Option 3</Select.Option>
      </Select.Field>
      <Select.HelperText>Selected value: {value}</Select.HelperText>
    </Select>
  );
}
```

### With Helper Text

```tsx
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
```

### With Error State

```tsx
<Select hasError>
  <Select.Label>Choose an option</Select.Label>
  <Select.Field placeholder="Select an option">
    <Select.Option value="option1">Option 1</Select.Option>
    <Select.Option value="option2">Option 2</Select.Option>
    <Select.Option value="option3">Option 3</Select.Option>
  </Select.Field>
  <Select.HelperText>This field is required</Select.HelperText>
</Select>
```

### Disabled Select

```tsx
<Select isDisabled>
  <Select.Label>Choose an option</Select.Label>
  <Select.Field placeholder="Select an option">
    <Select.Option value="option1">Option 1</Select.Option>
    <Select.Option value="option2">Option 2</Select.Option>
    <Select.Option value="option3">Option 3</Select.Option>
  </Select.Field>
  <Select.HelperText>This field is disabled</Select.HelperText>
</Select>
```

### With Disabled Option

```tsx
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
```

### With Lead Element (Icon)

```tsx
<Select>
  <Select.Label>Choose an option</Select.Label>
  <Select.Field placeholder="Select an option">
    <Select.LeadElement>
      <span style={{ fontSize: '14px' }}>🔍</span>
    </Select.LeadElement>
    <Select.Option value="option1">Option 1</Select.Option>
    <Select.Option value="option2">Option 2</Select.Option>
    <Select.Option value="option3">Option 3</Select.Option>
  </Select.Field>
</Select>
```

### With Trail Element (Custom Dropdown Icon)

```tsx
<Select>
  <Select.Label>Choose an option</Select.Label>
  <Select.Field placeholder="Select an option">
    <Select.TrailElement>
      <ArrowDownIcon />
    </Select.TrailElement>
    <Select.Option value="option1">Option 1</Select.Option>
    <Select.Option value="option2">Option 2</Select.Option>
    <Select.Option value="option3">Option 3</Select.Option>
  </Select.Field>
</Select>
```

### With Both Lead and Trail Elements

```tsx
<Select>
  <Select.Label>Choose an option</Select.Label>
  <Select.Field placeholder="Select an option">
    <Select.LeadElement>
      <span style={{ fontSize: '14px' }}>🔍</span>
    </Select.LeadElement>
    <Select.TrailElement>
      <ArrowDownIcon />
    </Select.TrailElement>
    <Select.Option value="option1">Option 1</Select.Option>
    <Select.Option value="option2">Option 2</Select.Option>
    <Select.Option value="option3">Option 3</Select.Option>
  </Select.Field>
</Select>
```

## Props

### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasError` | boolean | `false` | Shows the component in error state |
| `isDisabled` | boolean | `false` | Disables the select component |
| `value` | string | `undefined` | The current value (for controlled component) |
| `onValueChange` | (value: string) => void | `undefined` | Callback function called when selection changes |

### Select.Field Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | `undefined` | Placeholder text when no option is selected |
| `onChange` | (event: React.ChangeEvent<HTMLSelectElement>) => void | `undefined` | Callback function called when selection changes |

### Select.Option Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | required | The value of the option |
| `disabled` | boolean | `false` | Disables the individual option |

## Accessibility

The UI Select component leverages the native HTML `<select>` element, which provides:

- Built-in keyboard navigation
- Screen reader announcements
- Focus management
- Platform-native behaviors and styling
- Native mobile experiences

## Customization

The Select component uses CSS variables for styling, allowing for easy customization through the design token system. You can customize the appearance by overriding these CSS variables in your application.

## Styling

When the select component is in a disabled state, it uses an opacity of 0.32 to visually indicate the disabled state while maintaining the same background color as the normal state.