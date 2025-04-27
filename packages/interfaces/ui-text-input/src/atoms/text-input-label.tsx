import { forwardRef } from 'react';

import { ElTextInputLabel } from './style';

import type { LabelHTMLAttributes, ReactNode } from 'react';

export interface TextInputLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const TextInputLabel = forwardRef<HTMLLabelElement, TextInputLabelProps>(
  (props, ref) => {
    return <ElTextInputLabel ref={ref} {...props} />;
  },
);
