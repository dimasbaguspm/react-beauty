import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElRadioLabel } from './style';
import { useRadio } from './use-radio';

export interface RadioLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

export const RadioLabel = forwardRef<HTMLLabelElement, RadioLabelProps>(
  ({ children, htmlFor, ...props }, ref) => {
    const { radioId, getAttributes } = useRadio();

    return (
      <ElRadioLabel
        ref={ref}
        htmlFor={htmlFor || radioId}
        {...props}
        {...getAttributes()}
      >
        {children}
      </ElRadioLabel>
    );
  },
);
