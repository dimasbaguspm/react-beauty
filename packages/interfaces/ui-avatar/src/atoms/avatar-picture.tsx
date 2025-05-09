import { forwardRef, ImgHTMLAttributes } from 'react';

import { AvatarSize } from '../type';

import { useAvatarContext } from './avatar-context';
import { ElAvatarPicture } from './style';

export interface AvatarPictureProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size?: AvatarSize;
  children?: never;
}

export const AvatarPicture = forwardRef<HTMLImageElement, AvatarPictureProps>(
  ({ size: propSize, ...props }, ref) => {
    const { size: contextSize } = useAvatarContext();
    const size = propSize || contextSize;

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
