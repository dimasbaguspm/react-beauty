# Loader Component

A flexible, customizable loader component for React applications that provides loading feedback to users.

## Installation

```bash
npm install @react-beauty/ui-loader
```

## Features

- Multiple loader types: circular and linear animations
- Customizable text content
- Fully accessible
- Theme token support
- Compound component pattern for flexible usage

## Usage

```jsx
import { Loader } from '@react-beauty/ui-loader';

// Basic Usage
function BasicLoader() {
  return (
    <Loader >
      <Loader.Spinner />
    </Loader>
  );
}

// Loader with Text
function LoaderWithText() {
  return (
    <Loader>
      <Loader.Spinner />
      <Loader.Text>Loading...</Loader.Text>
    </Loader>
  );
}

// Linear Type Loader
function LinearLoader() {
  return (
    <Loader type="linear">
      <Loader.Spinner />
      <Loader.Text>Loading content...</Loader.Text>
    </Loader>
  );
}

```

## Components

### Loader

The main container component that controls the loading state.

**Props:**
- `type` (string): The type of loader animation. Can be 'circular' or 'linear'. Defaults to 'circular'.
- `children` (ReactNode): Child components, typically `Loader.Spinner` and optionally `Loader.Text`.

### Loader.Spinner

The actual spinner/animation component.

**Props:**
- Standard HTML div props

### Loader.Text

Text component to display with the spinner.

**Props:**
- `children` (ReactNode): The text content to display
- Standard HTML div props

## Accessibility

The Loader component is built with accessibility in mind:
- Uses appropriate ARIA attributes (role="alert", aria-busy, aria-live)
- Ensures adequate color contrast
- Provides text alternative for visual loading indicators
- Semantic markup for screen readers

## Customization

The Loader component uses CSS variables for styling, allowing for easy customization through the design token system.

## License

MIT