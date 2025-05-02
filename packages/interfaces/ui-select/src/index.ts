import {
  SelectContainer,
  SelectLabel,
  SelectField,
  SelectOption,
  SelectHelperText,
  SelectLeadElement,
  SelectTrailElement,
} from './atoms';

type CompoundSelectProps = {
  Label: typeof SelectLabel;
  Field: typeof SelectField;
  Option: typeof SelectOption;
  HelperText: typeof SelectHelperText;
  LeadElement: typeof SelectLeadElement;
  TrailElement: typeof SelectTrailElement;
};

const CompoundSelect = {
  Label: SelectLabel,
  Field: SelectField,
  Option: SelectOption,
  HelperText: SelectHelperText,
  LeadElement: SelectLeadElement,
  TrailElement: SelectTrailElement,
} satisfies CompoundSelectProps;

export const Select = Object.assign(SelectContainer, CompoundSelect);
