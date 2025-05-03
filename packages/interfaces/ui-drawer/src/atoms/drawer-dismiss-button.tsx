import { Icon } from '@react-beauty/ui-icon';
import { forwardRef, ButtonHTMLAttributes } from 'react';

import { ElDrawerCloseButton } from './style';
import { useDrawer } from './use-drawer';

export type DrawerDismissButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const DrawerDismissButton = forwardRef<
  HTMLButtonElement,
  DrawerDismissButtonProps
>((props, ref) => {
  const { onClose } = useDrawer();

  return (
    <ElDrawerCloseButton
      ref={ref}
      onClick={onClose}
      type="button"
      aria-label="Close drawer"
      {...props}
    >
      <Icon name="controlsClose" size="xs" />
    </ElDrawerCloseButton>
  );
});
