import React, { createContext } from "react";
import UseFirebase from "../CustomHooks/UseFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = UseFirebase()
  return (
      <AuthContext.Provider value={allContext}>
          {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;