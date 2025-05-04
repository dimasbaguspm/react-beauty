import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElLoaderText } from './style';
import { useLoader } from './use-loader';

export interface LoaderTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const LoaderText = forwardRef<HTMLDivElement, LoaderTextProps>(
  ({ children, ...rest }, ref) => {
    const { getAttributes } = useLoader();
    return (
      <ElLoaderText ref={ref} {...rest} {...getAttributes()}>
        {children}
      </ElLoaderText>
    );
  },
);
