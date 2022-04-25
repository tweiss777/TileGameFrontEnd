import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuth }) {
  // if (isAuth === false) {
  //   //temporary
  //   return <Navigate to="/" replace />;
  // }

  return <>{children}</>;
}

export default ProtectedRoute;
