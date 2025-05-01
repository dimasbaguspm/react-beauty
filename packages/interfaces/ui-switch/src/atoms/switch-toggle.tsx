import { forwardRef, InputHTMLAttributes, useCallback } from 'react';

import {
  ElSwitchInput,
  ElSwitchThumb,
  ElSwitchTrack,
  ElSwitchWrapper,
} from './style';
import { useSwitch } from './use-switch';

type SwitchToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'disabled'
>;

export const SwitchToggle = forwardRef<HTMLInputElement, SwitchToggleProps>(
  (props, ref) => {
    const { isChecked, isDisabled, onChange, getAttributes, inputWrapperId } =
      useSwitch();

    const handleChange = useCallback(() => {
      onChange(!isChecked);
    }, [isChecked, onChange]);

    const attributes = getAttributes();

    return (
      <ElSwitchWrapper>
        <ElSwitchInput
          ref={ref}
          id={inputWrapperId}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          aria-checked={isChecked}
          {...props}
        />
        <ElSwitchTrack {...attributes}>
          <ElSwitchThumb />
        </ElSwitchTrack>
      </ElSwitchWrapper>
    );
  },
);

SwitchToggle.displayName = 'SwitchToggle';
