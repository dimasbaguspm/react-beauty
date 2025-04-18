import { css } from "@linaria/core";
import { FC, ReactNode } from "react";

const selected = css`
  background-color: green;
`;

export interface AvatarImageProps {
  src: string;
}

export const AvatarImage: FC<AvatarImageProps> = () => {
  return <div className={selected}>Avatar Image</div>;
};

export interface AvatarInitialProps {
  children: ReactNode;
}

export const AvatarInitial: FC<AvatarInitialProps> = () => {
  return <div className={selected}>bar</div>;
};
