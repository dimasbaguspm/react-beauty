# UI Bottom Sheet

A mobile-friendly bottom sheet component that slides up from the bottom of the screen.

## Installation

```bash
npm install @react-beauty/ui-bottom-sheet
```

## Features

- Mobile-friendly interface that slides up from the bottom of the screen
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
          <BottomSheet.Title>My Bottom Sheet</BottomSheet.Title>
          <BottomSheet.CloseButton />
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
    <BottomSheet.Title>Basic Bottom Sheet</BottomSheet.Title>
    <BottomSheet.CloseButton />
  </BottomSheet.Header>
  <BottomSheet.Body>
    <p>This is a basic bottom sheet with just content.</p>
    <p>
      Bottom sheets are commonly used in mobile interfaces to present
      additional information or actions without navigating away from the
      current screen.
    </p>
  </BottomSheet.Body>
</BottomSheet>
```

### With Footer Actions

Include a footer with action buttons:

```jsx
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <BottomSheet.Title>Bottom Sheet with Footer</BottomSheet.Title>
    <BottomSheet.CloseButton />
  </BottomSheet.Header>
  <BottomSheet.Body>
    <p>This bottom sheet includes a footer with action buttons.</p>
    <p>Footers are ideal for primary and secondary actions.</p>
  </BottomSheet.Body>
  <BottomSheet.Footer>
    <Button size="sm" variant="fill" onClick={() => {}}>
      Okay
    </Button>
  </BottomSheet.Footer>
</BottomSheet>
```

### Different Heights

```jsx
<Button 
  onClick={() => {
    setHeight('sm');
    setIsOpen(true);
  }}
>
  Small
</Button>
<Button 
  onClick={() => {
    setHeight('md');
    setIsOpen(true);
  }}
>
  Medium
</Button>
<Button 
  onClick={() => {
    setHeight('lg');
    setIsOpen(true);
  }}
>
  Large
</Button>

<BottomSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  height={height}
>
  <BottomSheet.Header>
    <BottomSheet.Title>
      {height.toUpperCase()} Bottom Sheet
    </BottomSheet.Title>
    <BottomSheet.CloseButton />
  </BottomSheet.Header>
  <BottomSheet.Body>
    <p>This example demonstrates different height options.</p>
    <p>
      Current height: <strong>{height}</strong>
    </p>
  </BottomSheet.Body>
</BottomSheet>
```

### Form Example

A bottom sheet containing a form:

```jsx
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <BottomSheet.Title>Contact Form</BottomSheet.Title>
    <BottomSheet.CloseButton />
  </BottomSheet.Header>
  <BottomSheet.Body>
    <TextInput>
      <TextInput.Label htmlFor="name-input">Name</TextInput.Label>
      <TextInput.Field id="name-input" placeholder="Your name" />
    </TextInput>

    <TextInput>
      <TextInput.Label htmlFor="email-input">Email</TextInput.Label>
      <TextInput.Field
        id="email-input"
        type="email"
        placeholder="you@example.com"
      />
    </TextInput>

    <TextArea>
      <TextArea.Label htmlFor="message-textarea">Message</TextArea.Label>
      <TextArea.Field
        id="message-textarea"
        placeholder="Your message here..."
        rows={3}
      />
    </TextArea>
  </BottomSheet.Body>
  <BottomSheet.Footer>
    <Button size="sm" variant="fill" onClick={() => {}}>
      Submit
    </Button>
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

### BottomSheet Subcomponents

- **BottomSheet.Header**: Container for the header content
- **BottomSheet.Body**: Container for the main content
- **BottomSheet.Footer**: Container for footer actions
- **BottomSheet.Title**: Component for the sheet title
- **BottomSheet.CloseButton**: Pre-styled close button that triggers onClose

## Accessibility

- Uses `<dialog>` element for native modal behavior
- Properly handles focus management
- Includes ARIA attributes
- Supports keyboard navigation and dismissal
- ESC key automatically closes the sheet