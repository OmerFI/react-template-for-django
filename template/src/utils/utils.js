/**
 * @description Refresh the page
 */
export const refreshPage = () => {
  window.location.reload();
};

export const getAuthTokens = () => {
  let authTokens = JSON.parse(localStorage.getItem("authTokens"));
  if (authTokens) {
    return authTokens;
  }
  return null;
};

/**
 *
 * @param componentArray A list of components
 * @param children
 * @returns Nested components
 * @description This function is used to nest components. Reference: https://stackoverflow.com/a/72230084/14892434
 * @example nestComponents([A,B,C], children) // => <A><B><C/>children</B></A>
 */
export const nestComponents = ([T, ...more], children) => {
  return T == null ? children : <T>{nestComponents(more, children)}</T>;
};
