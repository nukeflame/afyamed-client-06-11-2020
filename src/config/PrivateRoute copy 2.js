import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "./auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn()) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{ pathname: "/hospital-auth", state: { from: props.location } }}
          />
        );
      }
    }}
  />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn()) {
        return (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);
