import {
  RadioGroup as RadioGroupComponent,
  RadioInput as RadioInputComponent,
  RadioInputField,
  RadioInputLabel,
  RadioHelperText,
} from './atoms';

// RadioInput compound component
type CompoundRadioInputProps = {
  Field: typeof RadioInputField;
  Label: typeof RadioInputLabel;
  HelperText: typeof RadioHelperText;
};

const CompoundRadioInput = {
  Field: RadioInputField,
  Label: RadioInputLabel,
  HelperText: RadioHelperText,
} satisfies CompoundRadioInputProps;

export const RadioInput = Object.assign(
  RadioInputComponent,
  CompoundRadioInput,
);

// Export RadioGroup directly
export const RadioGroup = RadioGroupComponent;
