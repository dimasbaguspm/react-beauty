import { forwardRef, ImgHTMLAttributes } from 'react';

import { AvatarSize } from '../type';

import { ElAvatarPicture } from './style';

export interface AvatarPictureProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size?: AvatarSize;
  children?: never;
}

export const AvatarPicture = forwardRef<HTMLImageElement, AvatarPictureProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <ElAvatarPicture
        data-testid="avatar-picture"
        {...props}
        data-size={size}
        ref={ref}
      />
    );
  },
);
