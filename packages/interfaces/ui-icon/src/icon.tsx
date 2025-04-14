import { forwardRef } from "react";

import { iconSets } from "./__assets__";
import styles from "./icon.module.css";

import type { SVGProps } from "react";

export type IconName = keyof typeof iconSets;
export type IconSize = "small" | "medium" | "large";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, size = "medium", ...rest } = props ?? {};
  const Component = iconSets[name];

  if (!Component) {
    throw new Error(`Unknown icon name: ${name}`);
  }

  return (
    <Component {...rest} ref={ref} data-size={size} className={styles.uiIcon} />
  );
});
