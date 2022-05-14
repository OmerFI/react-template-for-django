import jwt_decode from "jwt-decode";
import axios from "axios";
import dayjs from "dayjs";
import { useAuthContext } from "../context/AuthContext";
import settings from "../Settings";

const baseURL = settings.BASE_URL;
const API_REFRESH_TOKEN_URL = `${baseURL}/api/token/refresh/`;

const useAxios = () => {
  let { authTokens, setUser, setAuthTokens } = useAuthContext();

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: authTokens ? `Bearer ${authTokens.access}` : null,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // or can be calculated with: dayjs(user.exp * 1000).isBefore(dayjs());

    if (!isExpired) {
      return req;
    }

    const response = await axios.post(API_REFRESH_TOKEN_URL, {
      refresh: authTokens.refresh,
    });

    authTokens = response.data;
    localStorage.setItem("authTokens", JSON.stringify(authTokens));

    setAuthTokens(authTokens);
    setUser(jwt_decode(authTokens.access));

    req.headers.Authorization = authTokens
      ? `Bearer ${authTokens.access}`
      : null;

    return req;
  });

  return axiosInstance;
};

export const useAnonimAxios = () => {
  const axiosInstance = axios.create({
    baseURL,
  });

  return axiosInstance;
};

export default useAxios;
