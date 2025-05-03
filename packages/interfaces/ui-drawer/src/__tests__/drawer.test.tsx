import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { Drawer } from '..';

describe('Drawer', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HTMLDialogElement.prototype.showModal = vi.fn(function mock(this: any) {
      this.open = true;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HTMLDialogElement.prototype.close = vi.fn(function mock(this: any) {
      this.open = false;
    });
  });

  it('renders correctly with all its parts when open', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.DismissButton />
        </Drawer.Header>
        <Drawer.Body>Drawer Content</Drawer.Body>
        <Drawer.Footer>Drawer Footer</Drawer.Footer>
      </Drawer>,
    );

    expect(screen.getByText('Drawer Title')).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
    expect(screen.getByText('Drawer Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Close drawer' }),
    ).toBeInTheDocument();
  });

  it('renders the DrawerTitle component correctly', () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <Drawer.Header>
          <Drawer.Title>Test Title</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2'); // Verify it's an h2 element
  });

  it('calls onClose when DismissButton is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Header>
          <Drawer.Title>Test Title</Drawer.Title>
          <Drawer.DismissButton />
        </Drawer.Header>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    const dismissButton = screen.getByRole('button', { name: 'Close drawer' });
    fireEvent.click(dismissButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls showModal when isOpen is true', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('open');
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it('calls close when isOpen changes to false', () => {
    const handleClose = vi.fn();
    const { rerender } = render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    rerender(
      <Drawer isOpen={false} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    // Find the overlay and click it
    const overlay = screen.getByRole('dialog').previousSibling as HTMLElement;
    fireEvent.click(overlay);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the dialog backdrop', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    // Simulate clicking directly on the dialog (backdrop)
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking on dialog content', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    // Simulate clicking on content inside the dialog
    const content = screen.getByText('Content');
    fireEvent.click(content);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('does not render overlay when hasOverlay is false', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} hasOverlay={false}>
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    // The drawer dialog should exist, but not the overlay
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const dialog = screen.getByRole('dialog');
    expect(dialog.previousSibling).toBeNull();
  });

  it('applies different directions correctly', () => {
    const { rerender } = render(
      <Drawer isOpen={true} onClose={() => {}} direction="left">
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    let drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('data-direction', 'left');

    rerender(
      <Drawer isOpen={true} onClose={() => {}} direction="right">
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('data-direction', 'right');
  });

  it('applies different width values correctly', () => {
    const { rerender } = render(
      <Drawer isOpen={true} onClose={() => {}} width="sm">
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    let drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('data-width', 'sm');

    rerender(
      <Drawer isOpen={true} onClose={() => {}} width="md">
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('data-width', 'md');

    rerender(
      <Drawer isOpen={true} onClose={() => {}} width="lg">
        <Drawer.Body>Content</Drawer.Body>
      </Drawer>,
    );

    drawer = screen.getByRole('dialog');
    expect(drawer).toHaveAttribute('data-width', 'lg');
  });

  it('properly passes through additional HTML attributes', () => {
    render(
      <Drawer
        isOpen={true}
        onClose={() => {}}
        data-testid="drawer-container"
        className="custom-drawer"
      >
        <Drawer.Header data-testid="drawer-header" className="custom-header">
          <Drawer.Title data-testid="drawer-title" className="custom-title">
            Test Title
          </Drawer.Title>
          <Drawer.DismissButton
            data-testid="drawer-dismiss"
            className="custom-dismiss"
          />
        </Drawer.Header>
        <Drawer.Body data-testid="drawer-body" className="custom-body">
          Body
        </Drawer.Body>
        <Drawer.Footer data-testid="drawer-footer" className="custom-footer">
          Footer
        </Drawer.Footer>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-container')).toHaveClass('custom-drawer');
    expect(screen.getByTestId('drawer-header')).toHaveClass('custom-header');
    expect(screen.getByTestId('drawer-title')).toHaveClass('custom-title');
    expect(screen.getByTestId('drawer-dismiss')).toHaveClass('custom-dismiss');
    expect(screen.getByTestId('drawer-body')).toHaveClass('custom-body');
    expect(screen.getByTestId('drawer-footer')).toHaveClass('custom-footer');
  });
});
