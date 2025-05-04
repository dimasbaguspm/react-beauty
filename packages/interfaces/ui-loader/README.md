# Loader Component

A flexible, customizable loader component for React applications that provides loading feedback to users.

## Installation

```bash
npm install @react-beauty/ui-loader
```

## Features

- Multiple loader types: border spinner and dots animation
- Three size options: small, medium, and large
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
    <Loader isLoading>
      <Loader.Spinner />
    </Loader>
  );
}

// Loader with Text
function LoaderWithText() {
  return (
    <Loader isLoading>
      <Loader.Spinner />
      <Loader.Text>Loading content...</Loader.Text>
    </Loader>
  );
}

// Dots Type Loader
function DotsLoader() {
  return (
    <Loader isLoading type="dots">
      <Loader.Spinner />
      <Loader.Text>Please wait...</Loader.Text>
    </Loader>
  );
}

// Size Variations
function SizeVariations() {
  return (
    <div>
      <Loader isLoading size="sm">
        <Loader.Spinner />
      </Loader>
      
      <Loader isLoading size="md">
        <Loader.Spinner />
      </Loader>
      
      <Loader isLoading size="lg">
        <Loader.Spinner />
      </Loader>
    </div>
  );
}

// Conditionally Showing a Loader
function ConditionalLoader({ isDataLoading }) {
  return (
    <div>
      <Loader isLoading={isDataLoading}>
        <Loader.Spinner />
        <Loader.Text>Loading data...</Loader.Text>
      </Loader>
      
      {!isDataLoading && <div>Your content here</div>}
    </div>
  );
}
```

## Components

### Loader

The main container component that controls the loading state.

**Props:**
- `isLoading` (boolean): Whether the loader is active. Defaults to `true`.
- `size` (string): The size of the loader. Can be 'sm', 'md', or 'lg'. Defaults to 'md'.
- `type` (string): The type of loader animation. Can be 'circular' or 'linear'. Defaults to 'circular'.
- `children` (ReactNode): Child components, typically `Loader.Spinner` and optionally `Loader.Text`.

### Loader.Spinner

The actual spinner/animation component.

**Props:**
- Standard HTML div props

### Loader.Text

Text component to display below the spinner.

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