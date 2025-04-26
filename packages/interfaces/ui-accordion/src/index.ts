/* eslint-disable import/max-dependencies */
import { AccordionClose } from './atoms/accordion-close';
import { AccordionContainer } from './atoms/accordion-container';
import { AccordionContent } from './atoms/accordion-content';
import { AccordionHeader } from './atoms/accordion-header';
import { AccordionLeadElement } from './atoms/accordion-lead-element';
import { AccordionTitle } from './atoms/accordion-title';

// Define the compound component structure
type CompoundAccordionProps = {
  Content: typeof AccordionContent;
  Header: typeof AccordionHeader;
  LeadElement: typeof AccordionLeadElement;
  Title: typeof AccordionTitle;
  Close: typeof AccordionClose;
};

const CompoundAccordion = {
  Content: AccordionContent,
  Header: AccordionHeader,
  LeadElement: AccordionLeadElement,
  Title: AccordionTitle,
  Close: AccordionClose,
} satisfies CompoundAccordionProps;

export const Accordion = Object.assign(AccordionContainer, CompoundAccordion);
