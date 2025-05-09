import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { AvatarSize } from '../type';

import { AvatarContext } from './avatar-context';

export interface AvatarContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: AvatarSize;
}

export const AvatarContainer = forwardRef<HTMLDivElement, AvatarContainerProps>(
  ({ size = 'md', children, ...props }, ref) => {
    return (
      <AvatarContext.Provider value={{ size }}>
        <div
          data-testid="avatar-container"
          ref={ref}
          style={{ display: 'inline-block' }}
          {...props}
        >
          {children}
        </div>
      </AvatarContext.Provider>
    );
  },
);
