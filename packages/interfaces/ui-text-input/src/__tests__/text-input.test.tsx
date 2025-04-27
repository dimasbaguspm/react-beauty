import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { TextInput } from '..';

describe('TextInput', () => {
  it('renders correctly with all its parts', () => {
    render(
      <TextInput>
        <TextInput.Label htmlFor="test-input">Test Label</TextInput.Label>
        <TextInput.Field id="test-input" placeholder="Test placeholder" />
        <TextInput.HelperText>Helper text</TextInput.HelperText>
      </TextInput>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('applies error state correctly to all child components', () => {
    render(
      <TextInput hasError>
        <TextInput.Label htmlFor="error-input">Error Label</TextInput.Label>
        <TextInput.Field id="error-input" data-testid="input-field" />
        <TextInput.HelperText data-testid="helper-text">
          Error message
        </TextInput.HelperText>
      </TextInput>,
    );

    const inputWrapper = screen.getByTestId('input-field').closest('div');
    const helperText = screen.getByTestId('helper-text');

    expect(inputWrapper).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-error', 'true');
  });

  it('handles input changes correctly', () => {
    const handleChange = vi.fn();
    render(
      <TextInput>
        <TextInput.Field
          id="change-input"
          onChange={handleChange}
          data-testid="input-field"
        />
      </TextInput>,
    );
    const inputField = screen.getByTestId('input-field');
    fireEvent.change(inputField, { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputField).toHaveValue('test value');
  });

  it('renders with lead and trail elements and applies correct styling', () => {
    render(
      <TextInput>
        <TextInput.Field id="elements-input" data-testid="input-field" />
        <TextInput.LeadElement data-testid="lead-element">
          $
        </TextInput.LeadElement>
        <TextInput.TrailElement data-testid="trail-element">
          %
        </TextInput.TrailElement>
      </TextInput>,
    );

    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveAttribute('data-has-lead-element', 'true');
    expect(inputField).toHaveAttribute('data-has-trail-element', 'true');
  });

  it('disabled state works correctly', () => {
    render(
      <TextInput isDisabled>
        <TextInput.Field id="disabled-input" data-testid="input-field" />
      </TextInput>,
    );

    const inputField = screen.getByTestId('input-field');
    const inputWrapper = inputField.closest('div');

    expect(inputField).toBeDisabled();
    expect(inputWrapper).toHaveAttribute('data-disabled', 'true');
  });

  it('handles focus and blur states correctly', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <TextInput>
        <TextInput.Field
          id="focus-input"
          data-testid="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </TextInput>,
    );

    const inputField = screen.getByTestId('input-field');
    const inputWrapper = inputField.closest('div');

    // Test initial state
    expect(inputWrapper).toHaveAttribute('data-is-focused', 'false');
    expect(inputWrapper).toHaveAttribute('data-is-blurred', 'true');

    // Test focus
    fireEvent.focus(inputField);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(inputWrapper).toHaveAttribute('data-is-focused', 'true');
    expect(inputWrapper).toHaveAttribute('data-is-blurred', 'false');

    // Test blur
    fireEvent.blur(inputField);
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(inputWrapper).toHaveAttribute('data-is-focused', 'false');
    expect(inputWrapper).toHaveAttribute('data-is-blurred', 'true');
  });

  it('works correctly with both error and disabled states', () => {
    render(
      <TextInput hasError isDisabled>
        <TextInput.Field id="error-disabled-input" data-testid="input-field" />
        <TextInput.HelperText data-testid="helper-text">
          Error message
        </TextInput.HelperText>
      </TextInput>,
    );

    const inputField = screen.getByTestId('input-field');
    const inputWrapper = inputField.closest('div');
    const helperText = screen.getByTestId('helper-text');

    expect(inputField).toBeDisabled();
    expect(inputWrapper).toHaveAttribute('data-error', 'true');
    expect(inputWrapper).toHaveAttribute('data-disabled', 'true');
    expect(helperText).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-disabled', 'true');
  });

  it('properly passes through additional HTML attributes', () => {
    render(
      <TextInput data-testid="container" className="custom-container">
        <TextInput.Label
          htmlFor="attr-input"
          data-testid="label"
          className="custom-label"
        >
          Label
        </TextInput.Label>
        <TextInput.Field
          id="attr-input"
          data-testid="input-field"
          className="custom-input"
          aria-label="Text Input"
        />
        <TextInput.HelperText
          data-testid="helper-text"
          className="custom-helper"
        >
          Helper
        </TextInput.HelperText>
      </TextInput>,
    );

    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByTestId('container')).toHaveClass('custom-container');
    expect(screen.getByTestId('label')).toHaveClass('custom-label');
    expect(screen.getByTestId('input-field')).toHaveClass('custom-input');
    expect(screen.getByTestId('input-field')).toHaveAttribute(
      'aria-label',
      'Text Input',
    );
    expect(screen.getByTestId('helper-text')).toHaveClass('custom-helper');
  });

  it('context is correctly shared between components', () => {
    render(
      <TextInput hasError>
        <TextInput.Field id="context-input" data-testid="input-field" />
        <TextInput.LeadElement data-testid="lead-element">
          $
        </TextInput.LeadElement>
        <TextInput.TrailElement data-testid="trail-element">
          %
        </TextInput.TrailElement>
        <TextInput.HelperText data-testid="helper-text">
          Error message
        </TextInput.HelperText>
      </TextInput>,
    );

    const inputField = screen.getByTestId('input-field');
    const inputWrapper = inputField.closest('div');
    const helperText = screen.getByTestId('helper-text');

    // Focus the input to test context updates
    fireEvent.focus(inputField);

    // Verify that components have access to the context
    expect(inputWrapper).toHaveAttribute('data-is-focused', 'true');
    expect(inputWrapper).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-is-focused', 'true');

    // Additional check for lead and trail elements registration
    expect(inputField).toHaveAttribute('data-has-lead-element', 'true');
    expect(inputField).toHaveAttribute('data-has-trail-element', 'true');
  });
});
