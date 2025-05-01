import { render, screen, fireEvent } from '@react-beauty/vitest/selector';

import { CheckboxInput, CheckboxGroup } from '../index';

describe('CheckboxInput', () => {
  it('renders correctly with label', () => {
    render(
      <CheckboxInput value="test">
        <CheckboxInput.Field />
        <CheckboxInput.Label>Test Checkbox</CheckboxInput.Label>
      </CheckboxInput>,
    );

    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('handles checked state correctly', () => {
    render(
      <CheckboxInput value="test" checked={true}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Test Checkbox</CheckboxInput.Label>
      </CheckboxInput>,
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onValueChange when clicked', () => {
    const onValueChange = vi.fn();
    render(
      <CheckboxInput value="test" onValueChange={onValueChange}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Test Checkbox</CheckboxInput.Label>
      </CheckboxInput>,
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it('has disabled attribute when isDisabled is true', () => {
    render(
      <CheckboxInput value="test" isDisabled={true}>
        <CheckboxInput.Field />
        <CheckboxInput.Label>Test Checkbox</CheckboxInput.Label>
      </CheckboxInput>,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('does not call onValueChange when clicked in disabled state', () => {
    const onValueChange = vi.fn();
    render(
      <CheckboxInput
        value="test"
        isDisabled={true}
        onValueChange={onValueChange}
      >
        <CheckboxInput.Field />
        <CheckboxInput.Label>Test Checkbox</CheckboxInput.Label>
      </CheckboxInput>,
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onValueChange).not.toHaveBeenCalled();
  });
});

describe('CheckboxGroup', () => {
  it('renders a group of checkboxes', () => {
    render(
      <CheckboxGroup name="group" values={['opt2']}>
        <CheckboxInput value="opt1">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 1</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="opt2">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 2</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="opt3">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 3</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxGroup.HelperText>Helper text</CheckboxGroup.HelperText>
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('adds value to selected values when unchecked checkbox is clicked', () => {
    const onValueChange = vi.fn();
    render(
      <CheckboxGroup
        name="group"
        values={['opt1']}
        onValueChange={onValueChange}
      >
        <CheckboxInput value="opt1">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 1</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="opt2">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 2</CheckboxInput.Label>
        </CheckboxInput>
      </CheckboxGroup>,
    );

    // Click second checkbox to select it
    fireEvent.click(screen.getAllByRole('checkbox')[1]!);
    expect(onValueChange).toHaveBeenCalledWith(['opt1', 'opt2']);
  });

  it('removes value from selected values when checked checkbox is clicked', () => {
    const onValueChange = vi.fn();
    render(
      <CheckboxGroup
        name="group"
        values={['opt1', 'opt2']}
        onValueChange={onValueChange}
      >
        <CheckboxInput value="opt1">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 1</CheckboxInput.Label>
        </CheckboxInput>
        <CheckboxInput value="opt2">
          <CheckboxInput.Field />
          <CheckboxInput.Label>Option 2</CheckboxInput.Label>
        </CheckboxInput>
      </CheckboxGroup>,
    );

    // Click first checkbox to deselect it
    fireEvent.click(screen.getAllByRole('checkbox')[0]!);
    expect(onValueChange).toHaveBeenCalledWith(['opt2']);
  });
});
