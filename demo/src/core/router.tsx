import { ReactNode } from "react";
import { Route, Router, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";

export interface AppRouterProps {
  children: ReactNode;
}

export const AppRouter = () => {
  return (
    <Router hook={useBrowserLocation}>
      <Switch>
        <Route path="/">home</Route>
        <Route path="/about">about</Route>
        <Route>Default</Route>
      </Switch>
    </Router>
  );
};
