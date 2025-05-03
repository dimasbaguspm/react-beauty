import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

import { ElDrawerContainer, ElDrawerOverlay } from './style';
import { DrawerProvider } from './use-drawer';

type DrawerWidth = 'sm' | 'md' | 'lg';
type DrawerDirection = 'left' | 'right';

export interface DrawerContainerProps
  extends HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  direction?: DrawerDirection;
  width?: DrawerWidth;
  hasOverlay?: boolean;
  hasShadow?: boolean;
}

export const DrawerContainer = forwardRef<
  HTMLDialogElement,
  DrawerContainerProps
>(
  (
    {
      children,
      isOpen = false,
      onClose,
      direction = 'right',
      width = 'md',
      hasOverlay = true,
      hasShadow = true,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const combinedRef = (node: HTMLDialogElement) => {
      if (node) {
        Object.assign(dialogRef, { current: node });
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDialogElement>).current = node;
        }
      }
    };

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isOpen && !dialog.open) dialog.showModal();
      if (!isOpen && dialog.open) dialog.close();

      const handleDialogClose = () => {
        if (isOpen) onClose();
      };

      dialog.addEventListener('cancel', handleDialogClose);

      return () => {
        dialog.removeEventListener('cancel', handleDialogClose);
      };
    }, [isOpen, onClose]);

    return (
      <DrawerProvider
        isOpen={isOpen}
        onClose={onClose}
        direction={direction}
        width={width}
        hasOverlay={hasOverlay}
        hasShadow={hasShadow}
      >
        {hasOverlay && isOpen && (
          <ElDrawerOverlay
            data-is-open={isOpen}
            onClick={onClose}
            aria-hidden="true"
          />
        )}
        <ElDrawerContainer
          ref={combinedRef}
          data-direction={direction}
          data-width={width}
          data-has-shadow={hasShadow}
          onClick={(e) => {
            // Close when clicking on the backdrop (the dialog itself, not its contents)
            if (e.target === dialogRef.current) {
              onClose();
            }
          }}
          {...rest}
        >
          {children}
        </ElDrawerContainer>
      </DrawerProvider>
    );
  },
);
