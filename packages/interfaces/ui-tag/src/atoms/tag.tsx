import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { TagSize } from "../type";

import { ElTag } from "./style";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: TagSize;
  isUppercase?: boolean;
  hasBoldText?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      size = "md",
      isUppercase,
      children,
      prefixIcon,
      suffixIcon,
      hasBoldText,
      ...props
    },
    ref,
  ) => (
    <ElTag
      {...props}
      ref={ref}
      data-size={size}
      data-is-uppercase={isUppercase}
      data-has-bold-text={hasBoldText}
      data-has-suffix-icon={!!suffixIcon}
      data-has-prefix-icon={!!prefixIcon}
    >
      {Boolean(prefixIcon) && prefixIcon}
      {children}
      {Boolean(suffixIcon) && suffixIcon}
    </ElTag>
  ),
);
