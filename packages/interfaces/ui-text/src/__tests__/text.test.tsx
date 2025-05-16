import { render, screen } from '@react-beauty/vitest/selector';

import { Text } from '..';

describe('Text', () => {
  it('renders correctly as p tag by default', () => {
    render(<Text>Default text</Text>);
    expect(screen.getByText('Default text')).toBeInTheDocument();
    expect(screen.getByText('Default text').tagName.toLowerCase()).toBe('p');
  });

  it('renders with custom data-testid', () => {
    render(<Text data-testid="custom-text">Custom test id</Text>);
    expect(screen.getByTestId('custom-text')).toBeInTheDocument();
  });

  it('applies h1 styles when as="h1"', () => {
    render(<Text as="h1">Heading 1</Text>);
    expect(screen.getByText('Heading 1').tagName.toLowerCase()).toBe('h1');
  });

  it('applies h2 styles when as="h2"', () => {
    render(<Text as="h2">Heading 2</Text>);
    expect(screen.getByText('Heading 2').tagName.toLowerCase()).toBe('h2');
  });

  it('applies h3 styles when as="h3"', () => {
    render(<Text as="h3">Heading 3</Text>);
    expect(screen.getByText('Heading 3').tagName.toLowerCase()).toBe('h3');
  });

  it('applies h4 styles when as="h4"', () => {
    render(<Text as="h4">Heading 4</Text>);
    expect(screen.getByText('Heading 4').tagName.toLowerCase()).toBe('h4');
  });

  it('applies h5 styles when as="h5"', () => {
    render(<Text as="h5">Heading 5</Text>);
    expect(screen.getByText('Heading 5').tagName.toLowerCase()).toBe('h5');
  });

  it('applies h6 styles when as="h6"', () => {
    render(<Text as="h6">Heading 6</Text>);
    expect(screen.getByText('Heading 6').tagName.toLowerCase()).toBe('h6');
  });

  it('applies span styles when as="span"', () => {
    render(<Text as="span">Span text</Text>);
    expect(screen.getByText('Span text').tagName.toLowerCase()).toBe('span');
  });

  it('applies label styles when as="label"', () => {
    render(<Text as="label">Label text</Text>);
    expect(screen.getByText('Label text').tagName.toLowerCase()).toBe('label');
  });

  it('applies small styles when as="small"', () => {
    render(<Text as="small">Small text</Text>);
    expect(screen.getByText('Small text').tagName.toLowerCase()).toBe('small');
  });

  it('passes additional props correctly', () => {
    render(
      <Text className="custom-class" title="tooltip">
        Additional props
      </Text>,
    );
    const textElement = screen.getByText('Additional props');
    expect(textElement).toHaveClass('custom-class');
    expect(textElement).toHaveAttribute('title', 'tooltip');
  });
});
