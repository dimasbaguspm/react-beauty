import { action } from "@react-beauty/storybook";
import { Icon } from "@react-beauty/ui-icon";

import { Alert } from ".";

import type { Meta, StoryObj } from "@react-beauty/storybook";

const meta = {
  title: "Alert",
  args: {
    children: "Data uploaded to the server. Fire on!",
    intent: "info",
    type: "generic",
  },
  argTypes: {
    children: {
      control: {
        disabled: true,
      },
    },
    intent: {
      description: "The intent of the alert",
      options: ["none", "info", "success", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    type: {
      description: "The type of the alert",
      options: ["none", "generic", "colourful", "outline"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => <Alert {...args} />,
} satisfies Meta<typeof Alert>;

export const SingleLine: StoryObj<typeof meta> = {
  args: {
    children: "Data uploaded to the server. Fire on!",
  },
};

export const SingleLineWithIcon: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      Data uploaded to the server. Fire on!
    </Alert>
  ),
};

export const SingleLineWithDismiss: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      Data uploaded to the server. Fire on!
      <Alert.DismissButton onClick={action("dismiss")} />
    </Alert>
  ),
};

export const SingleLineComplete: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      Data uploaded to the server. Fire on!
      <Alert.DismissButton onClick={action("dismiss")} />
    </Alert>
  ),
};

export const MultiLine: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.Description>
        Pull request #999 merged successfully. Ready for review View the pull
        request on GitHub View the pull request on GitHub
      </Alert.Description>
    </Alert>
  ),
};

export const MultiLineWithIcon: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.Description>
        Pull request #999 merged successfully. Ready for review View the pull
        request on GitHub View the pull request on GitHub
      </Alert.Description>
    </Alert>
  ),
};

export const MultiLineWithDismiss: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.DismissButton onClick={action("dismiss")} />
      <Alert.Description>
        Pull request #999 merged successfully. Ready for review View the pull
        request on GitHub View the pull request on GitHub
      </Alert.Description>
    </Alert>
  ),
};

export const MultiLineComplete: StoryObj<typeof meta> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Icon>
        <Icon name="genericInfo" />
      </Alert.Icon>
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.DismissButton onClick={action("dismiss")} />
      <Alert.Description>
        Pull request #999 merged successfully. Ready for review View the pull
        request on GitHub View the pull request on GitHub
      </Alert.Description>
    </Alert>
  ),
};
export default meta;
