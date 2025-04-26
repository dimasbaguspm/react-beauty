import { styled } from '@linaria/react';

const layout = `
  display: flex;
  align-items: center;
`;

const base = `
  ${layout}
  width: 100%;
  background-color: var(--components-accordion-colors-default-bg);
  color: var(--components-accordion-colors-default-color);
`;

export const ElAccordionContainer = styled.div`
  background-color: var(--components-accordion-colors-default-bg);
  border-radius: var(--components-accordion-border-radius);
  width: 100%;
  box-shadow: var(--components-accordion-shadow-default);
  transition: box-shadow var(--components-accordion-transition-duration)
    var(--components-accordion-transition-timing);

  &[data-expanded='true'] {
    box-shadow: var(--components-accordion-shadow-expanded);
  }
`;

export const ElAccordionHeader = styled.div`
  ${base}
  gap: var(--components-accordion-header-gap);
  padding: var(--components-accordion-padding-t)
    var(--components-accordion-padding-r) var(--components-accordion-padding-b)
    var(--components-accordion-padding-l);
  justify-content: space-between;
  border-radius: var(--components-accordion-border-radius);
  cursor: pointer;
  transition: background-color var(--components-accordion-transition-duration)
    var(--components-accordion-transition-timing);

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--components-accordion-colors-default-bg),
      var(--components-accordion-colors-default-color) 5%
    );
  }

  &:focus-visible {
    outline: solid;
    outline-width: 4px;
    outline-color: var(--components-accordion-colors-focus-outline);
  }
`;

export const ElAccordionTitle = styled.h3`
  font-size: var(--components-accordion-font-size);
  line-height: var(--components-accordion-line-height);
  font-weight: var(--components-accordion-font-weight-title);
`;

export const ElAccordionContent = styled.div`
  overflow: hidden;
  height: auto;
  transition:
    max-height var(--components-accordion-transition-content),
    opacity var(--components-accordion-transition-content),
    padding var(--components-accordion-transition-content);
  background-color: var(--components-accordion-colors-content-bg);
  border-bottom-left-radius: var(--components-accordion-border-radius);
  border-bottom-right-radius: var(--components-accordion-border-radius);
  max-height: 0;
  color: var(--components-accordion-colors-default-color);

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    max-height: 1000px; /* Arbitrary large value that content won't exceed */
    padding: var(--components-accordion-content-padding);
  }

  &[data-expanded='false'] {
    opacity: 0;
    max-height: 0;
    padding: 0 var(--components-accordion-padding-l);
    visibility: hidden;
  }

  transform-origin: top;
`;

export const ElAccordionLeadElement = styled.div`
  ${layout}
`;

export const ElAccordionTrailElement = styled.div`
  ${layout}
  margin-left: auto;
  transition: transform var(--components-accordion-transition-duration) ease;

  &[data-expanded='true'] {
    transform: rotate(180deg);
  }
`;
