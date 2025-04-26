import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Accordion } from '../index';

describe('Accordion', () => {
  it('renders accordion component with title', () => {
    render(
      <Accordion>
        <Accordion.Header>
          <Accordion.Title>Accordion Title</Accordion.Title>
        </Accordion.Header>
        <Accordion.Content>Content text</Accordion.Content>
      </Accordion>,
    );

    expect(screen.getByText('Accordion Title')).toBeInTheDocument();
  });

  it('expands/collapses content when header is clicked', () => {
    render(
      <Accordion>
        <Accordion.Header>
          <Accordion.Title>Accordion Title</Accordion.Title>
        </Accordion.Header>
        <Accordion.Content data-testid="accordion-content">
          Content text
        </Accordion.Content>
      </Accordion>,
    );

    // Content should be initially collapsed
    const content = screen.getByTestId('accordion-content');
    expect(content).toHaveAttribute('data-expanded', 'false');

    // Click header to expand
    fireEvent.click(screen.getByText('Accordion Title'));
    expect(content).toHaveAttribute('data-expanded', 'true');

    // Click header again to collapse
    fireEvent.click(screen.getByText('Accordion Title'));
    expect(content).toHaveAttribute('data-expanded', 'false');
  });

  it('renders with lead element and close button', () => {
    render(
      <Accordion>
        <Accordion.Header>
          <Accordion.LeadElement>🔍</Accordion.LeadElement>
          <Accordion.Title>Accordion Title</Accordion.Title>
          <Accordion.Close data-testid="close-button" />
        </Accordion.Header>
        <Accordion.Content>Content text</Accordion.Content>
      </Accordion>,
    );

    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
  });

  it('renders with defaultExpanded when set to true', () => {
    render(
      <Accordion defaultExpanded={true}>
        <Accordion.Header>
          <Accordion.Title>Accordion Title</Accordion.Title>
        </Accordion.Header>
        <Accordion.Content data-testid="accordion-content">
          Content text
        </Accordion.Content>
      </Accordion>,
    );

    // Content should be initially expanded
    const content = screen.getByTestId('accordion-content');
    expect(content).toHaveAttribute('data-expanded', 'true');
  });
});
