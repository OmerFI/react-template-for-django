import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * @description This is a component for managing the private routes.
 * It will check if the user is logged in.
 * If the user is logged in, it will render the route.
 * If the user is not logged in, it will redirect to the login page.
 */
class PrivateRoute extends Component {
  static contextType = AuthContext;
  static defaultProps = {
    redirect: "/login", // redirect to login page if user is not logged in
  };

  render() {
    const { children, redirect } = this.props;

    let { user } = this.context;

    // customize these checks to your needs.
    if (user) {
      return children;
    } else {
      return <Navigate to={redirect} />;
    }
  }
}

export default PrivateRoute;
