import { FC, ReactNode } from "react";

import styles from "./avatar.module.css";

export interface AvatarImageProps {
  src: string;
}

export const AvatarImage: FC<AvatarImageProps> = () => {
  return <div className={styles.rbAvatar}>Avatar Image</div>;
};

export interface AvatarInitialProps {
  children: ReactNode;
}

export const AvatarInitial: FC<AvatarInitialProps> = () => {
  return <div>Avatar Initial</div>;
};
