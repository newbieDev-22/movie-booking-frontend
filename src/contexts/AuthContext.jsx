import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const sharedValue = {
    loginOpen,
    setLoginOpen,
    registerOpen,
    setRegisterOpen,
  };

  return <AuthContext.Provider value={sharedValue}>{children}</AuthContext.Provider>;
}

export { AuthContext };
