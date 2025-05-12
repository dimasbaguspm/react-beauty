import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTabsContainer } from './style';
import { TabsProvider, TabsType } from './use-tabs';

export interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** The value of the currently selected tab */
  value: string;
  /** Callback when the tab selection changes */
  onValueChange: (value: string) => void;
  /** Children elements to render */
  children: ReactNode;
  /** The visual style of the tabs */
  type?: TabsType;
}

export const TabsContainer = forwardRef<HTMLDivElement, TabsContainerProps>(
  ({ children, value, onValueChange, type = 'underline', ...rest }, ref) => {
    return (
      <TabsProvider value={value} onValueChange={onValueChange} type={type}>
        <ElTabsContainer ref={ref} role="tablist" {...rest}>
          {children}
        </ElTabsContainer>
      </TabsProvider>
    );
  },
);
