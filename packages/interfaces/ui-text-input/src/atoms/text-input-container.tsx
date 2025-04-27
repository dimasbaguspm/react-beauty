import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElTextInputContainer } from './style';
import { TextInputProvider } from './use-text-input';

export interface TextInputContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  hasError?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}

export const TextInputContainer = forwardRef<
  HTMLDivElement,
  TextInputContainerProps
>(({ hasError = false, isDisabled = false, children, ...rest }, ref) => {
  return (
    <TextInputProvider hasError={hasError} isDisabled={isDisabled}>
      <ElTextInputContainer ref={ref} {...rest}>
        {children}
      </ElTextInputContainer>
    </TextInputProvider>
  );
});
