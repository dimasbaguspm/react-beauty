# UI Bottom Sheet

A mobile-friendly bottom sheet component that slides up from the bottom of the screen.

## Installation

```bash
npm install @react-beauty/ui-bottom-sheet
```

## Features

- Mobile-friendly interface that slides up from the bottom of the screen
- Draggable for dismissal with natural gesture
- Follows compound component pattern for easy composition
- Multiple height options: small, medium, large
- Customizable header, body, and footer sections
- Fully accessible with keyboard navigation and aria attributes
- Smooth animations and transitions
- Themeable with design tokens

## Usage

The Bottom Sheet component uses a compound component pattern, similar to other React Beauty components:

```jsx
import { BottomSheet } from '@react-beauty/ui-bottom-sheet';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Sheet</button>
      
      <BottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height="md"
      >
        <BottomSheet.Header>
          <div className="sheet-title">My Bottom Sheet</div>
          <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <p>This is the content of the bottom sheet.</p>
        </BottomSheet.Body>
        <BottomSheet.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => alert('Action performed!')}>Confirm</button>
        </BottomSheet.Footer>
      </BottomSheet>
    </>
  );
}
```

## Examples

### Basic Usage

A simple bottom sheet with just a header and body content:

```jsx
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <div className="sheet-title">Basic Bottom Sheet</div>
    <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
  </BottomSheet.Header>
  <BottomSheet.Body>
    <p>This is a basic bottom sheet with just content.</p>
  </BottomSheet.Body>
</BottomSheet>
```

### With Footer Actions

Include a footer with action buttons:

```jsx
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <div className="sheet-title">Bottom Sheet with Footer</div>
    <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
  </BottomSheet.Header>
  <BottomSheet.Body>
    <p>This bottom sheet includes a footer with action buttons.</p>
  </BottomSheet.Body>
  <BottomSheet.Footer>
    <button>Cancel</button>
    <button>Confirm</button>
  </BottomSheet.Footer>
</BottomSheet>
```

### Form Example

A bottom sheet containing a form:

```jsx
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <div className="sheet-title">Form Example</div>
    <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
  </BottomSheet.Header>
  <BottomSheet.Body>
    <div>
      <label>Name</label>
      <input type="text" />
      
      <label>Email</label>
      <input type="email" />
    </div>
  </BottomSheet.Body>
  <BottomSheet.Footer>
    <button>Cancel</button>
    <button>Submit</button>
  </BottomSheet.Footer>
</BottomSheet>
```

## Props

### BottomSheet Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | false | Controls whether the bottom sheet is open |
| `onClose` | function | required | Function called when the sheet is closed |
| `height` | 'sm' \| 'md' \| 'lg' | 'md' | Controls the height of the bottom sheet |
| `hasOverlay` | boolean | true | Controls whether the bottom sheet has an overlay background |
| `hasShadow` | boolean | true | Controls whether the bottom sheet has a shadow |
| `isDraggable` | boolean | true | Controls whether the bottom sheet can be dismissed by dragging |

### BottomSheet.Header Component

The `BottomSheet.Header` component accepts children and standard HTML attributes that can be passed to a div element. This gives you full control over the content that is rendered in the header.

### BottomSheet.Body and BottomSheet.Footer Components

These components accept standard HTML attributes that can be passed to a div element.

## Accessibility

- Uses `<dialog>` element for native modal behavior
- Properly handles focus management
- Includes ARIA attributes
- Supports keyboard navigation and dismissal
- Draggable interface includes appropriate ARIA labels