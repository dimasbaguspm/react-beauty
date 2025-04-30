import { render, screen, fireEvent } from '@react-beauty/vitest/selector';

import { Switch } from '..';

describe('Switch component', () => {
  it('renders correctly with default props', () => {
    render(
      <Switch>
        <Switch.Label>
          <Switch.Toggle data-testid="switch-toggle" />
          Test Switch
        </Switch.Label>
      </Switch>,
    );

    const toggle = screen.getByTestId('switch-toggle');
    const label = screen.getByText('Test Switch');

    expect(toggle).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  it('renders correctly when checked', () => {
    render(
      <Switch isChecked>
        <Switch.Label>
          <Switch.Toggle data-testid="switch-toggle" />
          Test Switch
        </Switch.Label>
      </Switch>,
    );

    const toggle = screen.getByTestId('switch-toggle');
    expect(toggle).toBeChecked();
  });

  it('renders correctly when disabled', () => {
    render(
      <Switch isDisabled>
        <Switch.Label>
          <Switch.Toggle data-testid="switch-toggle" />
          Test Switch
        </Switch.Label>
      </Switch>,
    );

    const toggle = screen.getByTestId('switch-toggle');
    expect(toggle).toBeDisabled();
  });

  it('renders helper text correctly', () => {
    render(
      <Switch>
        <Switch.Label>
          <Switch.Toggle />
          Test Switch
        </Switch.Label>
        <Switch.HelperText>Helper text</Switch.HelperText>
      </Switch>,
    );

    const helperText = screen.getByText('Helper text');
    expect(helperText).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    render(
      <Switch hasError>
        <Switch.Label>
          <Switch.Toggle />
          Test Switch
        </Switch.Label>
        <Switch.HelperText data-testid="helper-text">
          Error message
        </Switch.HelperText>
      </Switch>,
    );

    const helperText = screen.getByTestId('helper-text');
    expect(helperText).toHaveAttribute('data-error', 'true');
  });

  it('calls onChange when toggled', () => {
    const handleChange = vi.fn();
    render(
      <Switch onChange={handleChange}>
        <Switch.Label>
          <Switch.Toggle data-testid="switch-toggle" />
          Test Switch
        </Switch.Label>
      </Switch>,
    );

    const toggle = screen.getByTestId('switch-toggle');
    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(
      <Switch isDisabled onChange={handleChange}>
        <Switch.Label>
          <Switch.Toggle data-testid="switch-toggle" />
          Test Switch
        </Switch.Label>
      </Switch>,
    );

    const toggle = screen.getByTestId('switch-toggle');
    fireEvent.click(toggle);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
