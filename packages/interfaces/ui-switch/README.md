# Switch Component

A customizable switch component that follows the React Beauty design system.

## Installation

```bash
npm install @react-beauty/ui-switch
```

## Usage

```jsx
import { Switch } from '@react-beauty/ui-switch';

export const MyComponent = () => {
  return (
    <Switch>
      <Switch.Label>
        <Switch.Toggle />
        Toggle Label
      </Switch.Label>
    </Switch>
  );
};
```

## Features

- Compound component pattern for flexible composition
- Accessibility-focused design
- Support for error states, disabled states, and helper text
- Customizable with design tokens
- Consistent with the React Beauty design system

## Components

### Switch

The main container component that provides context to its children.

Props:
- `isChecked`: boolean - The checked state of the switch
- `hasError`: boolean - Whether the switch has an error state
- `isDisabled`: boolean - Whether the switch is disabled
- `onChange`: (checked: boolean) => void - Callback when the switch state changes

### Switch.Label

The label component for the switch.

Props:
- `children`: ReactNode - Content of the label (can include the Switch.Toggle)

### Switch.Toggle

The actual toggle component that shows the switch control.

Props:
- Standard HTML input props (excluding 'type', 'checked', and 'disabled')

### Switch.HelperText

The helper text component that displays additional information or error messages.

Props:
- `children`: ReactNode - Content of the helper text

## Examples

### Basic Switch

```jsx
<Switch>
  <Switch.Label>
    <Switch.Toggle />
    Default Switch
  </Switch.Label>
</Switch>
```

### Checked Switch

```jsx
<Switch isChecked>
  <Switch.Label>
    <Switch.Toggle />
    Checked Switch
  </Switch.Label>
</Switch>
```

### Switch with Helper Text

```jsx
<Switch>
  <Switch.Label>
    <Switch.Toggle />
    Switch with helper text
  </Switch.Label>
  <Switch.HelperText>Additional information about the switch</Switch.HelperText>
</Switch>
```

### Switch with Error

```jsx
<Switch hasError>
  <Switch.Label>
    <Switch.Toggle />
    Switch with error
  </Switch.Label>
  <Switch.HelperText>This field is required</Switch.HelperText>
</Switch>
```

### Disabled Switch

```jsx
<Switch isDisabled>
  <Switch.Label>
    <Switch.Toggle />
    Disabled Switch
  </Switch.Label>
</Switch>
```

### Interactive Switch

```jsx
const [isChecked, setIsChecked] = useState(false);

<Switch isChecked={isChecked} onChange={setIsChecked}>
  <Switch.Label>
    <Switch.Toggle />
    Interactive Switch: {isChecked ? 'ON' : 'OFF'}
  </Switch.Label>
</Switch>
```

## Accessibility

The Switch component is built with accessibility in mind:
- Uses semantic HTML for toggle functionality
- Keyboard navigable (focusable and toggleable with Space/Enter)
- Includes proper ARIA attributes
- Proper focus states with visible focus indicators
- Support for labels and helper text
- Color contrast that meets WCAG standards