import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElRadioLabel } from './style';
import { useRadio } from './use-radio';

export interface RadioInputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

export const RadioInputLabel = forwardRef<
  HTMLLabelElement,
  RadioInputLabelProps
>(({ children, htmlFor, ...props }, ref) => {
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
});
