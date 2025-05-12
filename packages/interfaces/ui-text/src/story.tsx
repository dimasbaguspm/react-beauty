import { Text } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'label',
        'small',
      ],
      defaultValue: 'p',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Text Component',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Text Component',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children:
      'This is a paragraph of text. It demonstrates the paragraph styling with a bit more content to show how the text wraps and flows within the designated space.',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    children: 'This is inline span text.',
  },
  render: (args) => (
    <div>
      <Text>This is a paragraph with a </Text>
      <Text {...args} />
      <Text> inside it.</Text>
    </div>
  ),
};

export const Label: Story = {
  args: {
    as: 'label',
    children: 'Form Label',
  },
};

export const Small: Story = {
  args: {
    as: 'small',
    children: 'This is small text often used for captions or fine print.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h5">Heading 5</Text>
      <Text as="h6">Heading 6</Text>
      <Text as="p">
        This is a paragraph with standard text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
        cursus ante dapibus diam.
      </Text>
      <div>
        <Text as="span">This is span text. </Text>
        <Text as="span">Another span right next to it.</Text>
      </div>
      <Text as="label">This is a label</Text>
      <Text as="small">This is small text for fine details</Text>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text as="h1" style={{ color: 'var(--colors-main-picollo)' }}>
        Custom Colored Heading
      </Text>
      <Text as="p" style={{ fontStyle: 'italic' }}>
        This paragraph has custom italic styling.
      </Text>
      <Text as="p" style={{ textDecoration: 'underline' }}>
        This paragraph has an underline.
      </Text>
      <Text
        as="span"
        style={{
          backgroundColor: 'var(--colors-main-beerus)',
          padding: '4px 8px',
          borderRadius: '4px',
        }}
      >
        Span with background
      </Text>
    </div>
  ),
};

export const WithDataTestId: Story = {
  render: () => (
    <Text data-testid="test-text">Text with data-testid for testing</Text>
  ),
};
