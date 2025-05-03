import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from 'react';

import {
  ElBottomSheetContainer,
  ElBottomSheetOverlay,
  ElBottomSheetWrapper,
} from './style';
import { BottomSheetProvider } from './use-bottom-sheet';

export type BottomSheetHeight = 'sm' | 'md' | 'lg';

export interface BottomSheetContainerProps
  extends HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  height?: BottomSheetHeight;
  hasOverlay?: boolean;
  hasShadow?: boolean;
}

export const BottomSheetContainer = forwardRef<
  HTMLDialogElement,
  BottomSheetContainerProps
>(
  (
    {
      children,
      isOpen = false,
      onClose,
      height = 'md',
      hasOverlay = true,
      hasShadow = true,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const initialRender = useRef(true);

    // Track mounted state to prevent transitions on first render
    const [isMounted, setIsMounted] = useState(false);

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

    // Use useLayoutEffect to perform DOM manipulations before browser paint
    // This helps prevent flickering
    useLayoutEffect(() => {
      // Skip transitions on first render to prevent initial flashing
      if (initialRender.current) {
        initialRender.current = false;
        if (isOpen && dialogRef.current && !dialogRef.current.open) {
          dialogRef.current.showModal();
        }
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isOpen && !dialog.open) {
        // Ensure dialog is visible before starting animations
        dialog.showModal();
      }
    }, [isOpen]);

    // Set mounted state after initial render
    useEffect(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, []);

    // Handle closing the dialog
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (!isOpen && dialog.open) {
        // Allow transition to complete before closing dialog
        const handleTransitionEnd = () => {
          if (dialog && dialog.open) {
            dialog.close();
          }
          wrapperRef.current?.removeEventListener(
            'transitionend',
            handleTransitionEnd,
          );
        };

        wrapperRef.current?.addEventListener(
          'transitionend',
          handleTransitionEnd,
          { once: true },
        );

        // Fallback timer in case transition event doesn't fire
        const timer = setTimeout(() => {
          if (dialog && dialog.open) {
            dialog.close();
          }
        }, 300); // Match transition duration

        return () => {
          clearTimeout(timer);
          wrapperRef.current?.removeEventListener(
            'transitionend',
            handleTransitionEnd,
          );
        };
      }
    }, [isOpen]);

    // Handle ESC key or dialog cancel
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const handleDialogClose = () => {
        if (isOpen) onClose();
      };

      dialog.addEventListener('cancel', handleDialogClose);

      return () => {
        dialog.removeEventListener('cancel', handleDialogClose);
      };
    }, [isOpen, onClose]);

    // Prevent scroll on body when sheet is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    return (
      <BottomSheetProvider
        isOpen={isOpen}
        onClose={onClose}
        height={height}
        hasOverlay={hasOverlay}
        hasShadow={hasShadow}
      >
        {hasOverlay && (
          <ElBottomSheetOverlay
            data-is-open={isOpen}
            onClick={onClose}
            aria-hidden="true"
          />
        )}
        <ElBottomSheetContainer
          ref={combinedRef}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            // Close when clicking on the backdrop (the dialog itself, not its contents)
            if (e.target === dialogRef.current) {
              onClose();
            }
          }}
          {...rest}
        >
          <ElBottomSheetWrapper
            ref={wrapperRef}
            data-is-open={isOpen && isMounted}
            data-height={height}
            data-has-shadow={hasShadow}
          >
            {children}
          </ElBottomSheetWrapper>
        </ElBottomSheetContainer>
      </BottomSheetProvider>
    );
  },
);
