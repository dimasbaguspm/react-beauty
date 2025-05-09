/* eslint-disable import/max-dependencies */

import { Button } from '@react-beauty/ui-button';
import { Icon } from '@react-beauty/ui-icon';
import { TextArea } from '@react-beauty/ui-text-area';
import { TextInput } from '@react-beauty/ui-text-input';
import { useState } from 'react';

import { ModalWidth } from './atoms';

import { Modal } from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base Modal Demo with all parts
const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button size="sm" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>
          <p>
            This is the modal content. You can put any content here such as
            text, forms, images, or other components.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Basic Modal Example
export const Default: Story = {
  render: () => <ModalDemo />,
};

// Modal with different sizes
const SizeVariants = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpen = (size: string) => setOpenModal(size);
  const handleClose = () => setOpenModal(null);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button size="sm" onClick={() => handleOpen('sm')}>
        Small
      </Button>
      <Button size="sm" onClick={() => handleOpen('md')}>
        Medium
      </Button>
      <Button size="sm" onClick={() => handleOpen('lg')}>
        Large
      </Button>
      <Button size="sm" onClick={() => handleOpen('xl')}>
        Extra Large
      </Button>

      {['sm', 'md', 'lg', 'xl'].map((size) => (
        <Modal
          key={size}
          isOpen={openModal === size}
          onClose={handleClose}
          width={size as ModalWidth}
        >
          <Modal.Header>
            <Modal.Title>{size.toUpperCase()} Modal</Modal.Title>
            <Modal.DismissButton />
          </Modal.Header>
          <Modal.Body>
            <p>This is a {size} sized modal.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </div>
  );
};

export const Sizes: Story = {
  render: () => <SizeVariants />,
};

// Modal without overlay
const NoOverlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button size="sm" onClick={() => setIsOpen(true)}>
        Open Modal without Overlay
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hasOverlay={false}
      >
        <Modal.Header>
          <Modal.Title>No Overlay Modal</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>
          <p>This modal doesn't have a background overlay.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const WithoutOverlay: Story = {
  render: () => <NoOverlayModal />,
};

// Modal without shadow
const NoShadowModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button size="sm" onClick={() => setIsOpen(true)}>
        Open Modal without Shadow
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} hasShadow={false}>
        <Modal.Header>
          <Modal.Title>No Shadow Modal</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>
          <p>This modal doesn't have a shadow effect.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const WithoutShadow: Story = {
  render: () => <NoShadowModal />,
};

// Modal with custom content
const CustomContentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (emailValue: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValid(emailValue.length > 0 && validateEmail(emailValue));
    setEmailError(emailValue.length > 0 && !validateEmail(emailValue));
  };

  const handleSubmit = () => {
    // Simple validation
    const isNameEmpty = !name;
    const isEmailInvalid = !email || !validateEmail(email);
    const isMessageEmpty = !message;

    setNameError(isNameEmpty);
    setEmailError(isEmailInvalid);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailInvalid && !isMessageEmpty) {
      // Form is valid
      setIsOpen(false);
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
      setEmailValid(false);
    }
  };

  return (
    <div>
      <Button size="sm" onClick={() => setIsOpen(true)}>
        Open Form Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Contact Form</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextInput hasError={nameError}>
              <TextInput.Label htmlFor="name">Name</TextInput.Label>
              <TextInput.Field
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              <TextInput.LeadElement>
                <Icon name="genericUser" size="md" />
              </TextInput.LeadElement>
              {nameError && (
                <TextInput.HelperText>Name is required</TextInput.HelperText>
              )}
            </TextInput>

            <TextInput hasError={emailError}>
              <TextInput.Label htmlFor="email">Email</TextInput.Label>
              <TextInput.Field
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
              />
              <TextInput.LeadElement>
                <Icon name="mailEmailStats" size="md" />
              </TextInput.LeadElement>
              {emailValid && (
                <TextInput.TrailElement>
                  <Icon name="genericCheckRounded" size="md" />
                </TextInput.TrailElement>
              )}
              {emailError && (
                <TextInput.TrailElement>
                  <Icon
                    name="controlsCloseSmall"
                    size="md"
                    style={{ color: 'red' }}
                  />
                </TextInput.TrailElement>
              )}
              {emailError && (
                <TextInput.HelperText>
                  Please enter a valid email address
                </TextInput.HelperText>
              )}
            </TextInput>

            <TextArea hasError={messageError}>
              <TextArea.Label htmlFor="message">Message</TextArea.Label>
              <TextArea.Field
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
              />
              {messageError && (
                <TextArea.HelperText>Message is required</TextArea.HelperText>
              )}
            </TextArea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const FormModal: Story = {
  render: () => <CustomContentModal />,
};
