import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

import { ElModalContainer, ElModalOverlay } from './style';
import { ModalProvider } from './use-modal';

export type ModalWidth = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalContainerProps extends HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: ModalWidth;
  hasOverlay?: boolean;
  hasShadow?: boolean;
}

export const ModalContainer = forwardRef<
  HTMLDialogElement,
  ModalContainerProps
>(
  (
    {
      children,
      isOpen = false,
      onClose,
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

      // When modal is closed via the built-in dialog functionality (ESC key)
      const handleDialogClose = () => {
        if (isOpen) onClose();
      };

      dialog.addEventListener('cancel', handleDialogClose);

      // Lock body scroll when modal is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }

      return () => {
        dialog.removeEventListener('cancel', handleDialogClose);
        document.body.style.overflow = '';
      };
    }, [isOpen, onClose]);

    return (
      <ModalProvider
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        hasOverlay={hasOverlay}
        hasShadow={hasShadow}
      >
        {hasOverlay && isOpen && (
          <ElModalOverlay
            data-is-open={isOpen}
            onClick={onClose}
            aria-hidden="true"
          />
        )}
        <ElModalContainer
          ref={combinedRef}
          role="dialog"
          aria-modal="true"
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
        </ElModalContainer>
      </ModalProvider>
    );
  },
);
