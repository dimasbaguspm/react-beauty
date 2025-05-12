/* eslint-disable */
import { FC, PropsWithChildren, ReactNode, Suspense } from 'react';
import { createHashRouter, Outlet } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { ROUTES } from '../constants/routes';

import { GETTING_STARTED_ROUTE } from './routes/getting-started-route';
import { INTERFACE_ROUTE } from './routes/interface-route';
import { FALLBACK_ROUTE } from './routes/fallback-route';

const router = (children: ReactNode) =>
  createHashRouter([
    {
      path: ROUTES.INTRODUCTION,
      element: children,
      children: [...GETTING_STARTED_ROUTE, ...INTERFACE_ROUTE, ...FALLBACK_ROUTE],
    },
  ]);

export const AppRouter: FC<PropsWithChildren> = ({ children }) => {
  return <RouterProvider router={router(children)} />;
};

export const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
