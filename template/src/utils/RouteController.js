import React, { Component } from "react";
import PrivateRoute from "./PrivateRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * @description This is a component for managing the routes.
 * For example, It allows you to pass an option for whether the route is private or not.
 * Or you can pass an option for including the header/footer or not.
 */
class RouteController extends Component {
  static defaultProps = {
    isPrivateRoute: false,
    privateRouteRedirect: "/login",
    header: Header,
    footer: Footer,
    includeHeader: true,
    includeFooter: true,
  };

  render() {
    const {
      isPrivateRoute,
      privateRouteRedirect,
      children,
      header,
      footer,
      includeHeader,
      includeFooter,
    } = this.props;

    return (
      <>
        {includeHeader && header()}
        {isPrivateRoute ? (
          <PrivateRoute redirect={privateRouteRedirect}>
            {children}
          </PrivateRoute>
        ) : (
          children
        )}
        {includeFooter && footer()}
      </>
    );
  }
}

export default RouteController;
