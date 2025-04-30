import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElSwitchContainer } from './style';
import { SwitchProvider } from './use-switch';

export interface SwitchContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Whether the switch is checked
   */
  isChecked?: boolean;
  /**
   * Whether the switch has an error state
   */
  hasError?: boolean;
  /**
   * Whether the switch is disabled
   */
  isDisabled?: boolean;
  /**
   * Callback function when the switch state changes
   */
  onChange?: (checked: boolean) => void;
  /**
   * Content of the Switch component
   */
  children: ReactNode;
}

export const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  (
    {
      isChecked = false,
      hasError = false,
      isDisabled = false,
      onChange = () => {},
      children,
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

SwitchContainer.displayName = 'SwitchContainer';
