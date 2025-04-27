# Tag Component

A versatile tag component for React applications, useful for categorization, status indicators, and labeling.

## Installation

```bash
npm install @react-beauty/ui-tag
```

## Usage

```jsx
import { Tag } from '@react-beauty/ui-tag';
import { Icon } from '@react-beauty/ui-icon';

// Basic Tag
function BasicTag() {
  return <Tag>Label</Tag>;
}

// Tag with Options
function StyledTag() {
  return (
    <Tag isUppercase hasBoldText size="md">
      Important
    </Tag>
  );
}

// Tag with Prefix Icon
function TagWithPrefixIcon() {
  return (
    <Tag prefixIcon={<Icon name="otherFrame" size="xs" />}>
      With Icon
    </Tag>
  );
}

// Tag with Suffix Icon (useful for close/remove functionality)
function TagWithSuffixIcon() {
  return (
    <Tag suffixIcon={<Icon name="controlsCloseSmall" size="xs" />}>
      Removable
    </Tag>
  );
}

// Complete Tag with Both Icons
function CompleteTag() {
  return (
    <Tag
      prefixIcon={<Icon name="otherFrame" size="xs" />}
      suffixIcon={<Icon name="controlsCloseSmall" size="xs" />}
    >
      Complete
    </Tag>
  );
}
```

## Props

- `children`: ReactNode - Content of the tag
- `isUppercase`: boolean - Transforms text to uppercase
- `hasBoldText`: boolean - Makes text bold
- `size`: 'sm' | 'md' - Size of the tag
- `prefixIcon`: ReactNode - Icon displayed before the text
- `suffixIcon`: ReactNode - Icon displayed after the text

## Accessibility

The tag component is built with accessibility in mind:
- Appropriate color contrast
- Semantic HTML structure
- Support for screen readers
- Proper focus management when interactive

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.