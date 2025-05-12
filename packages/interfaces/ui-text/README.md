# @react-beauty/ui-text

A versatile typography component that provides consistent text styling across your application.

## Installation

```bash
npm install @react-beauty/ui-text
```

Or with yarn:

```bash
yarn add @react-beauty/ui-text
```

## Features

- Supports various text elements (h1-h6, p, span, label, small)
- Consistent styling with design tokens
- Fully accessible
- Customizable with additional props

## Usage

```jsx
import { Text } from '@react-beauty/ui-text';

function MyComponent() {
  return (
    <div>
      <Text as="h1">Heading 1</Text>
      <Text as="p">This is a paragraph of text.</Text>
      <Text as="span">This is inline span text.</Text>
      <Text as="small">Small print text</Text>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p' \| 'span' \| 'label' \| 'small' | 'p' | The HTML element to render |
| children | ReactNode | - | The content to display |
| ...HTMLAttributes | - | - | All other props are passed to the underlying HTML element |

## Examples

### Headers

```jsx
<Text as="h1">Heading 1</Text>
<Text as="h2">Heading 2</Text>
<Text as="h3">Heading 3</Text>
<Text as="h4">Heading 4</Text>
<Text as="h5">Heading 5</Text>
<Text as="h6">Heading 6</Text>
```

### Paragraph Text

```jsx
<Text as="p">
  This is a paragraph with standard text. Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit. Integer nec odio. Praesent libero.
</Text>
```

### Inline Text

```jsx
<div>
  <Text as="span">This is span text. </Text>
  <Text as="span">Another span right next to it.</Text>
</div>
```

### Custom Styling

You can apply additional styling to the Text component:

```jsx
<Text as="h1" style={{ color: 'var(--colors-main-picollo)' }}>
  Custom Colored Heading
</Text>

<Text as="p" style={{ fontStyle: 'italic' }}>
  This paragraph has custom italic styling.
</Text>
```

### Using with data-testid

For testing purposes, you can add a data-testid attribute:

```jsx
<Text data-testid="header-text" as="h1">
  Testable Header
</Text>
```

## License

MIT
