import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthentiation } from "../hooks/useAuthentication";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthentiation();
 
  if (isAuthenticated === false) {
    //temporary
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
