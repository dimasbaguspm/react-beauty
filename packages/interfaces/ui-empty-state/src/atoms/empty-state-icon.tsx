import { Icon } from '@react-beauty/ui-icon';
import { forwardRef, HTMLAttributes } from 'react';

import { ElEmptyStateIcon } from './style';

export interface EmptyStateIconProps extends HTMLAttributes<HTMLDivElement> {
  children?: never;
}

export const EmptyStateIcon = forwardRef<HTMLDivElement, EmptyStateIconProps>(
  (props, ref) => (
    <ElEmptyStateIcon {...props} ref={ref}>
      <Icon data-is-primary name="genericSettings" />
      <Icon data-is-secondary name="controlsCloseSmall" size="xs" />
    </ElEmptyStateIcon>
  ),
);
