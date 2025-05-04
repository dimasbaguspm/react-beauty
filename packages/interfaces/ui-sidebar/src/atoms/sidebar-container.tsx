import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarContainer } from './style';
import { SidebarProvider } from './use-sidebar';

export interface SidebarContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isExpanded?: boolean;
  onExpandedChange?: (isExpanded: boolean) => void;
}

export const SidebarContainer = forwardRef<
  HTMLDivElement,
  SidebarContainerProps
>(({ children, isExpanded = true, onExpandedChange, ...rest }, ref) => {
  return (
    <SidebarProvider
      isExpanded={isExpanded}
      onExpandedChange={onExpandedChange}
    >
      <ElSidebarContainer ref={ref} data-expanded={isExpanded} {...rest}>
        {children}
      </ElSidebarContainer>
    </SidebarProvider>
  );
});
