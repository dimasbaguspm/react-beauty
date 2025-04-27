# Button Component

A versatile, accessible button component for React applications with various styles, sizes, and icon options.

## Installation

```bash
npm install @react-beauty/ui-button
```

## Usage

```jsx
import { Button } from '@react-beauty/ui-button';
import { Icon } from '@react-beauty/ui-icon';

// Basic Usage
function BasicButton() {
  return (
    <Button variant="fill" size="sm" onClick={() => console.log('clicked')}>
      Button text
    </Button>
  );
}

// Button with Prefix Icon
function ButtonWithPrefixIcon() {
  return (
    <Button 
      variant="fill" 
      size="sm" 
      prefixIcon={<Icon name="otherFrame" size="xs" />}
    >
      Button with Prefix Icon
    </Button>
  );
}

// Button with Suffix Icon
function ButtonWithSuffixIcon() {
  return (
    <Button 
      variant="outline" 
      size="md" 
      suffixIcon={<Icon name="otherFrame" size="xs" />}
    >
      Button with Suffix Icon
    </Button>
  );
}

// Icon Only Button
function IconOnlyButton() {
  return (
    <Button variant="ghost" size="lg">
      <Icon name="otherFrame" size="xs" />
    </Button>
  );
}

// Full Width Button
function FullWidthButton() {
  return (
    <Button variant="fill" size="md" isFullWidth>
      Full Width Button
    </Button>
  );
}
```

## Props

### Button

- `variant`: 'fill' | 'outline' | 'ghost'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: boolean
- `isFullWidth`: boolean
- `prefixIcon`: ReactNode
- `suffixIcon`: ReactNode
- `onClick`: function
- `children`: ReactNode

## Accessibility

The button component is built with accessibility in mind:
- Proper focus states
- ARIA attributes for disabled states
- Keyboard navigable
- Appropriate color contrast

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.