import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import { BottomSheet } from '../index';

// Mock the HTMLDialogElement methods that aren't implemented in JSDOM
beforeEach(() => {
  // Mock showModal
  if (!HTMLDialogElement.prototype.showModal) {
    HTMLDialogElement.prototype.showModal = vi.fn();
  }

  // Mock close
  if (!HTMLDialogElement.prototype.close) {
    HTMLDialogElement.prototype.close = vi.fn();
  }
});

describe('BottomSheet Component', () => {
  test('renders when isOpen is true', () => {
    const onClose = vi.fn();

    render(
      <BottomSheet isOpen={true} onClose={onClose}>
        <BottomSheet.Header>
          <BottomSheet.Title>Test Title</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>Test Content</BottomSheet.Body>
      </BottomSheet>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('does not render content when isOpen is false', () => {
    const onClose = vi.fn();

    render(
      <BottomSheet isOpen={false} onClose={onClose}>
        <BottomSheet.Header>
          <BottomSheet.Title>Test Title</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>Test Content</BottomSheet.Body>
      </BottomSheet>,
    );

    // Content is technically in the document, but not visible
    const title = screen.queryByText('Test Title');
    const content = screen.queryByText('Test Content');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    // Check that the dialog is not open
    const dialog = document.querySelector('dialog');
    expect(dialog).not.toHaveAttribute('open');
  });

  test('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();

    render(
      <BottomSheet isOpen={true} onClose={onClose} hasOverlay={true}>
        <BottomSheet.Header>
          <BottomSheet.Title>Test Title</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>Test Content</BottomSheet.Body>
      </BottomSheet>,
    );

    // Find the overlay element
    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).not.toBeNull();

    if (overlay) {
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalledTimes(1);
    }
  });

  test('renders with different height values', () => {
    const onClose = vi.fn();

    const { rerender } = render(
      <BottomSheet isOpen={true} onClose={onClose} height="sm">
        <BottomSheet.Body>Small</BottomSheet.Body>
      </BottomSheet>,
    );

    // The height attribute should be on the wrapper, not the dialog itself
    const wrapper = document.querySelector('[data-height="sm"]');
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveAttribute('data-height', 'sm');

    rerender(
      <BottomSheet isOpen={true} onClose={onClose} height="lg">
        <BottomSheet.Body>Large</BottomSheet.Body>
      </BottomSheet>,
    );

    const updatedWrapper = document.querySelector('[data-height="lg"]');
    expect(updatedWrapper).not.toBeNull();
    expect(updatedWrapper).toHaveAttribute('data-height', 'lg');
  });

  test('renders footer when provided', () => {
    const onClose = vi.fn();

    render(
      <BottomSheet isOpen={true} onClose={onClose}>
        <BottomSheet.Header>
          <BottomSheet.Title>Test Title</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>Test Content</BottomSheet.Body>
        <BottomSheet.Footer>
          <button>Test Button</button>
        </BottomSheet.Footer>
      </BottomSheet>,
    );

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('header can be customized with different content', () => {
    const onClose = vi.fn();

    render(
      <BottomSheet isOpen={true} onClose={onClose}>
        <BottomSheet.Header>
          <div>Custom Header Content</div>
        </BottomSheet.Header>
        <BottomSheet.Body>Test Content</BottomSheet.Body>
      </BottomSheet>,
    );

    expect(screen.getByText('Custom Header Content')).toBeInTheDocument();
  });
});
