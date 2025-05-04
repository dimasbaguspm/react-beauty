import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElLoaderContainer, ElLoaderContent } from './style';
import { LoaderProvider, LoaderType } from './use-loader';

export interface LoaderContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  isLoading?: boolean;
  type?: LoaderType;
}

export const LoaderContainer = forwardRef<HTMLDivElement, LoaderContainerProps>(
  ({ children, isLoading = true, type = 'circular', ...rest }, ref) => {
    return (
      <LoaderProvider isLoading={isLoading} type={type}>
        <ElLoaderContainer
          ref={ref}
          role="alert"
          aria-busy={isLoading}
          aria-live="assertive"
          {...rest}
        >
          <ElLoaderContent>{children}</ElLoaderContent>
        </ElLoaderContainer>
      </LoaderProvider>
    );
  },
);
