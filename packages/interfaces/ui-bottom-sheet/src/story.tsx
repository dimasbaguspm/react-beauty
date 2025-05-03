/* eslint-disable import/max-dependencies */
import { Button } from '@react-beauty/ui-button';
import { TextArea } from '@react-beauty/ui-text-area';
import { TextInput } from '@react-beauty/ui-text-input';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { BottomSheetHeight } from './atoms/bottom-sheet-container';

import { BottomSheet } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Interfaces/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    // Set the component to only display properly on mobile viewports
    viewport: {
      defaultViewport: 'mobile1',
    },
    // Suggest to users to view this in mobile viewport
    docs: {
      description: {
        component:
          'Bottom Sheet is primarily designed for mobile interfaces. Please view examples in mobile viewport.',
      },
    },
  },
  argTypes: {
    isOpen: {
      description: 'Controls whether the bottom sheet is open',
      control: 'boolean',
    },
    height: {
      description: 'Controls the height of the bottom sheet',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    hasOverlay: {
      description:
        'Controls whether the bottom sheet has an overlay background',
      control: 'boolean',
    },
    hasShadow: {
      description: 'Controls whether the bottom sheet has a shadow',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

// Define a better type for the template args
interface TemplateArgs {
  children?: React.ReactNode;
  [key: string]: unknown;
}

// Base template for interactive stories with mobile-friendly styling
const BottomSheetTemplate = (args: TemplateArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="fill" size="sm" onClick={() => setIsOpen(true)}>
        Open Bottom Sheet
      </Button>
      <BottomSheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </BottomSheet>
    </div>
  );
};

// Basic example
export const Basic: Story = {
  render: (args) => (
    <BottomSheetTemplate {...args}>
      <BottomSheet.Header>
        <BottomSheet.Title>Basic Bottom Sheet</BottomSheet.Title>
        <BottomSheet.CloseButton />
      </BottomSheet.Header>
      <BottomSheet.Body>
        <p>This is a basic bottom sheet with just content.</p>
        <p>
          Bottom sheets are commonly used in mobile interfaces to present
          additional information or actions without navigating away from the
          current screen.
        </p>
      </BottomSheet.Body>
    </BottomSheetTemplate>
  ),
};

// With footer
export const WithFooter: Story = {
  render: (args) => (
    <BottomSheetTemplate {...args}>
      <BottomSheet.Header>
        <BottomSheet.Title>Bottom Sheet With Footer</BottomSheet.Title>
        <BottomSheet.CloseButton />
      </BottomSheet.Header>
      <BottomSheet.Body>
        <p>This bottom sheet includes a footer with action buttons.</p>
        <p>Footers are ideal for primary and secondary actions.</p>
      </BottomSheet.Body>
      <BottomSheet.Footer>
        <Button size="sm" variant="fill" onClick={() => {}}>
          Okay
        </Button>
      </BottomSheet.Footer>
    </BottomSheetTemplate>
  ),
};

// Different heights
export const DifferentHeights: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState<BottomSheetHeight>('md');

    return (
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'row' }}>
        <Button
          variant="fill"
          size="sm"
          onClick={() => {
            setHeight('sm');
            setIsOpen(true);
          }}
        >
          Small
        </Button>
        <Button
          variant="fill"
          size="sm"
          onClick={() => {
            setHeight('md');
            setIsOpen(true);
          }}
        >
          Medium
        </Button>
        <Button
          variant="fill"
          size="sm"
          onClick={() => {
            setHeight('lg');
            setIsOpen(true);
          }}
        >
          Large
        </Button>

        <BottomSheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          height={height}
        >
          <BottomSheet.Header>
            <BottomSheet.Title>
              {height.toUpperCase()} Bottom Sheet
            </BottomSheet.Title>
            <BottomSheet.CloseButton />
          </BottomSheet.Header>
          <BottomSheet.Body>
            <p>This example demonstrates different height options.</p>
            <p>
              Current height: <strong>{height}</strong>
            </p>
            <ul>
              <li>
                <strong>sm</strong>: Small height, good for simple messages or
                confirmations
              </li>
              <li>
                <strong>md</strong>: Medium height, default size for most use
                cases
              </li>
              <li>
                <strong>lg</strong>: Large height, ideal for more complex
                content
              </li>
            </ul>
          </BottomSheet.Body>
        </BottomSheet>
      </div>
    );
  },
};

// Mobile form example
export const MobileForm: Story = {
  render: (args) => (
    <BottomSheetTemplate {...args}>
      <BottomSheet.Header>
        <BottomSheet.Title>Contact Form</BottomSheet.Title>
        <BottomSheet.CloseButton />
      </BottomSheet.Header>
      <BottomSheet.Body>
        <TextInput>
          <TextInput.Label htmlFor="name-input">Name</TextInput.Label>
          <TextInput.Field id="name-input" placeholder="Your name" />
        </TextInput>

        <TextInput>
          <TextInput.Label htmlFor="email-input">Email</TextInput.Label>
          <TextInput.Field
            id="email-input"
            type="email"
            placeholder="you@example.com"
          />
        </TextInput>

        <TextArea>
          <TextArea.Label htmlFor="message-textarea">Message</TextArea.Label>
          <TextArea.Field
            id="message-textarea"
            placeholder="Your message here..."
            rows={3}
          />
        </TextArea>
      </BottomSheet.Body>
      <BottomSheet.Footer>
        <Button size="sm" variant="fill" onClick={() => {}}>
          Submit
        </Button>
      </BottomSheet.Footer>
    </BottomSheetTemplate>
  ),
};
