# Breadcrumb Component

A modern, accessible breadcrumb component for React applications, following the compound component pattern.

## Installation

```bash
npm install @react-beauty/ui-breadcrumb
```

## Usage

```jsx
import { Breadcrumb } from '@react-beauty/ui-breadcrumb';

// Basic Usage
function MyComponent() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item isActive>
        <Breadcrumb.Link href="/products/electronics">Electronics</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

// Using custom dividers with icons
import { Icon } from '@react-beauty/ui-icon';

function MyComponentWithIcons() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">
          <Icon name="homeHome" size="xs" />
        </Breadcrumb.Link>
        <Breadcrumb.Divider>
          <Icon name="arrowsChevronRight" size="xs" />
        </Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
        <Breadcrumb.Divider>
          <Icon name="arrowsChevronRight" size="xs" />
        </Breadcrumb.Divider>
      </Breadcrumb.Item>
      <Breadcrumb.Item isActive>
        <Breadcrumb.Link href="/products/electronics">Electronics</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
```

## Components

### Breadcrumb

The main container component.

### Breadcrumb.Item

Represents each individual item in the breadcrumb. Use the `isActive` prop to mark the current page.

### Breadcrumb.Link

The link element for navigating to different pages. Accepts standard anchor tag properties.

### Breadcrumb.Divider

A visual separator between breadcrumb items. Can contain text or icons.

## Accessibility

The breadcrumb component is built with accessibility in mind:
- Uses semantic HTML (nav, ol, li)
- Provides proper focus outlines
- Maintains color contrast ratios
- Can be navigated via keyboard

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.