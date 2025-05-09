import {
  RadioGroup as RadioGroupComponent,
  RadioInput as RadioInputComponent,
  RadioInputField,
  RadioInputLabel,
} from './atoms';

// RadioInput compound component
type CompoundRadioInputProps = {
  Field: typeof RadioInputField;
  Label: typeof RadioInputLabel;
};

const CompoundRadioInput = {
  Field: RadioInputField,
  Label: RadioInputLabel,
} satisfies CompoundRadioInputProps;

export const RadioInput = Object.assign(
  RadioInputComponent,
  CompoundRadioInput,
);

// Export RadioGroup directly - RadioGroup is already a compound component with HelperText from the implementation
export const RadioGroup = RadioGroupComponent;
