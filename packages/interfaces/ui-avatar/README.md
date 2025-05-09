# Avatar Component

A modern, customizable avatar component for React applications to display user profile images or initials.

## Installation

```bash
npm install @react-beauty/ui-avatar
```

## Usage

```jsx
import { Avatar } from '@react-beauty/ui-avatar';

// Avatar with Initials
function InitialsAvatar() {
  return (
    <Avatar size="md">
      <Avatar.Initial>dm</Avatar.Initial>
    </Avatar>
  );
}

// Avatar with Image
function PictureAvatar() {
  return (
    <Avatar>
      <Avatar.Picture src="https://placecats.com/neo_2/300/200" />
    </Avatar>
  );
}

// Different sizes
function AvatarSizes() {
  return (
    <>
      <Avatar size="xs">
        <Avatar.Initial>XS</Avatar.Initial>
      </Avatar>
      <Avatar size="sm">
        <Avatar.Initial>SM</Avatar.Initial>
      </Avatar>
      <Avatar size="md">
        <Avatar.Initial>MD</Avatar.Initial>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Initial>LG</Avatar.Initial>
      </Avatar>
      <Avatar size="xl">
        <Avatar.Initial>XL</Avatar.Initial>
      </Avatar>
      <Avatar size="2xl">
        <Avatar.Initial>2XL</Avatar.Initial>
      </Avatar>
    </>
  );
}
```

## Components

### Avatar

The main container component that provides context to its children.

Props include:
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `children`: Avatar.Initial or Avatar.Picture components

### Avatar.Initial

Component for displaying a user's initials within an avatar.

Props include:
- `size`: (optional) Overrides the parent Avatar's size
- `children`: Text content (typically initials)

### Avatar.Picture

Component for displaying an image as an avatar.

Props include:
- `size`: (optional) Overrides the parent Avatar's size
- `src`: URL to the image

## Accessibility

The avatar component is built with accessibility in mind:
- Provides appropriate alt text for images
- Maintains color contrast ratios
- Includes appropriate ARIA attributes

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.