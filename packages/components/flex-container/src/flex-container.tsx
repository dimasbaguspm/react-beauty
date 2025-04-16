import { forwardRef } from "react";

import styles from "./styles.module.css";

import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type FlexGap = "none" | "1" | "2" | "3" | "4" | "5" | "6";
export type FlexDirection = "row" | "column";
export type FlexAlign =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
export type FlexJustify =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
export type FlexWrap = "wrap" | "nowrap" | "reverse";

export interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  gap?: FlexGap;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  children: ReactNode;
}

export const FlexContainer = forwardRef<HTMLDivElement, FlexContainerProps>(
  (
    {
      as = "div",
      gap,
      direction,
      align,
      justify,
      wrap,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as;
    return (
      <Component
        {...props}
        ref={ref}
        data-gap={gap}
        data-direction={direction}
        data-align={align}
        data-justify={justify}
        data-wrap={wrap}
        className={[styles.flex, className].join(" ")}
      >
        {children}
      </Component>
    );
  },
);
