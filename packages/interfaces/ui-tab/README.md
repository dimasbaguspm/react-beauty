# @react-beauty/ui-tab

UI Tab component for React Beauty design system.

## Installation

```bash
npm install @react-beauty/ui-tab
```

## Usage

### Basic Usage

```tsx
import { Tabs } from '@react-beauty/ui-tab';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState('tab1');
  
  return (
    <>
      <Tabs value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Recent</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLabel>Popular</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab3">
            <Tabs.ItemLabel>Trending</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>
      
      {/* Content managed by consumer */}
      {value === 'tab1' && (
        <div>
          <h3>Recent Content</h3>
          <p>This is the recent content tab.</p>
        </div>
      )}
      {value === 'tab2' && (
        <div>
          <h3>Popular Content</h3>
          <p>This is the popular content tab.</p>
        </div>
      )}
      {value === 'tab3' && (
        <div>
          <h3>Trending Content</h3>
          <p>This is the trending content tab.</p>
        </div>
      )}
    </>
  );
}
```

### Tab Types

The component supports three visual styles: `underline` (default), `pill`, and `ghost`.

```tsx
<Tabs value={value} onValueChange={setValue} type="pill">
  {/* ... */}
</Tabs>
```

### With Icons

```tsx
<Tabs value={value} onValueChange={setValue}>
  <Tabs.List>
    <Tabs.Item value="tab1">
      <Tabs.ItemLead>
        {/* Add your icon component here */}
        <span>🏠</span>
      </Tabs.ItemLead>
      <Tabs.ItemLabel>Schedule</Tabs.ItemLabel>
    </Tabs.Item>
    {/* ... */}
  </Tabs.List>
  {/* ... */}
</Tabs>
```

### With Badges

```tsx
<Tabs value={value} onValueChange={setValue}>
  <Tabs.List>
    <Tabs.Item value="tab1">
      <Tabs.ItemLabel>Inbox</Tabs.ItemLabel>
      <Tabs.ItemTrail>
        {/* Add your tag/badge component here */}
        <span className="badge">5</span>
      </Tabs.ItemTrail>
    </Tabs.Item>
    {/* ... */}
  </Tabs.List>
  {/* ... */}
</Tabs>
```

## Accessibility

The Tab component is built with accessibility in mind:

- Each tab has the appropriate `role="tab"` attribute
- The selected tab has `aria-selected="true"`
- When implementing tab panels, ensure your content has `role="tabpanel"` and is associated with the respective tab

## Props

### Tabs

| Prop         | Type                             | Description                            |
|--------------|----------------------------------|----------------------------------------|
| value        | string                           | Current selected tab value             |
| onValueChange| (value: string) => void          | Called when tab selection changes      |
| type         | 'underline' \| 'pill' \| 'ghost' | Visual style of tabs (default: 'underline') |
| children     | ReactNode                        | Tab components                         |

### Tabs.Item

| Prop         | Type                    | Description                    |
|--------------|-------------------------|--------------------------------|
| value        | string                  | Value identifying the tab      |
| disabled     | boolean                 | Whether the tab is disabled    |
| children     | ReactNode               | Content of the tab             |

## License

MIT
