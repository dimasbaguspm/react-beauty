# UI Modal

A flexible, accessible modal dialog component built for React Beauty.

## Installation

```bash
npm install @react-beauty/ui-modal
```

## Usage

The Modal component follows a compound component pattern for flexibility:

```jsx
import { Modal } from '@react-beauty/ui-modal';
import { Button } from '@react-beauty/ui-button';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button size="sm" onClick={handleOpen}>
        Open Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## Features

- **Accessible**: Built with accessibility in mind using semantic HTML
- **Flexible**: Compound component pattern for customization
- **Responsive**: Works well on all devices and screen sizes
- **Customizable**: Different sizes and appearance options
- **Keyboard Support**: Escape key closes the modal
- **Focus Management**: Manages focus correctly for accessibility

## API

### Modal

The main container component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | false | Controls whether the modal is visible |
| onClose | function | required | Callback when the modal is closed |
| width | 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Controls the width of the modal |
| hasOverlay | boolean | true | Whether to show a background overlay |
| hasShadow | boolean | true | Whether to apply a shadow to the modal |

### Modal.Header

Contains the header content of the modal.

### Modal.Title

The title of the modal.

### Modal.Body

Contains the main content of the modal.

### Modal.Footer

Contains the footer content of the modal, typically action buttons.

### Modal.DismissButton

A button to close the modal.

## Examples

### Different Sizes

Modal comes in 4 different sizes: sm, md, lg, and xl.

```jsx
<Button size="sm" onClick={() => handleOpen('sm')}>Small</Button>
<Button size="sm" onClick={() => handleOpen('md')}>Medium</Button>
<Button size="sm" onClick={() => handleOpen('lg')}>Large</Button>
<Button size="sm" onClick={() => handleOpen('xl')}>Extra Large</Button>

<Modal isOpen={isOpen} onClose={handleClose} width="lg">
  <Modal.Header>
    <Modal.Title>Large Modal</Modal.Title>
    <Modal.DismissButton />
  </Modal.Header>
  <Modal.Body>
    <p>This is a large modal with more content space.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button size="sm" onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>
```

### Modal without Overlay

```jsx
<Button size="sm" onClick={() => setIsOpen(true)}>
  Open Modal without Overlay
</Button>

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  hasOverlay={false}
>
  <Modal.Header>
    <Modal.Title>No Overlay Modal</Modal.Title>
    <Modal.DismissButton />
  </Modal.Header>
  <Modal.Body>
    <p>This modal doesn't have a background overlay.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button size="sm" onClick={() => setIsOpen(false)}>Close</Button>
  </Modal.Footer>
</Modal>
```

### Modal without Shadow

```jsx
<Button size="sm" onClick={() => setIsOpen(true)}>
  Open Modal without Shadow
</Button>

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  hasShadow={false}
>
  <Modal.Header>
    <Modal.Title>No Shadow Modal</Modal.Title>
    <Modal.DismissButton />
  </Modal.Header>
  <Modal.Body>
    <p>This modal doesn't have a shadow effect.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button size="sm" onClick={() => setIsOpen(false)}>Close</Button>
  </Modal.Footer>
</Modal>
```

### Form Modal

Modals are perfect for forms:

```jsx
<Button size="sm" onClick={() => setIsOpen(true)}>
  Open Form Modal
</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Contact Form</Modal.Title>
    <Modal.DismissButton />
  </Modal.Header>
  <Modal.Body>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextInput hasError={nameError}>
        <TextInput.Label htmlFor="name">Name</TextInput.Label>
        <TextInput.Field
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <TextInput.LeadElement>
          <Icon name="genericUser" size="md" />
        </TextInput.LeadElement>
        {nameError && (
          <TextInput.HelperText>Name is required</TextInput.HelperText>
        )}
      </TextInput>

      <TextInput hasError={emailError}>
        <TextInput.Label htmlFor="email">Email</TextInput.Label>
        <TextInput.Field
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
        />
        <TextInput.LeadElement>
          <Icon name="mailEmailStats" size="md" />
        </TextInput.LeadElement>
        {emailValid && (
          <TextInput.TrailElement>
            <Icon name="genericCheckRounded" size="md" />
          </TextInput.TrailElement>
        )}
        {emailError && (
          <TextInput.TrailElement>
            <Icon
              name="controlsCloseSmall"
              size="md"
              style={{ color: 'red' }}
            />
          </TextInput.TrailElement>
        )}
        {emailError && (
          <TextInput.HelperText>
            Please enter a valid email address
          </TextInput.HelperText>
        )}
      </TextInput>

      <TextArea hasError={messageError}>
        <TextArea.Label htmlFor="message">Message</TextArea.Label>
        <TextArea.Field
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        {messageError && (
          <TextArea.HelperText>Message is required</TextArea.HelperText>
        )}
      </TextArea>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button size="sm" variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button size="sm" onClick={handleSubmit}>
      Submit
    </Button>
  </Modal.Footer>
</Modal>