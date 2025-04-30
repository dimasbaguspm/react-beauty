import { forwardRef, ReactNode, LabelHTMLAttributes } from 'react';

import { ElSwitchLabel } from './style';
import { useSwitch } from './use-switch';

export interface SwitchLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Content of the label
   */
  children: ReactNode;
}

export const SwitchLabel = forwardRef<HTMLLabelElement, SwitchLabelProps>(
  ({ children, ...rest }, ref) => {
    const { getAttributes } = useSwitch();

    return (
      <ElSwitchLabel ref={ref} {...rest} {...getAttributes()}>
        {children}
      </ElSwitchLabel>
    );
  },
);

SwitchLabel.displayName = 'SwitchLabel';
