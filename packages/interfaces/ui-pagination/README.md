# Pagination Component

A modern, accessible pagination component for React applications that helps users navigate through multi-page content.

## Installation

```bash
npm install @react-beauty/ui-pagination
```

## Usage

```jsx
import { Pagination } from '@react-beauty/ui-pagination';
import { useState } from 'react';

// Basic Usage
function BasicPagination() {
  return (
    <Pagination 
      currentPage={1} 
      totalPages={10} 
      onPageChange={(page) => console.log(`Changed to page ${page}`)} 
    />
  );
}

// Interactive Pagination with State
function InteractivePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination 
      currentPage={currentPage} 
      totalPages={10} 
      onPageChange={setCurrentPage} 
    />
  );
}

// Small Size Pagination
function SmallPagination() {
  return (
    <Pagination 
      currentPage={1} 
      totalPages={10} 
      size="sm" 
      onPageChange={(page) => console.log(`Changed to page ${page}`)} 
    />
  );
}

// Disabled Pagination
function DisabledPagination() {
  return (
    <Pagination 
      currentPage={1} 
      totalPages={10} 
      disabled={true} 
      onPageChange={(page) => console.log(`Changed to page ${page}`)} 
    />
  );
}
```

## Props

- `currentPage`: number - Current active page (1-indexed)
- `totalPages`: number - Total number of pages
- `size`: 'sm' | 'md' - Size of pagination items (default: 'md')
- `disabled`: boolean - Disable the component (default: false)
- `onPageChange`: (page: number) => void - Callback when page is changed

## Accessibility

The pagination component is built with accessibility in mind:
- Proper keyboard navigation support
- ARIA attributes for current and disabled states
- Focus management for interactive elements
- Appropriate contrast ratios for all states

## Customization

Styling is handled through CSS variables, allowing for easy customization through the design token system.