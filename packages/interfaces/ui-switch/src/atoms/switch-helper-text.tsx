import { forwardRef, HTMLAttributes } from 'react';

import { ElSwitchHelperText } from './style';
import { useSwitch } from './use-switch';

import type { ReactNode } from 'react';

export interface SwitchHelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Content of the helper text
   */
  children: ReactNode;
}

export const SwitchHelperText = forwardRef<
  HTMLSpanElement,
  SwitchHelperTextProps
>(({ children, ...rest }, ref) => {
  const { getAttributes } = useSwitch();

  return (
    <ElSwitchHelperText ref={ref} {...getAttributes()} {...rest}>
      {children}
    </ElSwitchHelperText>
  );
});

SwitchHelperText.displayName = 'SwitchHelperText';
