import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from '../index';

// Mock showModal and close methods for dialog element since they don't exist in JSDOM
beforeEach(() => {
  // Define showModal method
  HTMLDialogElement.prototype.showModal = vi.fn(function (
    this: HTMLDialogElement,
  ) {
    this.open = true;
  });

  // Define close method
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.open = false;
  });
});

describe('Modal', () => {
  it('should not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <Modal.Body>Modal Content</Modal.Body>
      </Modal>,
    );

    // Dialog element should exist but not be visible
    const dialog = document.querySelector('dialog');
    expect(dialog).toBeTruthy();
    expect(dialog?.open).toBeFalsy();
  });

  it('should render when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Body>Modal Content</Modal.Body>
      </Modal>,
    );

    // Dialog element should exist and be visible
    const dialog = document.querySelector('dialog');
    expect(dialog).toBeTruthy();
    expect(dialog?.open).toBeTruthy();

    // Check that content is visible
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should call onClose when the dismiss button is clicked', () => {
    const handleClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.DismissButton />
        </Modal.Header>
        <Modal.Body>Modal Content</Modal.Body>
      </Modal>,
    );

    // Find the dismiss button and click it
    const dismissButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(dismissButton);

    // Check if onClose was called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render header, body, and footer correctly', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>,
    );

    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Body')).toBeInTheDocument();
    expect(screen.getByText('Modal Footer')).toBeInTheDocument();
  });

  it('should apply size class based on width prop', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} width="lg">
        <Modal.Body>Large Modal</Modal.Body>
      </Modal>,
    );

    const dialog = document.querySelector('dialog');
    expect(dialog).toHaveAttribute('data-width', 'lg');
  });

  it('should render overlay when hasOverlay is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} hasOverlay={true}>
        <Modal.Body>Modal with overlay</Modal.Body>
      </Modal>,
    );

    // Check if overlay exists
    const overlay = document.querySelector('[data-is-open="true"]');
    expect(overlay).toBeTruthy();
  });

  it('should not render overlay when hasOverlay is false', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} hasOverlay={false}>
        <Modal.Body>Modal without overlay</Modal.Body>
      </Modal>,
    );

    // Check that overlay doesn't exist
    const overlay = document.querySelector('[data-is-open="true"]');
    expect(overlay).toBeNull();
  });
});
