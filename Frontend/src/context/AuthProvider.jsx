import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Define the AuthProvider component
export default function AuthProvider(props) {
  const initialAuthUser = localStorage.getItem("users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {props.children}
    </AuthContext.Provider>
  );
}

// Define the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
