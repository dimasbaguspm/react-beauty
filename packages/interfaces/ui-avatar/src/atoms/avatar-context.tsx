import { createContext, useContext } from 'react';

import { AvatarSize } from '../type';

interface AvatarContextType {
  size?: AvatarSize;
}

export const AvatarContext = createContext<AvatarContextType>({
  size: 'md',
});

export const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatarContext must be used within an AvatarProvider');
  }
  return context;
};
