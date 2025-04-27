import {
  TextInputContainer,
  TextInputLabel,
  TextInputField,
  TextInputHelperText,
  TextInputLeadElement,
  TextInputTrailElement,
} from './atoms';

type CompoundTextInputProps = {
  Label: typeof TextInputLabel;
  Field: typeof TextInputField;
  HelperText: typeof TextInputHelperText;
  LeadElement: typeof TextInputLeadElement;
  TrailElement: typeof TextInputTrailElement;
};

const CompoundTextInput = {
  Label: TextInputLabel,
  Field: TextInputField,
  HelperText: TextInputHelperText,
  LeadElement: TextInputLeadElement,
  TrailElement: TextInputTrailElement,
} satisfies CompoundTextInputProps;

export const TextInput = Object.assign(TextInputContainer, CompoundTextInput);
