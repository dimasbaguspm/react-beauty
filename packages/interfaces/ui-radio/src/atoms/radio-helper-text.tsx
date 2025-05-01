import { forwardRef, HTMLAttributes } from 'react';

import { ElRadioHelperText } from './style';
import { useRadio } from './use-radio';

import type { ReactNode } from 'react';

export interface RadioHelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const RadioHelperText = forwardRef<
  HTMLSpanElement,
  RadioHelperTextProps
>((props, ref) => {
  const { getAttributes } = useRadio();

  return <ElRadioHelperText ref={ref} {...props} {...getAttributes()} />;
});
