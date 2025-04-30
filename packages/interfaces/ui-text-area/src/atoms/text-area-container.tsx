import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElTextAreaContainer } from './style';
import { TextAreaProvider } from './use-text-area';

export interface TextAreaContainerProps extends HTMLAttributes<HTMLDivElement> {
  hasError?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}

export const TextAreaContainer = forwardRef<
  HTMLDivElement,
  TextAreaContainerProps
>(({ hasError = false, isDisabled = false, children, ...rest }, ref) => {
  return (
    <TextAreaProvider hasError={hasError} isDisabled={isDisabled}>
      <ElTextAreaContainer ref={ref} {...rest}>
        {children}
      </ElTextAreaContainer>
    </TextAreaProvider>
  );
});
