# Menu Item Component

A versatile menu item component for React applications, supporting both anchor and button behaviors with customizable lead and trail elements.

## Installation

```bash
npm install @react-beauty/ui-menu-item
```

## Usage

```jsx
import { MenuItem } from '@react-beauty/ui-menu-item';
import { Icon } from '@react-beauty/ui-icon';
import { Tag } from '@react-beauty/ui-tag';

// Basic Usage as a Button
function ButtonMenuItem() {
  return (
    <MenuItem onClick={() => console.log('clicked')}>
      Your Value
    </MenuItem>
  );
}

// As an Anchor/Link
function AnchorMenuItem() {
  return (
    <MenuItem href="https://www.google.com">
      Your Value
    </MenuItem>
  );
}

// With Lead Element (Icon)
function MenuItemWithIcon() {
  return (
    <MenuItem onClick={() => console.log('clicked')}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label>Your Value</MenuItem.Label>
    </MenuItem>
  );
}

// With Trail Element (Tag)
function MenuItemWithTag() {
  return (
    <MenuItem onClick={() => console.log('clicked')}>
      <MenuItem.Label>Your Value</MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  );
}

// With Both Lead and Trail Elements
function CompleteMenuItem() {
  return (
    <MenuItem onClick={() => console.log('clicked')}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label>Your Value</MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  );
}

// Multi-line MenuItem
function MultiLineMenuItem() {
  return (
    <MenuItem onClick={() => console.log('clicked')}>
      <MenuItem.LeadElement>
        <Icon name="otherFrame" size="md" />
      </MenuItem.LeadElement>
      <MenuItem.Label data-description="I am going to do it again, but this time I will do it really well.">
        Your Value
      </MenuItem.Label>
      <MenuItem.TrailElement>
        <Tag>99</Tag>
      </MenuItem.TrailElement>
    </MenuItem>
  );
}
```

## Components

### MenuItem

The main container component that can be rendered as either a button or an anchor tag.

### MenuItem.Label

Contains the text content of the menu item.

### MenuItem.LeadElement

Optional container for elements displayed before the label (like icons).

### MenuItem.TrailElement

Optional container for elements displayed after the label (like tags or badges).

## Props

- `onClick`: Function - Click handler for button behavior
- `href`: String - URL for anchor behavior
- `children`: ReactNode - Content of the menu item

## Accessibility

The menu item component is built with accessibility in mind:
- Appropriate semantics (button or anchor based on props)
- Proper focus management
- Keyboard navigation support
- ARIA attributes for interactive states

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.