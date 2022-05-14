import { Component } from "react";
import { AuthProvider } from "../context/AuthContext";
import { nestComponents } from "./utils";

/**
 * @description This is a component that wraps all the Context Provider components in the app.
 * It provides AuthProvider for AuthContext by default.
 */
class ContextProviders extends Component {
  static defaultProps = {
    includeAuthProvider: true,
    AuthProvider: AuthProvider,
    customProviders: [],
  };

  constructor(props) {
    super(props);

    const { includeAuthProvider, AuthProvider, customProviders } = this.props;

    this.state = {
      providers: [
        ...(includeAuthProvider ? [AuthProvider] : []),
        ...customProviders,
      ],
    };
  }

  render() {
    return nestComponents(this.state.providers, this.props.children);
  }
}

export default ContextProviders;
