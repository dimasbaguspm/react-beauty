import {
  TextAreaContainer,
  TextAreaLabel,
  TextAreaField,
  TextAreaHelperText,
} from './atoms';

type CompoundTextAreaProps = {
  Label: typeof TextAreaLabel;
  Field: typeof TextAreaField;
  HelperText: typeof TextAreaHelperText;
};

const CompoundTextArea = {
  Label: TextAreaLabel,
  Field: TextAreaField,
  HelperText: TextAreaHelperText,
} satisfies CompoundTextAreaProps;

export const TextArea = Object.assign(TextAreaContainer, CompoundTextArea);
