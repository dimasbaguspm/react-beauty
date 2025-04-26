import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import React from 'react';

import { Tooltip } from '..';

describe('Tooltip', () => {
  it('should render trigger content', () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button>Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('should show tooltip on hover', async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>,
    );

    const trigger = screen.getByText('Hover me');
    const triggerParent = trigger.parentElement;

    // Ensure the parent element exists
    expect(triggerParent).not.toBeNull();
    if (!triggerParent) return;

    // Initially tooltip should not be visible
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

    // Hover over trigger
    fireEvent.mouseEnter(triggerParent);

    // Tooltip should now be visible
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();

    // Leave trigger
    fireEvent.mouseLeave(triggerParent);

    // Tooltip should be hidden again
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  it('should show tooltip on click when trigger="click"', () => {
    render(
      <Tooltip trigger="click">
        <Tooltip.Trigger>
          <button>Click me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>,
    );

    const trigger = screen.getByText('Click me');
    const triggerParent = trigger.parentElement;

    // Ensure the parent element exists
    expect(triggerParent).not.toBeNull();
    if (!triggerParent) return;

    // Initially tooltip should not be visible
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

    // Click trigger
    fireEvent.click(triggerParent);

    // Tooltip should now be visible
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();

    // Click again to hide
    fireEvent.click(triggerParent);

    // Tooltip should be hidden again
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  it('should respect defaultVisible prop', () => {
    render(
      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>,
    );

    // Tooltip should be visible by default
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('should work with compound component pattern', () => {
    render(
      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>Compound Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Compound Content</Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.getByText('Compound Trigger')).toBeInTheDocument();
    expect(screen.getByText('Compound Content')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(
      <Tooltip defaultVisible>
        <Tooltip.Trigger>
          <button>Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>,
    );

    const tooltip = screen.getByText('Tooltip content');
    expect(tooltip).toHaveAttribute('role', 'tooltip');

    const trigger = screen.getByText('Trigger').parentElement;
    // Ensure the parent element exists
    expect(trigger).not.toBeNull();
    if (trigger) {
      // Just check if aria-describedby attribute exists, without checking its specific value
      expect(trigger).toHaveAttribute('aria-describedby');
    }
  });
});
