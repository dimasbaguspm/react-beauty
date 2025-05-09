import { AvatarContainer, AvatarInitial, AvatarPicture } from './atoms';

type AvatarCompositionModel = {
  Initial: typeof AvatarInitial;
  Picture: typeof AvatarPicture;
};

const AvatarComposition = {
  Initial: AvatarInitial,
  Picture: AvatarPicture,
} satisfies AvatarCompositionModel;

export const Avatar = Object.assign(AvatarContainer, AvatarComposition);
