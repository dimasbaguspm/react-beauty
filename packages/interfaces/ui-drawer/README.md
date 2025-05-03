# Drawer Component

A modern, accessible drawer component for React applications, providing a sliding panel that appears from the edge of the screen.

## Installation

```bash
npm install @react-beauty/ui-drawer
```

## Usage

```jsx
import { Drawer } from '@react-beauty/ui-drawer';
import { useState } from 'react';

// Basic Usage
function BasicDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header>
          <h2>Drawer Title</h2>
        </Drawer.Header>
        <Drawer.Body>
          <p>This is the drawer content.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

// Left Direction
function LeftDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Left Drawer</button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction="left"
      >
        <Drawer.Header>
          <h2>Left Drawer</h2>
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer slides in from the left side.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

// Without Overlay
function NoOverlayDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Without Overlay</button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hasOverlay={false}
      >
        <Drawer.Header>
          <h2>No Overlay</h2>
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer doesn't have a background overlay.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

// Large Drawer
function LargeDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Large Drawer</button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="lg"
      >
        <Drawer.Header>
          <h2>Large Drawer</h2>
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer uses a larger width (lg size).</p>
        </Drawer.Body>
        <Drawer.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}
```

## Components

### Drawer

The main container component. Props include:
- `isOpen`: boolean - Controls whether the drawer is visible (required)
- `onClose`: () => void - Callback when the drawer should close (required)
- `direction`: 'left' | 'right' | 'top' | 'bottom' - Drawer slide-in direction (default: 'right')
- `width`: 'sm' | 'md' | 'lg' | string - Width/height of the drawer (default: 'md')
- `hasOverlay`: boolean - Whether to show a background overlay (default: true)
- `hasShadow`: boolean - Whether to apply a shadow to the drawer (default: true)

### Drawer.Header

The header section of the drawer.

### Drawer.Body

The main content area of the drawer.

### Drawer.Footer

The footer section of the drawer, typically used for action buttons.

## Accessibility

The drawer component is built with accessibility in mind:
- Uses proper `role="dialog"` and `aria-modal="true"` attributes
- Handles keyboard interaction (ESC key closes the drawer)
- Focus is managed appropriately
- Prevents scrolling of background content when the drawer is open
- Proper contrast for all states

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.