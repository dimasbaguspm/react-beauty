import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { TextArea } from '..';

describe('TextArea', () => {
  it('renders correctly with all its parts', () => {
    render(
      <TextArea>
        <TextArea.Label htmlFor="test-textarea">Test Label</TextArea.Label>
        <TextArea.Field id="test-textarea" placeholder="Test placeholder" />
        <TextArea.HelperText>Helper text</TextArea.HelperText>
      </TextArea>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('applies error state correctly to all child components', () => {
    render(
      <TextArea hasError>
        <TextArea.Label htmlFor="error-textarea">Error Label</TextArea.Label>
        <TextArea.Field id="error-textarea" data-testid="textarea-field" />
        <TextArea.HelperText data-testid="helper-text">
          Error message
        </TextArea.HelperText>
      </TextArea>,
    );

    const textareaWrapper = screen.getByTestId('textarea-field').closest('div');
    const helperText = screen.getByTestId('helper-text');

    expect(textareaWrapper).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-error', 'true');
  });

  it('handles input changes correctly', () => {
    const handleChange = vi.fn();
    render(
      <TextArea>
        <TextArea.Field
          id="change-textarea"
          onChange={handleChange}
          data-testid="textarea-field"
        />
      </TextArea>,
    );
    const textareaField = screen.getByTestId('textarea-field');
    fireEvent.change(textareaField, { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textareaField).toHaveValue('test value');
  });

  it('disabled state works correctly', () => {
    render(
      <TextArea isDisabled>
        <TextArea.Field id="disabled-textarea" data-testid="textarea-field" />
      </TextArea>,
    );

    const textareaField = screen.getByTestId('textarea-field');
    const textareaWrapper = textareaField.closest('div');

    expect(textareaField).toBeDisabled();
    expect(textareaWrapper).toHaveAttribute('data-disabled', 'true');
  });

  it('handles focus and blur states correctly', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <TextArea>
        <TextArea.Field
          id="focus-textarea"
          data-testid="textarea-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </TextArea>,
    );

    const textareaField = screen.getByTestId('textarea-field');
    const textareaWrapper = textareaField.closest('div');

    // Test initial state
    expect(textareaWrapper).toHaveAttribute('data-is-focused', 'false');
    expect(textareaWrapper).toHaveAttribute('data-is-blurred', 'true');

    // Test focus
    fireEvent.focus(textareaField);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(textareaWrapper).toHaveAttribute('data-is-focused', 'true');
    expect(textareaWrapper).toHaveAttribute('data-is-blurred', 'false');

    // Test blur
    fireEvent.blur(textareaField);
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(textareaWrapper).toHaveAttribute('data-is-focused', 'false');
    expect(textareaWrapper).toHaveAttribute('data-is-blurred', 'true');
  });

  it('properly passes through additional HTML attributes', () => {
    render(
      <TextArea data-testid="container" className="custom-container">
        <TextArea.Label
          htmlFor="attr-textarea"
          data-testid="label"
          className="custom-label"
        >
          Label
        </TextArea.Label>
        <TextArea.Field
          id="attr-textarea"
          data-testid="textarea-field"
          className="custom-textarea"
          aria-label="Text Area"
          rows={5}
        />
        <TextArea.HelperText
          data-testid="helper-text"
          className="custom-helper"
        >
          Helper
        </TextArea.HelperText>
      </TextArea>,
    );

    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('container')).toHaveClass('custom-container');
    expect(screen.getByTestId('label')).toHaveClass('custom-label');
    expect(screen.getByTestId('textarea-field')).toHaveClass('custom-textarea');
    expect(screen.getByTestId('textarea-field')).toHaveAttribute(
      'aria-label',
      'Text Area',
    );
    expect(screen.getByTestId('textarea-field')).toHaveAttribute('rows', '5');
    expect(screen.getByTestId('helper-text')).toHaveClass('custom-helper');
  });
});
