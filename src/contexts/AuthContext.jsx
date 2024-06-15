import { useState, createContext, useEffect, useMemo } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import authApi from "../apis/auth";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const res = await authApi.login(credentials);
      setAccessToken(res.data.accessToken);
      const resGetAuthUser = await authApi.getAuthUser();
      setAuthUser(resGetAuthUser.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const sharedValue = useMemo(
    () => ({
      authUser,
      isAuthUserLoading,
      login,
      logout,
      loginOpen,
      setLoginOpen,
      registerOpen,
      setRegisterOpen,
    }),
    [authUser, isAuthUserLoading, loginOpen, registerOpen]
  );

  return <AuthContext.Provider value={sharedValue}>{children}</AuthContext.Provider>;
}

export { AuthContext };
