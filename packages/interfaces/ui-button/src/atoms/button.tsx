import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { ButtonSize, ButtonVariant } from "../type";

import { ElButton } from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "fill",
      size = "md",
      isFullWidth,
      children,
      prefixIcon,
      suffixIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <ElButton
        {...props}
        data-variant={variant}
        data-size={size}
        data-is-full-width={isFullWidth}
        data-is-only-icon={typeof children !== "string"}
        ref={ref}
      >
        {Boolean(prefixIcon) && prefixIcon}
        {children}
        {Boolean(suffixIcon) && suffixIcon}
      </ElButton>
    );
  },
);
