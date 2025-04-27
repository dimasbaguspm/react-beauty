# Accordion Component

A modern, accessible accordion component for React applications, following the compound component pattern.

## Installation

```bash
npm install @react-beauty/ui-accordion
```

## Usage

```jsx
import { Accordion } from '@react-beauty/ui-accordion';

// Basic Usage
function MyComponent() {
  return (
    <Accordion>
      <Accordion.Header>
        <Accordion.Title>Accordion Title</Accordion.Title>
        <Accordion.Close />
      </Accordion.Header>
      <Accordion.Content>
        <p>This is the accordion content area.</p>
      </Accordion.Content>
    </Accordion>
  );
}

// With Lead Element (Icon)
import { Icon } from '@react-beauty/ui-icon';

function AccordionWithIcon() {
  return (
    <Accordion>
      <Accordion.Header>
        <Accordion.LeadElement>
          <Icon name="otherFrame" size="md" />
        </Accordion.LeadElement>
        <Accordion.Title>With Lead Element</Accordion.Title>
        <Accordion.Close />
      </Accordion.Header>
      <Accordion.Content>
        <p>This accordion has a lead element.</p>
      </Accordion.Content>
    </Accordion>
  );
}

// Multiple Accordions
function MultipleAccordions() {
  return (
    <div>
      <Accordion style={{ marginBottom: '8px' }}>
        <Accordion.Header>
          <Accordion.Title>First Accordion</Accordion.Title>
          <Accordion.Close />
        </Accordion.Header>
        <Accordion.Content>
          <p>Content of the first accordion</p>
        </Accordion.Content>
      </Accordion>
      
      <Accordion style={{ marginBottom: '8px' }}>
        <Accordion.Header>
          <Accordion.Title>Second Accordion</Accordion.Title>
          <Accordion.Close />
        </Accordion.Header>
        <Accordion.Content>
          <p>Content of the second accordion</p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
```

## Components

### Accordion

The main container component that manages the expanded/collapsed state.

### Accordion.Header

The clickable header that toggles the visibility of the content.

### Accordion.Title

The title text of the accordion.

### Accordion.LeadElement

An optional container for icons or other elements displayed before the title.

### Accordion.Close

The toggle button/indicator that shows the current state.

### Accordion.Content

The content panel that is shown or hidden based on the accordion state.

## Accessibility

The accordion component is built with accessibility in mind:
- Uses appropriate ARIA attributes
- Supports keyboard navigation
- Maintains focus management
- Follows WAI-ARIA Accordion Pattern

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.