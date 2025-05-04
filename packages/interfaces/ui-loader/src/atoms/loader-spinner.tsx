import { forwardRef, HTMLAttributes } from 'react';

import { ElLoaderSpinner } from './style';
import { useLoader } from './use-loader';

export type LoaderSpinnerProps = HTMLAttributes<HTMLDivElement>;

export const LoaderSpinner = forwardRef<HTMLDivElement, LoaderSpinnerProps>(
  (props, ref) => {
    const { getAttributes } = useLoader();

    return <ElLoaderSpinner ref={ref} {...props} {...getAttributes()} />;
  },
);
