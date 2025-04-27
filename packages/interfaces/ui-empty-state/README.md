# Empty State Component

A modern component for displaying empty state messages in React applications.

## Installation

```bash
npm install @react-beauty/ui-empty-state
```

## Usage

```jsx
import { EmptyState } from '@react-beauty/ui-empty-state';

// Basic Empty State with Title and Description
function BasicEmptyState() {
  return (
    <EmptyState>
      <EmptyState.Title>Main title</EmptyState.Title>
      <EmptyState.Description>
        The body copy explains the empty state. The icon relates to the
        situation
      </EmptyState.Description>
    </EmptyState>
  );
}

// Empty State with Icon
function EmptyStateWithIcon() {
  return (
    <EmptyState>
      <EmptyState.Icon />
      <EmptyState.Title>Main title</EmptyState.Title>
      <EmptyState.Description>
        The body copy explains the empty state. The icon relates to the
        situation
      </EmptyState.Description>
    </EmptyState>
  );
}

// Empty State with Custom Action Buttons
function EmptyStateWithActions() {
  return (
    <EmptyState>
      <EmptyState.Icon />
      <EmptyState.Title>No items found</EmptyState.Title>
      <EmptyState.Description>
        There are no items in your collection yet. Add a new item to get started.
      </EmptyState.Description>
      <EmptyState.Actions>
        <button onClick={() => console.log('Add item clicked')}>
          Add Item
        </button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```

## Components

### EmptyState

The main container component.

### EmptyState.Icon

Optional icon component that displays at the top of the empty state.

### EmptyState.Title

The title component that displays the main message.

### EmptyState.Description

The description component that provides additional context.

### EmptyState.Actions

Optional container for action buttons or links.

## Accessibility

The empty state component is built with accessibility in mind:
- Uses semantic HTML elements
- Maintains proper heading hierarchy
- Ensures readable text contrast
- Supports keyboard navigation for interactive elements

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.