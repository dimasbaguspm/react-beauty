import { Icon } from '@react-beauty/ui-icon';
import { forwardRef, ButtonHTMLAttributes } from 'react';

import { ElModalCloseButton } from './style';
import { useModal } from './use-modal';

export type ModalDismissButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalDismissButton = forwardRef<
  HTMLButtonElement,
  ModalDismissButtonProps
>((props, ref) => {
  const { onClose } = useModal();

  return (
    <ElModalCloseButton
      ref={ref}
      onClick={onClose}
      type="button"
      aria-label="Close modal"
      {...props}
    >
      <Icon name="controlsClose" size="md" />
    </ElModalCloseButton>
  );
});
