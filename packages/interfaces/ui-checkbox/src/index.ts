import {
  CheckboxGroup as CheckboxGroupComponent,
  CheckboxInput as CheckboxInputComponent,
  CheckboxInputField,
  CheckboxInputLabel,
  CheckboxGroupHelperText,
} from './atoms';

// CheckboxInput compound component
type CompoundCheckboxInputProps = {
  Field: typeof CheckboxInputField;
  Label: typeof CheckboxInputLabel;
};

const CompoundCheckboxInput = {
  Field: CheckboxInputField,
  Label: CheckboxInputLabel,
} satisfies CompoundCheckboxInputProps;

export const CheckboxInput = Object.assign(
  CheckboxInputComponent,
  CompoundCheckboxInput,
);

// CheckboxGroup compound component
type CompoundCheckboxGroupProps = {
  HelperText: typeof CheckboxGroupHelperText;
};

const CompoundCheckboxGroup = {
  HelperText: CheckboxGroupHelperText,
} satisfies CompoundCheckboxGroupProps;

// Export CheckboxGroup as a compound component
export const CheckboxGroup = Object.assign(
  CheckboxGroupComponent,
  CompoundCheckboxGroup,
);
