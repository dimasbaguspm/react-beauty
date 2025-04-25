import { ReactNode } from "react";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

export interface AppRouterProps {
  children: ReactNode;
}

export const AppRouter = () => {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/">home</Route>
        <Route path="/about">about</Route>
        <Route>Default</Route>
      </Switch>
    </Router>
  );
};
