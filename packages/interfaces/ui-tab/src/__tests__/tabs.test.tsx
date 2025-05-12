import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { Tabs } from '..';

describe('Tabs', () => {
  it('renders correctly with all its parts', () => {
    const handleValueChange = vi.fn();
    render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  it('calls onValueChange when clicking a tab', () => {
    const handleValueChange = vi.fn();
    render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2">
            <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(handleValueChange).toHaveBeenCalledWith('tab2');
  });

  it('does not call onValueChange when clicking a disabled tab', () => {
    const handleValueChange = vi.fn();
    render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
          <Tabs.Item value="tab2" disabled>
            <Tabs.ItemLabel>Tab 2</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(handleValueChange).not.toHaveBeenCalled();
  });

  it('renders with underline type by default', () => {
    render(
      <Tabs value="tab1" onValueChange={() => {}}>
        <Tabs.List data-testid="tabs-list">
          <Tabs.Item value="tab1" data-testid="tab-item">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    expect(screen.getByTestId('tab-item')).toHaveAttribute(
      'data-type',
      'underline',
    );
  });

  it('renders with pill type when specified', () => {
    render(
      <Tabs value="tab1" onValueChange={() => {}} type="pill">
        <Tabs.List data-testid="tabs-list">
          <Tabs.Item value="tab1" data-testid="tab-item">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    expect(screen.getByTestId('tab-item')).toHaveAttribute('data-type', 'pill');
  });

  it('renders with ghost type when specified', () => {
    render(
      <Tabs value="tab1" onValueChange={() => {}} type="ghost">
        <Tabs.List data-testid="tabs-list">
          <Tabs.Item value="tab1" data-testid="tab-item">
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    expect(screen.getByTestId('tab-item')).toHaveAttribute(
      'data-type',
      'ghost',
    );
  });

  it('renders with ItemLead and ItemTrail', () => {
    render(
      <Tabs value="tab1" onValueChange={() => {}}>
        <Tabs.List>
          <Tabs.Item value="tab1">
            <Tabs.ItemLead>🔍</Tabs.ItemLead>
            <Tabs.ItemLabel>Tab 1</Tabs.ItemLabel>
            <Tabs.ItemTrail>New</Tabs.ItemTrail>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>,
    );

    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});
