import { Icon } from '@react-beauty/ui-icon';

import { Accordion } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';

const meta = {
  title: 'Accordion',
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--colors-main-goku)',
        },
      ],
    },
  },
  args: {
    children: 'Accordion Content',
    defaultExpanded: false,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Header>
        <Accordion.Title>Accordion Title</Accordion.Title>
        <Accordion.Close />
      </Accordion.Header>
      <Accordion.Content>
        <p>This is the accordion content area.</p>
      </Accordion.Content>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export const Default = {
  args: {},
};

export const DefaultExpanded = {
  args: {
    defaultExpanded: true,
  },
};

export const WithTitle = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Header>
        <Accordion.Title>Accordion Title</Accordion.Title>
        <Accordion.Close />
      </Accordion.Header>
      <Accordion.Content>
        <p>This is the accordion content area.</p>
      </Accordion.Content>
    </Accordion>
  ),
} satisfies StoryObj<typeof meta>;

export const WithLeadElement = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Header>
        <Accordion.LeadElement>
          <Icon name="otherFrame" size="md" />
        </Accordion.LeadElement>
        <Accordion.Title>With Lead Element</Accordion.Title>
        <Accordion.Close />
      </Accordion.Header>
      <Accordion.Content>
        <p>This accordion has a lead element.</p>
      </Accordion.Content>
    </Accordion>
  ),
} satisfies StoryObj<typeof meta>;

export const Multiple = {
  render: () => (
    <div>
      <Accordion style={{ marginBottom: '8px' }}>
        <Accordion.Header>
          <Accordion.Title>First Accordion</Accordion.Title>
          <Accordion.Close />
        </Accordion.Header>
        <Accordion.Content>
          <p>Content of the first accordion</p>
        </Accordion.Content>
      </Accordion>

      <Accordion style={{ marginBottom: '8px' }}>
        <Accordion.Header>
          <Accordion.Title>Second Accordion</Accordion.Title>
          <Accordion.Close />
        </Accordion.Header>
        <Accordion.Content>
          <p>Content of the second accordion</p>
        </Accordion.Content>
      </Accordion>
    </div>
  ),
} satisfies StoryObj<typeof meta>;

export default meta;
