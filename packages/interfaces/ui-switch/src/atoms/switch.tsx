import { ReactNode, forwardRef } from 'react';

import { ElSwitchContainer } from './style';
import { SwitchProvider } from './use-switch';

export interface SwitchProps {
  /**
   * Content of the Switch component
   */
  children: ReactNode;
  /**
   * The checked state of the switch
   */
  isChecked?: boolean;
  /**
   * Whether the switch has an error
   */
  hasError?: boolean;
  /**
   * Whether the switch is disabled
   */
  isDisabled?: boolean;
  /**
   * Function called when the switch state changes
   */
  onChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      children,
      isChecked = false,
      hasError = false,
      isDisabled = false,
      onChange = () => {},
      ...rest
    },
    ref,
  ) => {
    return (
      <SwitchProvider
        isChecked={isChecked}
        hasError={hasError}
        isDisabled={isDisabled}
        onChange={onChange}
      >
        <ElSwitchContainer ref={ref} {...rest}>
          {children}
        </ElSwitchContainer>
      </SwitchProvider>
    );
  },
);

Switch.displayName = 'Switch';
