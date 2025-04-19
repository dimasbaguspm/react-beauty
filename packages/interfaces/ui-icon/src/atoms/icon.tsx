import { cx } from "@linaria/core";
import { forwardRef } from "react";

import { iconSets } from "../assets";
import { IconName, IconSize } from "../type";

import { elIcon } from "./style";

import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, size = "md", className, ...rest } = props ?? {};

  const Component = iconSets?.[name];

  if (!Component) {
    throw new Error(`Unknown icon name: ${name}`);
  }

  return (
    <Component
      {...rest}
      ref={ref}
      data-size={size}
      className={cx(elIcon, className)}
    />
  );
});
