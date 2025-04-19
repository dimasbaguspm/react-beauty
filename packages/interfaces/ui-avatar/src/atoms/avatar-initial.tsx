import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { AvatarSize } from "../type";

import { ElAvatarInitial } from "./style";

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
