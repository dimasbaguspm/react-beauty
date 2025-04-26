import { useState } from 'react';

import { Pagination } from './atoms/pagination';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--colors-main-gohan)',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Current active page (1-indexed)',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Total number of pages',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
      description: 'Size of pagination items',
      defaultValue: 'md',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the component',
      defaultValue: false,
    },
    onPageChange: {
      description: 'Callback when page is changed',
      action: 'changed',
    },
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

// Interactive story with actual state management
const InteractivePagination = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
  );
};

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const Interactive = {
  render: () => <InteractivePagination />,
};

export const WithFewPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const SmallSize: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'sm',
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    disabled: true,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const MiddleOfRange: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 8,
    totalPages: 20,
    onPageChange: (page) => console.log(`Changed to page ${page}`),
  },
};

export default meta;
