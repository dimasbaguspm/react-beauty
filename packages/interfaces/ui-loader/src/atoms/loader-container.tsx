import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElLoaderContainer, ElLoaderContent } from './style';
import { LoaderProvider, LoaderType } from './use-loader';

export interface LoaderContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  type?: LoaderType;
}

export const LoaderContainer = forwardRef<HTMLDivElement, LoaderContainerProps>(
  ({ children, type = 'circular', ...rest }, ref) => {
    return (
      <LoaderProvider type={type}>
        <ElLoaderContainer
          ref={ref}
          role="alert"
          aria-busy
          aria-live="assertive"
          {...rest}
        >
          <ElLoaderContent>{children}</ElLoaderContent>
        </ElLoaderContainer>
      </LoaderProvider>
    );
  },
);
