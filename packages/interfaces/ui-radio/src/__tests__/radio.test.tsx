import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { RadioGroup, RadioInput } from '..';

describe('Radio', () => {
  it('renders correctly with all its parts', () => {
    render(
      <RadioGroup
        name="test-radio"
        selectedValue="test-value"
        onValueChange={() => {}}
      >
        <RadioInput value="test-value">
          <RadioInput.Field />
          <RadioInput.Label>Test Label</RadioInput.Label>
        </RadioInput>
        <RadioGroup.HelperText>
          This is a group-level helper text
        </RadioGroup.HelperText>
      </RadioGroup>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(
      screen.getByText('This is a group-level helper text'),
    ).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('applies error state correctly to all child components', () => {
    render(
      <RadioGroup
        name="test-radio"
        selectedValue="test-value"
        onValueChange={() => {}}
        hasError
      >
        <RadioInput value="test-value">
          <RadioInput.Field data-testid="radio-input" />
          <RadioInput.Label>Error Label</RadioInput.Label>
        </RadioInput>
        <RadioGroup.HelperText data-testid="helper-text">
          Error message
        </RadioGroup.HelperText>
      </RadioGroup>,
    );

    const helperText = screen.getByTestId('helper-text');
    expect(helperText).toHaveAttribute('data-error', 'true');
  });

  it('handles radio changes correctly', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup
        name="test-radio"
        selectedValue=""
        onValueChange={handleChange}
      >
        <RadioInput value="test-value">
          <RadioInput.Field data-testid="radio-input" />
          <RadioInput.Label>Test Label</RadioInput.Label>
        </RadioInput>
      </RadioGroup>,
    );
    const radioInput = screen.getByTestId('radio-input');
    fireEvent.click(radioInput);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('test-value');
  });

  it('disabled state works correctly', () => {
    render(
      <RadioGroup
        name="test-radio"
        selectedValue="test-value"
        onValueChange={() => {}}
        isDisabled
      >
        <RadioInput value="test-value">
          <RadioInput.Field data-testid="radio-input" />
          <RadioInput.Label data-testid="radio-label">
            Test Label
          </RadioInput.Label>
        </RadioInput>
      </RadioGroup>,
    );

    const radioInput = screen.getByTestId('radio-input');
    const radioLabel = screen.getByTestId('radio-label');

    expect(radioInput).toBeDisabled();
    expect(radioLabel).toHaveAttribute('data-disabled', 'true');
  });

  it('handles focus and blur states correctly', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <RadioGroup
        name="test-radio"
        selectedValue="test-value"
        onValueChange={() => {}}
      >
        <RadioInput value="test-value">
          <RadioInput.Field
            data-testid="radio-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <RadioInput.Label>Test Label</RadioInput.Label>
        </RadioInput>
      </RadioGroup>,
    );

    const radioInput = screen.getByTestId('radio-input');

    // Test focus
    fireEvent.focus(radioInput);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    // Test blur
    fireEvent.blur(radioInput);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('Radio group with multiple options works correctly', () => {
    const handleChange = vi.fn();

    render(
      <RadioGroup
        name="test-group"
        selectedValue="option1"
        onValueChange={handleChange}
      >
        <RadioInput value="option1">
          <RadioInput.Field data-testid="radio-1" />
          <RadioInput.Label>Option 1</RadioInput.Label>
        </RadioInput>
        <RadioInput value="option2">
          <RadioInput.Field data-testid="radio-2" />
          <RadioInput.Label>Option 2</RadioInput.Label>
        </RadioInput>
      </RadioGroup>,
    );

    const radio1 = screen.getByTestId('radio-1');
    const radio2 = screen.getByTestId('radio-2');

    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    // Change selection
    fireEvent.click(radio2);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('option2');
  });
});
