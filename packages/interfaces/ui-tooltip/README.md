# Tooltip Component

A flexible, accessible tooltip component for React applications that displays informative text when users hover over, focus on, or click an element.

## Installation

```bash
npm install @react-beauty/ui-tooltip
```

## Usage

```jsx
import { Tooltip } from '@react-beauty/ui-tooltip';

// Basic Usage with Hover Trigger
function BasicTooltip() {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <button>Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Content placement="top">This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
}

// Different Placements
function TooltipPlacements() {
  return (
    <>
      <Tooltip>
        <Tooltip.Trigger>
          <button>Top</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">Top tooltip</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>Right</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="right">Right tooltip</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>Bottom</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="bottom">Bottom tooltip</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>Left</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="left">Left tooltip</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>Center Top</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="center-top">Center Top tooltip</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>Center Bottom</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="center-bottom">Center Bottom tooltip</Tooltip.Content>
      </Tooltip>
    </>
  );
}

// Different Trigger Types
function TooltipTriggers() {
  return (
    <>
      <Tooltip trigger="hover">
        <Tooltip.Trigger>
          <button>Hover Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">Hover to show</Tooltip.Content>
      </Tooltip>

      <Tooltip trigger="click">
        <Tooltip.Trigger>
          <button>Click Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">Click to show/hide</Tooltip.Content>
      </Tooltip>

      <Tooltip trigger="manual" defaultVisible={true}>
        <Tooltip.Trigger>
          <button>Manual Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">Manually controlled</Tooltip.Content>
      </Tooltip>
    </>
  );
}

// Styling Options
function StyledTooltips() {
  return (
    <>
      <Tooltip>
        <Tooltip.Trigger>
          <button>Default Tooltip</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top">
          Default tooltip with pointer and shadow
        </Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>No Pointer</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top" pointer={false}>
          Tooltip without pointer
        </Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>
          <button>No Shadow</button>
        </Tooltip.Trigger>
        <Tooltip.Content placement="top" shadow={false}>
          Tooltip without shadow
        </Tooltip.Content>
      </Tooltip>
    </>
  );
}
```

## Components

### Tooltip

The main container component. Props include:
- `trigger`: 'hover' | 'click' | 'manual' - The interaction that triggers the tooltip
- `defaultVisible`: boolean - Whether the tooltip is visible by default

### Tooltip.Trigger

Wraps the element that triggers the tooltip.

### Tooltip.Content

The actual tooltip content. Props include:
- `placement`: 'top' | 'right' | 'bottom' | 'left' | 'center-top' | 'center-bottom' - Position of the tooltip
- `pointer`: boolean - Whether to show the pointer arrow
- `shadow`: boolean - Whether to show a shadow

## Accessibility

The tooltip component is built with accessibility in mind:
- Follows WAI-ARIA tooltip pattern
- Properly manages focus
- Supports keyboard navigation
- Appropriate ARIA roles and attributes

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.