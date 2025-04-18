import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElAvatarInitial } from "../style";
import { AvatarSize } from "../type";

export interface AvatarInitialProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: AvatarSize;
}

export const AvatarInitial = forwardRef<HTMLDivElement, AvatarInitialProps>(
  ({ size = "md", ...props }, ref) => {
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
