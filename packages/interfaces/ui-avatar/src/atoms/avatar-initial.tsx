import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { AvatarSize } from '../type';

import { useAvatarContext } from './avatar-context';
import { ElAvatarInitial } from './style';

export interface AvatarInitialProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: AvatarSize;
}

export const AvatarInitial = forwardRef<HTMLDivElement, AvatarInitialProps>(
  ({ size: propSize, ...props }, ref) => {
    const { size: contextSize } = useAvatarContext();

    const size = propSize || contextSize;

    return (
      <ElAvatarInitial
        data-testid="avatar-initial"
        {...props}
        data-size={size}
        ref={ref}
      />
    );
  },
);
