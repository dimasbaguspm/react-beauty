import { ReactNode, forwardRef } from 'react';

import { ElSwitchHelperText } from './style';
import { useSwitch } from './use-switch';

export interface SwitchHelperTextProps {
  /**
   * Content of the helper text
   */
  children: ReactNode;
}

export const SwitchHelperText = forwardRef<
  HTMLSpanElement,
  SwitchHelperTextProps
>(({ children, ...rest }, ref) => {
  const { hasError } = useSwitch();

  return (
    <ElSwitchHelperText ref={ref} data-error={hasError} {...rest}>
      {children}
    </ElSwitchHelperText>
  );
});

SwitchHelperText.displayName = 'SwitchHelperText';
