import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import history from "./config/history";
import { withCookies } from "react-cookie";
import { PrivateRoute, PublicRoute } from "./config/PrivateRoute";
import "react-table/react-table.css";
import "./App.scss";
import "./index.css";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const HospitalCode = React.lazy(() => import("./views/Pages/HospitalCode"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <PublicRoute
              exact
              path="/auth/login"
              name="Login Page"
              component={props => (
                <Login cookies={this.props.cookies} {...props} />
              )}
            />
            <PublicRoute
              exact
              path="/hospital-auth"
              name="Hospital Code"
              component={props => (
                <HospitalCode cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={props => (
                <Register cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => (
                <Page404 cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => (
                <Page500 cookies={this.props.cookies} {...props} />
              )}
            />
            <PrivateRoute
              path="/"
              name="Home"
              component={props => (
                <DefaultLayout cookies={this.props.cookies} {...props} />
              )}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default withCookies(App);
