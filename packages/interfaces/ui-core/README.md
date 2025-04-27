# UI Core Package

Core utilities and theming provider for the React Beauty design system.

## Installation

```bash
npm install @react-beauty/ui-core
```

## Usage

```jsx
import { ReactBeautyUIProvider } from '@react-beauty/ui-core';

// Wrap your application with the provider
function App() {
  return (
    <ReactBeautyUIProvider defaultTheme="light">
      <YourApplication />
    </ReactBeautyUIProvider>
  );
}

// Accessing theme variables in your components
function ThemedComponent() {
  return (
    <div style={{ 
      color: 'var(--colors-main-text)',
      backgroundColor: 'var(--colors-main-background)',
      fontFamily: 'var(--font-primary)',
      padding: 'var(--spacing-md)'
    }}>
      This component uses theme variables
    </div>
  );
}
```

## Features

- Global theme provider with light and dark theme support
- CSS reset and base styles
- Font imports and typography setup
- Design token system for consistent styling

## Components

### ReactBeautyUIProvider

The main provider component that sets up theming for your application.

Props:
- `defaultTheme`: 'light' | 'dark' - The default theme to use
- `children`: ReactNode - Your application components

## Theming System

The core package provides a complete theming system that includes:

- Color tokens for both light and dark modes
- Typography scales and font families
- Spacing and sizing variables
- Border radius and shadow presets

All theme values are exposed as CSS variables that can be used throughout your application.

## Accessibility

The theming system is designed with accessibility in mind:
- Color contrasts that meet WCAG guidelines
- Support for reduced motion preferences
- Focus visible indicators

## Customization

The theming system can be extended or customized by overriding the CSS variables in your application.