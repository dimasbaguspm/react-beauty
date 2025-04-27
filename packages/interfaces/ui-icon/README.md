# Icon Component

A flexible icon component for React applications with a comprehensive library of SVG icons.

## Installation

```bash
npm install @react-beauty/ui-icon
```

## Usage

```jsx
import { Icon } from '@react-beauty/ui-icon';

// Basic Usage
function BasicIcon() {
  return <Icon name="arrowsRightCurved" size="md" />;
}

// Different Sizes
function IconSizes() {
  return (
    <>
      <Icon name="arrowsRightCurved" size="xs" />
      <Icon name="arrowsRightCurved" size="sm" />
      <Icon name="arrowsRightCurved" size="md" />
      <Icon name="arrowsRightCurved" size="lg" />
      <Icon name="arrowsRightCurved" size="xl" />
    </>
  );
}

// Using in Components
function IconInComponent() {
  return (
    <button>
      <Icon name="arrowsRightCurved" size="md" />
      Click Me
    </button>
  );
}
```

## Props

- `name`: string (name of the icon to display)
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- Additional HTML attributes can be passed to the icon component

## Accessibility

The icon component is built with accessibility in mind:
- Includes aria-hidden="true" for decorative icons
- Support for custom aria-label when used as interactive elements
- Maintains appropriate color contrast

## Customization

Icons can be styled using CSS variables through the design token system.