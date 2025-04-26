import { Icon } from '@react-beauty/ui-icon';
import { forwardRef } from 'react';

import { ElAlertButton } from './style';

export interface AlertDismissButtonProps {
  onClick: VoidFunction;
}

export const AlertDismissButton = forwardRef<
  HTMLButtonElement,
  AlertDismissButtonProps
>((props, ref) => {
  return (
    <ElAlertButton {...props}>
      <button ref={ref} type="button" aria-label="Dismiss alert">
        <Icon name="controlsCloseSmall" />
      </button>
    </ElAlertButton>
  );
});
