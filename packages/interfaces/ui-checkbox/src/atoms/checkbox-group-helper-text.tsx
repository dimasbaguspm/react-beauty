import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElCheckboxHelperText } from './style';
import { useCheckboxGroup } from './use-checkbox-group';

export interface CheckboxGroupHelperTextProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const CheckboxGroupHelperText = forwardRef<
  HTMLSpanElement,
  CheckboxGroupHelperTextProps
>((props, ref) => {
  const checkboxGroup = useCheckboxGroup();

  if (!checkboxGroup) {
    throw new Error(
      'CheckboxGroupHelperText must be used within a CheckboxGroup',
    );
  }

  const attributes = {
    'data-error': checkboxGroup.hasError,
    'data-disabled': checkboxGroup.isDisabled,
  };

  return <ElCheckboxHelperText ref={ref} {...props} {...attributes} />;
});
