# Sidebar Component

A customizable sidebar navigation component for React applications with expand/collapse functionality.

## Installation

```bash
npm install @react-beauty/ui-sidebar
```

## Features

- Expandable/collapsible sidebar with smooth transitions
- Compound component pattern for easy composition
- Section grouping with titles
- Accessible navigation items with active states
- Custom toggle control

## Basic Usage

```jsx
import { Sidebar } from '@react-beauty/ui-sidebar';
import { useState } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Sidebar 
        isExpanded={isExpanded} 
        onExpandedChange={setIsExpanded}
      >
        <Sidebar.Header>
          <div>Logo</div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        
        <Sidebar.Body>
          <Sidebar.Section>
            <Sidebar.SectionTitle>Navigation</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item icon="homeHouse" active>Dashboard</Sidebar.Item>
              <Sidebar.Item icon="userPerson">Profile</Sidebar.Item>
              <Sidebar.Item icon="settingsControls">Settings</Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
          
          <Sidebar.Divider />
          
          <Sidebar.Section>
            <Sidebar.SectionTitle>Reports</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item icon="businessAnalytics">Analytics</Sidebar.Item>
              <Sidebar.Item icon="devicesComputer">Devices</Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Body>
        
        <Sidebar.Footer>
          <Sidebar.Section>
            <Sidebar.ItemList>
              <Sidebar.Item icon="logoutExit">Logout</Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Footer>
      </Sidebar>
      
      <div style={{ 
        marginLeft: isExpanded ? '240px' : '64px',
        padding: '24px',
        transition: 'margin-left 300ms ease-in-out'
      }}>
        {/* Main content */}
      </div>
    </div>
  );
}
```

## With Sections

```jsx
<Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
  <Sidebar.Header>
    {/* Header content */}
  </Sidebar.Header>
  
  <Sidebar.Body>
    <Sidebar.Section>
      <Sidebar.SectionTitle>Main</Sidebar.SectionTitle>
      <Sidebar.ItemList>
        <Sidebar.Item icon="homeHouse" active>Dashboard</Sidebar.Item>
        <Sidebar.Item icon="userPerson">Profile</Sidebar.Item>
      </Sidebar.ItemList>
    </Sidebar.Section>
    
    <Sidebar.Section>
      <Sidebar.SectionTitle>Reports</Sidebar.SectionTitle>
      <Sidebar.ItemList>
        <Sidebar.Item icon="businessAnalytics">Analytics</Sidebar.Item>
        <Sidebar.Item icon="businessChartBar">Statistics</Sidebar.Item>
      </Sidebar.ItemList>
    </Sidebar.Section>
  </Sidebar.Body>
  
  <Sidebar.Footer>
    <Sidebar.Section>
      <Sidebar.ItemList>
        <Sidebar.Item icon="logoutExit">Logout</Sidebar.Item>
      </Sidebar.ItemList>
    </Sidebar.Section>
  </Sidebar.Footer>
</Sidebar>
```

## API

### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isExpanded` | boolean | `true` | Controls whether the sidebar is expanded or collapsed |
| `onExpandedChange` | (isExpanded: boolean) => void | - | Callback fired when sidebar expanded state changes |
| `children` | ReactNode | - | Content to render inside the sidebar |

### Sidebar.Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | string | - | Icon name from @react-beauty/ui-icon |
| `active` | boolean | `false` | Whether the item is in active state |
| `children` | ReactNode | - | Label content |
| `onClick` | (event: MouseEvent) => void | - | Click handler |

### Sidebar.ToggleButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconExpanded` | string | 'arrowChevronLeft' | Icon to show when sidebar is expanded |
| `iconCollapsed` | string | 'arrowChevronRight' | Icon to show when sidebar is collapsed |

### Other Components

- `Sidebar.Header` - Container for the top section of the sidebar
- `Sidebar.Body` - Main container for sidebar content
- `Sidebar.Footer` - Container for the bottom section of the sidebar
- `Sidebar.Divider` - Horizontal separator line
- `Sidebar.Section` - Container for grouping items
- `Sidebar.SectionTitle` - Title for a section
- `Sidebar.ItemList` - Container for navigation items, renders as a semantic `<ul>` element

## Accessibility

- Proper semantic structure with `<ul>` and `<li>` elements for navigation lists
- Navigation items support `aria-current="page"` for active state
- Toggle button includes descriptive `aria-label`
- Focus management for keyboard navigation
- Section titles are properly separated from navigation items
- ARIA roles enhance screen reader announcements