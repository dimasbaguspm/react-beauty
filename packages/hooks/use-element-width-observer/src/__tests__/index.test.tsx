import { fireEvent, render } from '@react-beauty/vitest/selector';
import { act, useRef } from 'react';

import { ElementWidthObserverOptions, useElementWidthObserver } from '..';

describe('useElementWidthObserver', () => {
  it('should return the width of the node element in pixels', () => {
    const mockOnResize = vi.fn();

    render(<Component onResize={mockOnResize} />);

    expect(mockOnResize).not.toHaveBeenCalled();
    act(() => {
      fireEvent.resize(document.defaultView || window);
    });
    expect(mockOnResize).toHaveBeenCalledTimes(1);
  });
});

const Component = (options?: ElementWidthObserverOptions) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const size = useElementWidthObserver(textRef, options);

  return (
    <h1 ref={textRef} data-testid="text">
      {size}
    </h1>
  );
};
