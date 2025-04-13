import { FC } from "react";

import { iconSets } from "./__assets__";

export type IconName = keyof typeof iconSets;

export interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name }) => {
  const Src = iconSets[name];

  if (!Src) {
    throw new Error(`Unknown icon name: ${name}`);
  }

  return <Src />;
};
