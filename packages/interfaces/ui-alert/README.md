# Alert Component

A modern, accessible alert component for React applications to display status messages and notifications.

## Installation

```bash
npm install @react-beauty/ui-alert
```

## Usage

```jsx
import { Alert } from '@react-beauty/ui-alert';
import { Icon } from '@react-beauty/ui-icon';

// Basic Single Line
function BasicAlert() {
  return (
    <Alert intent="info" type="generic">
      Data uploaded to the server. Fire on!
    </Alert>
  );
}

// Single Line with Icon
function AlertWithIcon() {
  return (
    <Alert intent="success" type="generic">
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      Data uploaded to the server. Fire on!
    </Alert>
  );
}

// With Dismiss Button
function DismissableAlert() {
  return (
    <Alert intent="warning" type="generic">
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      Data uploaded to the server. Fire on!
      <Alert.DismissButton onClick={() => console.log('dismissed')} />
    </Alert>
  );
}

// Multi-line Alert with Title and Description
function ComplexAlert() {
  return (
    <Alert intent="danger" type="colourful">
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.DismissButton onClick={() => console.log('dismissed')} />
      <Alert.Description>
        Pull request #999 merged successfully. Ready for review 
        View the pull request on GitHub.
      </Alert.Description>
    </Alert>
  );
}
```

## Components

### Alert

The main container component. Props include:
- `intent`: 'none' | 'info' | 'success' | 'warning' | 'danger'
- `type`: 'none' | 'generic' | 'colourful' | 'outline'

### Alert.Icon

Container for an icon to display in the alert.

### Alert.Title

The title component for multi-line alerts.

### Alert.Description

The description component for multi-line alerts.

### Alert.DismissButton

A button to dismiss/close the alert.

## Accessibility

The alert component is built with accessibility in mind:
- Uses appropriate ARIA roles and attributes
- Maintains proper focus management
- Ensures readable text contrast
- Provides keyboard interaction support

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.