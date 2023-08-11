import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../contextAPI/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AUTH_CONTEXT);
  console.log(user);
  
  if (isLoading) {
    return <h6 className="h-screen text-center py-32 font-light text-slate-300">Hold on! Hold on while I have a look</h6>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/sign_up" replace={true} />;
};

export default PrivateRoute;
