import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { Segment } from '..';

describe('Segment', () => {
  it('renders correctly with all its parts', () => {
    const handleValueChange = vi.fn();
    render(
      <Segment value="segment1" onValueChange={handleValueChange}>
        <Segment.Item value="segment1">Segment 1</Segment.Item>
        <Segment.Item value="segment2">Segment 2</Segment.Item>
      </Segment>,
    );

    expect(screen.getByText('Segment 1')).toBeInTheDocument();
    expect(screen.getByText('Segment 2')).toBeInTheDocument();
  });

  it('calls onValueChange when clicking a segment', () => {
    const handleValueChange = vi.fn();
    render(
      <Segment value="segment1" onValueChange={handleValueChange}>
        <Segment.Item value="segment1">Segment 1</Segment.Item>
        <Segment.Item value="segment2">Segment 2</Segment.Item>
      </Segment>,
    );

    fireEvent.click(screen.getByText('Segment 2'));
    expect(handleValueChange).toHaveBeenCalledWith('segment2');
  });

  it('does not call onValueChange when clicking a disabled segment', () => {
    const handleValueChange = vi.fn();
    render(
      <Segment value="segment1" onValueChange={handleValueChange}>
        <Segment.Item value="segment1">Segment 1</Segment.Item>
        <Segment.Item value="segment2" disabled>
          Segment 2
        </Segment.Item>
      </Segment>,
    );

    fireEvent.click(screen.getByText('Segment 2'));
    expect(handleValueChange).not.toHaveBeenCalled();
  });

  it('marks the active segment correctly', () => {
    render(
      <Segment value="segment2" onValueChange={() => {}}>
        <Segment.Item value="segment1" data-testid="segment-1">
          Segment 1
        </Segment.Item>
        <Segment.Item value="segment2" data-testid="segment-2">
          Segment 2
        </Segment.Item>
      </Segment>,
    );

    expect(screen.getByTestId('segment-2')).toHaveAttribute(
      'data-active',
      'true',
    );
    expect(screen.getByTestId('segment-1')).toHaveAttribute(
      'data-active',
      'false',
    );
  });

  it('renders with icons correctly', () => {
    render(
      <Segment value="segment1" onValueChange={() => {}}>
        <Segment.Item value="segment1">
          <span data-testid="icon">Icon</span>
          Segment 1
        </Segment.Item>
      </Segment>,
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Segment 1')).toBeInTheDocument();
  });
});
