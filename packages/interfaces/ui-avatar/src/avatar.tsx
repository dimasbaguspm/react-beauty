import { FC, ReactNode } from "react";

export interface AvatarImageProps {
  src: string;
}

export const AvatarImage: FC<AvatarImageProps> = () => {
  return <div>Avatar Image</div>;
};

export interface AvatarInitialProps {
  children: ReactNode;
}

export const AvatarInitial: FC<AvatarInitialProps> = () => {
  return <div>bar</div>;
};
