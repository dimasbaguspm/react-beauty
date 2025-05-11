# Introduction to React Beauty

React Beauty is a comprehensive UI component library designed to solve the most common challenges faced by React developers. It combines the flexibility of open code with the convenience of a cohesive design system to help you build beautiful, accessible, and consistent user interfaces.

## Why React Beauty Exists

Building modern React applications often involves difficult trade-offs:

- **Flexibility vs. Consistency** - Traditional component libraries give you pre-built components but limit customization
- **Design System Integration** - Adapting third-party components to match your design system is time-consuming
- **Accessibility Compliance** - Ensuring all UI elements meet accessibility standards requires significant effort
- **Developer Experience** - Learning different component APIs across multiple libraries reduces productivity

React Beauty addresses these challenges by providing a collection of atomic, composable components with a consistent API and built-in accessibility, while giving you complete control over the code.

## How React Beauty Differs

Unlike traditional component libraries where you're locked into predefined styles and behaviors, React Beauty:

1. **Provides Code, Not Just Components** - You get the actual component code to customize as needed
2. **Uses Compound Component Pattern** - Consistent, predictable APIs across all components
3. **Prioritizes Accessibility** - WCAG compliance is built into every component
4. **Enables Design System Integration** - Theme tokens make it easy to match your brand identity
5. **Ensures Framework Compatibility** - Works with Next.js, Remix, and other React frameworks

## Core Philosophy

React Beauty is built on four fundamental principles:

1. **Compound Component Pattern** - Components use a consistent compositional pattern, making them
   intuitive to use and customize without prop drilling or complex configuration objects

2. **Accessibility First** - All components are built from the ground up to meet WCAG guidelines
   with semantic HTML, proper ARIA attributes, and keyboard navigation support

3. **Flexible Theming** - A robust theming system gives you light/dark mode support and
   customizable design tokens that can be tailored to your brand

4. **Developer Experience** - Intuitive APIs with consistent patterns across components reduce
   learning curve and increase productivity

## Component Architecture

Each React Beauty component follows a consistent architecture that maximizes flexibility:

- **Root Component** - The main container that provides context to its children
- **Subcomponents** - Specialized parts that compose together (Header, Body, Footer, etc.)
- **Flexible Composition** - Components can be arranged in any order to achieve custom layouts
- **Prop Consistency** - Similar props across components (`isDisabled`, `hasError`, etc.)

## Core Features

- **Design Token System** - CSS variables for consistent styling across components
- **Light/Dark Mode Support** - Built-in theming with mode switching
- **Responsive Design** - Mobile-friendly components that adapt to different screen sizes
- **Accessibility** - Focus management, keyboard navigation, and proper ARIA attributes

## Available Components

React Beauty includes a growing collection of components:

- **Layout Components**: Sidebar, BottomSheet
- **Form Components**: TextInput, Switch
- **Disclosure Components**: Accordion
- **Feedback Components**: EmptyState

## Getting Started

To use React Beauty in your project, first install the core package:

```bash
npm install @react-beauty/ui-core
```

Then install any specific component packages you need:

```bash
npm install @react-beauty/ui-accordion @react-beauty/ui-sidebar
```

Wrap your application with the provider:

```jsx
import { ReactBeautyUIProvider } from '@react-beauty/ui-core';

function App() {
  return (
    <ReactBeautyUIProvider defaultTheme="light">
      <YourApplication />
    </ReactBeautyUIProvider>
  );
}
```

Now you can use React Beauty components in your application:

```jsx
import { Accordion } from '@react-beauty/ui-accordion';
import { TextInput } from '@react-beauty/ui-text-input';

function MyComponent() {
  return (
    <div>
      <TextInput>
        <TextInput.Label htmlFor="my-input">Name</TextInput.Label>
        <TextInput.Field id="my-input" placeholder="Enter your name" />
      </TextInput>

      <Accordion>
        <Accordion.Header>
          <Accordion.Title>More Information</Accordion.Title>
          <Accordion.Close />
        </Accordion.Header>
        <Accordion.Content>
          <p>This is additional information about the form.</p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
```

## Design Principles

React Beauty components are built with these principles in mind:

1. **Composable** - Components can be combined in many ways to create complex UIs
2. **Customizable** - Design tokens and CSS variables allow for easy styling
3. **Consistent** - Similar patterns and props across all components
4. **Accessible** - Every component follows WCAG best practices
5. **Performant** - Optimized rendering with minimal dependencies


