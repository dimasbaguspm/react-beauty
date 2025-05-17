import { Avatar } from '@react-beauty/interfaces';

import { AvatarContainerProps } from '../../../../../packages/interfaces/ui-avatar/src/atoms';
import { Canvas } from '../../../components/canvas';

type AvatarProps = Pick<AvatarContainerProps, 'size' | 'children'>;

export const CanvasAvatar = () => (
  <Canvas<AvatarProps>
    options={[
      {
        title: 'size',
        description: 'The size of the avatar',
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
      {
        title: 'children',
        description: 'The content of the avatar',
        type: 'text',
        defaultValue: 'AB',
      },
    ]}
  >
    {({ children, ...avatarProps }) => (
      <Avatar {...avatarProps}>
        <Avatar.Initial>{children}</Avatar.Initial>
      </Avatar>
    )}
  </Canvas>
);
