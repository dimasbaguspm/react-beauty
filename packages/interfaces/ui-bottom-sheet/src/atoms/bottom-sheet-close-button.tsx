import { Icon } from '@react-beauty/ui-icon';
import { forwardRef, ButtonHTMLAttributes } from 'react';

import { ElBottomSheetCloseButton } from './style';
import { useBottomSheet } from './use-bottom-sheet';

export interface BottomSheetCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
}

export const BottomSheetCloseButton = forwardRef<
  HTMLButtonElement,
  BottomSheetCloseButtonProps
>(({ 'aria-label': ariaLabel = 'Close', ...rest }, ref) => {
  const { onClose } = useBottomSheet();

  return (
    <ElBottomSheetCloseButton
      ref={ref}
      type="button"
      onClick={onClose}
      aria-label={ariaLabel}
      {...rest}
    >
      <Icon name="controlsCloseSmall" size="md" />
    </ElBottomSheetCloseButton>
  );
});
