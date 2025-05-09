import { render, screen, fireEvent } from '@react-beauty/vitest/selector';
import { vi } from 'vitest';

import { Select } from '..';

describe('Select', () => {
  it('renders correctly with all its parts', () => {
    render(
      <Select>
        <Select.Label>Test Label</Select.Label>
        <Select.Field data-testid="select-field">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select.Field>
        <Select.HelperText>Helper text</Select.HelperText>
      </Select>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('select-field')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('applies error state correctly', () => {
    render(
      <Select hasError>
        <Select.Label>Error Label</Select.Label>
        <Select.Field data-testid="select-field" />
        <Select.HelperText data-testid="helper-text">
          Error message
        </Select.HelperText>
      </Select>,
    );

    const selectField = screen.getByTestId('select-field');
    const helperText = screen.getByTestId('helper-text');

    expect(selectField.parentNode).toHaveAttribute('data-error', 'true');
    expect(helperText).toHaveAttribute('data-error', 'true');
  });

  it('has disabled state applied correctly', () => {
    render(
      <Select isDisabled>
        <Select.Label>Disabled Label</Select.Label>
        <Select.Field data-testid="select-field" />
      </Select>,
    );

    const selectField = screen.getByTestId('select-field');
    expect(selectField).toBeDisabled();
  });

  it('handles onChange correctly', () => {
    const handleChange = vi.fn();

    render(
      <Select onValueChange={handleChange}>
        <Select.Field data-testid="select-field">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select.Field>
      </Select>,
    );

    const selectElement = screen.getByTestId('select-field');

    // Change the select value
    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('renders options correctly', () => {
    render(
      <Select>
        <Select.Field data-testid="select-field">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select.Field>
      </Select>,
    );

    // Get all options
    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('Option 1');
    expect(options[1]).toHaveTextContent('Option 2');
  });

  it('renders with placeholder', () => {
    render(
      <Select>
        <Select.Field placeholder="Select something" data-testid="select-field">
          <Select.Option value="option1">Option 1</Select.Option>
        </Select.Field>
      </Select>,
    );

    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('Select something');
    expect(options[0]).toHaveAttribute('value', '');
    expect(options[0]).toBeDisabled();
  });

  it('handles disabled options', () => {
    render(
      <Select>
        <Select.Field data-testid="select-field">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2" disabled>
            Option 2
          </Select.Option>
        </Select.Field>
      </Select>,
    );

    const options = screen.getAllByRole('option');
    expect(options[1]).toBeDisabled();
  });

  it('renders with lead element', () => {
    render(
      <Select>
        <Select.Field data-testid="select-field">
          <Select.LeadElement data-testid="lead-element">
            Icon
          </Select.LeadElement>
          <Select.Option value="option1">Option 1</Select.Option>
        </Select.Field>
      </Select>,
    );

    expect(screen.getByTestId('lead-element')).toBeInTheDocument();
    expect(screen.getByTestId('select-field')).toHaveAttribute(
      'data-has-lead-element',
      'true',
    );
  });

  it('renders with trail element', () => {
    render(
      <Select>
        <Select.Field data-testid="select-field">
          <Select.TrailElement data-testid="trail-element">
            Icon
          </Select.TrailElement>
          <Select.Option value="option1">Option 1</Select.Option>
        </Select.Field>
      </Select>,
    );

    expect(screen.getByTestId('trail-element')).toBeInTheDocument();
  });
});
