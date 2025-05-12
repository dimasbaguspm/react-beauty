import { ReactBeautyUIProvider } from '@react-beauty/ui-core';
import { FC, StrictMode } from 'react';

import { PageLayout } from '../components/page-layout';
import { AppRouter } from '../routing';
import { AppContent } from '../routing/router';

export const Shell: FC = () => {
  return (
    <StrictMode>
      <ReactBeautyUIProvider defaultTheme="light">
        <AppRouter>
          <PageLayout>
            <AppContent />
          </PageLayout>
        </AppRouter>
      </ReactBeautyUIProvider>
    </StrictMode>
  );
};
