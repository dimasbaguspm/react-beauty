# UI Segment Component

The Segment component provides a user interface control for selecting between multiple segments or tabs. It supports text labels, icons, or a combination of both.

## Installation

```bash
npm install @react-beauty/ui-segment
```

## Usage

The Segment component follows a compound component pattern, which means you can use `Segment` as the parent component and `Segment.Item` as children.

### Basic Usage

```tsx
import { Segment } from '@react-beauty/ui-segment';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item value="segment1">Daily</Segment.Item>
      <Segment.Item value="segment2">Weekly</Segment.Item>
      <Segment.Item value="segment3">Monthly</Segment.Item>
    </Segment>
  );
};
```

### With Icons and Text

```tsx
import { Segment } from '@react-beauty/ui-segment';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item value="segment1">
        <Icon name="genericBookmark" size="md" />
        Bookmark
      </Segment.Item>
      <Segment.Item value="segment2">
        <Icon name="genericStar" size="md" />
        Star
      </Segment.Item>
      <Segment.Item value="segment3">
        <Icon name="genericInfo" size="md" />
        Info
      </Segment.Item>
    </Segment>
  );
};
```

### Icon-Only Segments

```tsx
import { Segment } from '@react-beauty/ui-segment';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item value="segment1">
        <Icon name="genericBookmark" size="md" />
      </Segment.Item>
      <Segment.Item value="segment2">
        <Icon name="genericStar" size="md" />
      </Segment.Item>
      <Segment.Item value="segment3">
        <Icon name="genericInfo" size="md" />
      </Segment.Item>
    </Segment>
  );
};
```

## Props

### Segment

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| value | string | Yes | The currently selected segment value |
| onValueChange | (value: string) => void | Yes | Callback fired when a segment is selected |
| children | ReactNode | Yes | Segment.Item components |

### Segment.Item

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| value | string | Yes | The value of this segment item |
| disabled | boolean | No | Whether the segment item is disabled |
| children | ReactNode | Yes | Content to display in the segment item |
