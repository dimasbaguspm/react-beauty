import React, { FC, ReactNode, Suspense } from 'react';

import { SideBar } from './sidebar';

export interface PageLayoutProps {
  children: ReactNode;
}
export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <main
        style={{
          padding: '2rem 4rem',
          overflow: 'auto',
          flexGrow: 1,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </div>
  );
};
