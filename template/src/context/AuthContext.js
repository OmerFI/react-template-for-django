import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import { getAuthTokens, refreshPage } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import settings from "../Settings";

export const AuthContext = React.createContext();

const API_TOKEN_URL = `${settings.BASE_URL}/api/token/`;
const API_REGISTER_URL = `${settings.BASE_URL}/api/register/`;
const REDIRECT_AFTER_LOGIN_URL = "/";

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(getAuthTokens);
  let [user, setUser] = useState(() => {
    return authTokens ? jwt_decode(localStorage.getItem("authTokens")) : null;
  });
  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  let loginUser = async (username, password) => {
    let response = await axios
      .post(API_TOKEN_URL, {
        username,
        password,
      })
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
        }
        return response;
      })
      .catch((error) => {
        return error.toJSON();
      });
    return response;
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  let registerUser = async (username, email, password) => {
    let response = await axios
      .post(API_REGISTER_URL, {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          loginUser(username, password).then((response) => {
            if (response.status === 200) {
              navigate(REDIRECT_AFTER_LOGIN_URL);
              refreshPage();
            }
          });
        }
        return response;
      })
      .catch((error) => {
        let errorJSON = error.toJSON();
        errorJSON.data = error.response.data;
        return errorJSON;
      });
    return response;
  };

  let contextData = {
    user,
    authTokens,

    loginUser,
    logoutUser,
    registerUser,

    setAuthTokens,
    setUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
