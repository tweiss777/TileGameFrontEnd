import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentiation } from "../hooks/useAuthentication";


function ProtectedRoute({ children}) {
  const {isAuthenticated} = useAuthentiation();
  if (isAuthenticated === true) { //temporary
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
