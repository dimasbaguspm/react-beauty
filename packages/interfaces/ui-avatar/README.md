# Avatar Component

A modern, customizable avatar component for React applications to display user profile images or initials.

## Installation

```bash
npm install @react-beauty/ui-avatar
```

## Usage

```jsx
import { AvatarInitial, AvatarPicture } from '@react-beauty/ui-avatar';

// Avatar with Initials
function InitialsAvatar() {
  return (
    <AvatarInitial size="md">dm</AvatarInitial>
  );
}

// Avatar with Image
function PictureAvatar() {
  return (
    <AvatarPicture src="https://placecats.com/neo_2/300/200" />
  );
}

// Different sizes
function AvatarSizes() {
  return (
    <>
      <AvatarInitial size="xs">XS</AvatarInitial>
      <AvatarInitial size="sm">SM</AvatarInitial>
      <AvatarInitial size="md">MD</AvatarInitial>
      <AvatarInitial size="lg">LG</AvatarInitial>
      <AvatarInitial size="xl">XL</AvatarInitial>
      <AvatarInitial size="2xl">2XL</AvatarInitial>
    </>
  );
}
```

## Components

### AvatarInitial

Component for displaying a user's initials within an avatar. Props include:
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `children`: Text content (typically initials)

### AvatarPicture

Component for displaying an image as an avatar. Props include:
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `src`: URL to the image

## Accessibility

The avatar component is built with accessibility in mind:
- Provides appropriate alt text for images
- Maintains color contrast ratios
- Includes appropriate ARIA attributes

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.