# UI Segment Component

The Segment component provides a user interface control for selecting between multiple segments or tabs. It supports text labels, icons, or a combination of both.

## Installation

```bash
npm install @react-beauty/ui-segment
```

## Usage

The Segment component follows a compound component pattern, which means you can use `Segment` as the parent component and `Segment.Item` as children.

### Basic Usage with Text Labels

```tsx
import { Segment } from '@react-beauty/ui-segment';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item value="segment1" label="Daily">Daily</Segment.Item>
      <Segment.Item value="segment2" label="Weekly">Weekly</Segment.Item>
      <Segment.Item value="segment3" label="Monthly">Monthly</Segment.Item>
    </Segment>
  );
};
```

### With Icons and Text

```tsx
import { Segment } from '@react-beauty/ui-segment';
import { Icon } from '@react-beauty/ui-icon';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item 
        value="segment1" 
        label="List" 
        icon={<Icon name="textListView" size="xs" />}
      >
        List
      </Segment.Item>
      <Segment.Item 
        value="segment2" 
        label="Download" 
        icon={<Icon name="genericDownload" size="xs" />}
      >
        Download
      </Segment.Item>
      <Segment.Item 
        value="segment3" 
        label="Bookmark" 
        icon={<Icon name="genericBookmark" size="xs" />}
      >
        Bookmark
      </Segment.Item>
    </Segment>
  );
};
```

### Icon-Only Segments (with Accessibility)

```tsx
import { Segment } from '@react-beauty/ui-segment';
import { Icon } from '@react-beauty/ui-icon';

const Example = () => {
  const [value, setValue] = useState('segment1');

  return (
    <Segment value={value} onValueChange={setValue}>
      <Segment.Item 
        value="segment1" 
        aria-label="List view" 
        icon={<Icon name="textListView" size="xs" />}
      >
        <span className="sr-only">List view</span>
      </Segment.Item>
      <Segment.Item 
        value="segment2" 
        aria-label="Bookmark" 
        icon={<Icon name="genericBookmark" size="xs" />}
      >
        <span className="sr-only">Bookmark</span>
      </Segment.Item>
      <Segment.Item 
        value="segment3" 
        aria-label="Download" 
        icon={<Icon name="genericDownload" size="xs" />}
      >
        <span className="sr-only">Download</span>
      </Segment.Item>
    </Segment>
  );
};
```

## API

### Segment

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | The currently selected value |
| `onValueChange` | `(value: string) => void` | Callback when the selected value changes |
| `children` | `ReactNode` | Segment.Item components |

### Segment.Item

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | The value of this segment item |
| `label` | `string` | Optional text label to display |
| `icon` | `ReactNode` | Optional icon to display before the label |
| `children` | `ReactNode` | Required content, can be used as fallback |
| `aria-label` | `string` | Accessible label for screen readers (especially important for icon-only items) |

## Accessibility

The Segment component uses the appropriate ARIA roles and attributes to ensure accessibility:

- The entire segment control has a `role="tablist"` attribute
- Selected segments are properly indicated with the `aria-selected` attribute
- Icon-only segments should include an `aria-label` for screen readers
