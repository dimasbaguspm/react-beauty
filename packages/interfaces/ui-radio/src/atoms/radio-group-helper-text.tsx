import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElRadioHelperText } from './style';
import { useRadioGroup } from './use-radio-group';

export interface RadioGroupHelperTextProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const RadioGroupHelperText = forwardRef<
  HTMLSpanElement,
  RadioGroupHelperTextProps
>((props, ref) => {
  const radioGroup = useRadioGroup();

  if (!radioGroup) {
    throw new Error('RadioGroupHelperText must be used within a RadioGroup');
  }

  const attributes = {
    'data-error': radioGroup.hasError,
    'data-disabled': radioGroup.isDisabled,
  };

  return <ElRadioHelperText ref={ref} {...props} {...attributes} />;
});
