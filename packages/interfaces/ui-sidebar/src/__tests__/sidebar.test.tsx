import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { Sidebar } from '..';

describe('Sidebar', () => {
  it('renders correctly with all its parts', () => {
    render(
      <Sidebar isExpanded={true}>
        <Sidebar.Header>
          <div>Logo</div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Item icon="homeHouse">Dashboard</Sidebar.Item>
        </Sidebar.Body>
        <Sidebar.Footer>Footer Content</Sidebar.Footer>
      </Sidebar>,
    );

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Collapse sidebar' }),
    ).toBeInTheDocument();
  });

  it('toggles expanded state when toggle button is clicked', () => {
    const handleExpandedChange = vi.fn();
    render(
      <Sidebar isExpanded={true} onExpandedChange={handleExpandedChange}>
        <Sidebar.Header>
          <div>Logo</div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        <Sidebar.Body>Sidebar Content</Sidebar.Body>
      </Sidebar>,
    );

    const toggleButton = screen.getByRole('button', {
      name: 'Collapse sidebar',
    });
    fireEvent.click(toggleButton);
    expect(handleExpandedChange).toHaveBeenCalledWith(false);
  });

  it('renders in collapsed state correctly', () => {
    render(
      <Sidebar isExpanded={false}>
        <Sidebar.Header>
          <div>Logo</div>
          <Sidebar.ToggleButton />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Item icon="homeHouse">Dashboard</Sidebar.Item>
        </Sidebar.Body>
      </Sidebar>,
    );

    const sidebarContainer = screen
      .getByText('Dashboard')
      .closest('[data-expanded]');
    expect(sidebarContainer).toHaveAttribute('data-expanded', 'false');
    expect(
      screen.getByRole('button', { name: 'Expand sidebar' }),
    ).toBeInTheDocument();
  });

  it('renders Sidebar.Item with active state correctly', () => {
    render(
      <Sidebar isExpanded={true}>
        <Sidebar.Body>
          <Sidebar.Item icon="homeHouse" active onClick={() => {}}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.Body>
      </Sidebar>,
    );

    const item = screen.getByText('Dashboard').closest('[data-active]');
    expect(item).toHaveAttribute('data-active', 'true');
    expect(item).toHaveAttribute('aria-current', 'true');
  });

  it('renders Sidebar.Divider correctly', () => {
    render(
      <Sidebar isExpanded={true}>
        <Sidebar.Body>
          <Sidebar.Item>Item 1</Sidebar.Item>
          <Sidebar.Divider data-testid="divider" />
          <Sidebar.Item>Item 2</Sidebar.Item>
        </Sidebar.Body>
      </Sidebar>,
    );

    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('role', 'separator');
  });

  it('renders Sidebar.Section with title correctly', () => {
    render(
      <Sidebar isExpanded={true}>
        <Sidebar.Body>
          <Sidebar.Section>
            <Sidebar.SectionTitle>Main Menu</Sidebar.SectionTitle>
            <Sidebar.Item>Item 1</Sidebar.Item>
          </Sidebar.Section>
        </Sidebar.Body>
      </Sidebar>,
    );

    expect(screen.getByText('Main Menu')).toBeInTheDocument();
  });

  it('calls onExpandedChange with correct values', () => {
    const handleExpandedChange = vi.fn();
    const { rerender } = render(
      <Sidebar isExpanded={true} onExpandedChange={handleExpandedChange}>
        <Sidebar.Header>
          <Sidebar.ToggleButton data-testid="toggle" />
        </Sidebar.Header>
      </Sidebar>,
    );

    const toggleButton = screen.getByTestId('toggle');
    fireEvent.click(toggleButton);
    expect(handleExpandedChange).toHaveBeenCalledWith(false);

    // Reset the mock and test expanding
    handleExpandedChange.mockReset();
    rerender(
      <Sidebar isExpanded={false} onExpandedChange={handleExpandedChange}>
        <Sidebar.Header>
          <Sidebar.ToggleButton data-testid="toggle" />
        </Sidebar.Header>
      </Sidebar>,
    );

    fireEvent.click(toggleButton);
    expect(handleExpandedChange).toHaveBeenCalledWith(true);
  });

  it('properly passes through additional HTML attributes', () => {
    render(
      <Sidebar
        isExpanded={true}
        data-testid="sidebar-container"
        className="custom-sidebar"
      >
        <Sidebar.Header data-testid="sidebar-header" className="custom-header">
          Header
        </Sidebar.Header>
        <Sidebar.Body data-testid="sidebar-body" className="custom-body">
          <Sidebar.Item data-testid="sidebar-item" className="custom-item">
            Item
          </Sidebar.Item>
        </Sidebar.Body>
        <Sidebar.Footer data-testid="sidebar-footer" className="custom-footer">
          Footer
        </Sidebar.Footer>
      </Sidebar>,
    );

    expect(screen.getByTestId('sidebar-container')).toHaveClass(
      'custom-sidebar',
    );
    expect(screen.getByTestId('sidebar-header')).toHaveClass('custom-header');
    expect(screen.getByTestId('sidebar-body')).toHaveClass('custom-body');
    expect(screen.getByTestId('sidebar-item')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-footer')).toHaveClass('custom-footer');
  });
});
