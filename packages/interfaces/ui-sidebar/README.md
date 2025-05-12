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
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div style={{ 
      display: 'flex',
      overflow: 'hidden',
      position: 'relative' 
    }}>
      <Sidebar 
        isExpanded={isExpanded} 
        onExpandedChange={setIsExpanded}
      >
        <Sidebar.Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--colors-main-picollo)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              RB
            </span>
            {isExpanded && (
              <span style={{ fontWeight: 'bold' }}>React Beauty</span>
            )}
          </div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        
        <Sidebar.Body>
          <Sidebar.Section>
            <Sidebar.SectionTitle>Main</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericHome" />} 
                active
                onClick={() => {}}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="genericUser" />}
                onClick={() => {}}
              >
                Profile
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="genericSettings" />}
                onClick={() => {}}
              >
                Settings
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
          
          <Sidebar.Divider />
          
          <Sidebar.Section>
            <Sidebar.SectionTitle>Tools</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="chartLine" />}
                onClick={() => {}}
              >
                Analytics
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="devicesMac" />}
                onClick={() => {}}
              >
                Devices
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Body>
        
        <Sidebar.Footer>
          <Sidebar.Section>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericLogOut" />}
                onClick={() => {}}
              >
                Logout
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Footer>
      </Sidebar>
      
      <div style={{ 
        padding: '24px'
      }}>
        <h1>Main Content Area</h1>
        <p>
          This is the main content that adjusts based on the sidebar width.
        </p>
      </div>
    </div>
  );
}
```

## With Sections

```jsx
import { Sidebar } from '@react-beauty/ui-sidebar';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div style={{ 
      display: 'flex',
      overflow: 'hidden',
      position: 'relative' 
    }}>
      <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
        <Sidebar.Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--colors-main-picollo)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              RB
            </span>
            {isExpanded && (
              <span style={{ fontWeight: 'bold' }}>React Beauty</span>
            )}
          </div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        
        <Sidebar.Body>
          <Sidebar.Section>
            <Sidebar.SectionTitle>Main</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericHome" />} 
                active
                onClick={() => {}}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="genericUser" />}
                onClick={() => {}}
              >
                Profile
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="genericSettings" />}
                onClick={() => {}}
              >
                Settings
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
          
          <Sidebar.Divider />
          
          <Sidebar.Section>
            <Sidebar.SectionTitle>Reports</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="chartLine" />}
                onClick={() => {}}
              >
                Analytics
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="devicesMac" />}
                onClick={() => {}}
              >
                Devices
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="chartDashboard" />}
                onClick={() => {}}
              >
                Statistics
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
          
          <Sidebar.Divider />
          
          <Sidebar.Section>
            <Sidebar.SectionTitle>Account</Sidebar.SectionTitle>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericUser" />}
                onClick={() => {}}
              >
                My Account
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="securityShield" />}
                onClick={() => {}}
              >
                Security
              </Sidebar.Item>
              <Sidebar.Item 
                icon={<Icon name="notificationsBellAlarm" />}
                onClick={() => {}}
              >
                Notifications
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Body>
        
        <Sidebar.Footer>
          <Sidebar.Section>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericLogOut" />}
                onClick={() => {}}
              >
                Logout
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Footer>
      </Sidebar>
      
      <div style={{ 
        padding: '24px'
      }}>
        <h1>Main Content Area</h1>
        <p>
          This is the main content that adjusts based on the sidebar width.
        </p>
      </div>
    </div>
  );
}

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
| `icon` | ReactNode | - | Icon element from @react-beauty/ui-icon or any React node |
| `active` | boolean | `false` | Whether the item is in active state |
| `children` | ReactNode | - | Label content |
| `onClick` | (event: MouseEvent) => void | - | Click handler |

### Sidebar.ToggleButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconExpanded` | ReactNode | `<Icon name="arrowChevronLeft" />` | Icon to show when sidebar is expanded |
| `iconCollapsed` | ReactNode | `<Icon name="arrowChevronRight" />` | Icon to show when sidebar is collapsed |

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

## Custom Toggle Example

You can replace the default toggle button with a custom component:

```jsx
import { Sidebar } from '@react-beauty/ui-sidebar';
import { Icon } from '@react-beauty/ui-icon';
import { Button } from '@react-beauty/ui-button';
import { useState } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div style={{ 
      display: 'flex',
      overflow: 'hidden',
      position: 'relative' 
    }}>
      <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
        <Sidebar.Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--colors-main-picollo)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              RB
            </span>
            {isExpanded && (
              <span style={{ fontWeight: 'bold' }}>React Beauty</span>
            )}
          </div>
        </Sidebar.Header>
        
        <Sidebar.Body>
          {/* Sidebar content */}
        </Sidebar.Body>
        
        <Sidebar.Footer>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      
      <div style={{ 
        padding: '24px'
      }}>
        {/* Main content */}
      </div>
    </div>
  );
}
```

## Initially Collapsed Sidebar

You can initialize the sidebar in a collapsed state:

```jsx
import { Sidebar } from '@react-beauty/ui-sidebar';
import { Icon } from '@react-beauty/ui-icon';
import { useState } from 'react';

function App() {
  // Initialize with collapsed state
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div style={{ 
      display: 'flex',
      overflow: 'hidden',
      position: 'relative' 
    }}>
      <Sidebar isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
        <Sidebar.Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--colors-main-picollo)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              RB
            </span>
            {isExpanded && (
              <span style={{ fontWeight: 'bold' }}>React Beauty</span>
            )}
          </div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        
        <Sidebar.Body>
          {/* Sidebar content */}
        </Sidebar.Body>
        
        <Sidebar.Footer>
          <Sidebar.Section>
            <Sidebar.ItemList>
              <Sidebar.Item 
                icon={<Icon name="genericLogOut" />}
                onClick={() => {}}
              >
                Logout
              </Sidebar.Item>
            </Sidebar.ItemList>
          </Sidebar.Section>
        </Sidebar.Footer>
      </Sidebar>
      
      <div style={{ 
        padding: '24px'
      }}>
        <h1>Main Content Area</h1>
        <p>
          This is the main content that adjusts based on the sidebar width.
        </p>
        <p>The sidebar starts collapsed in this example.</p>
      </div>
    </div>
  );
}