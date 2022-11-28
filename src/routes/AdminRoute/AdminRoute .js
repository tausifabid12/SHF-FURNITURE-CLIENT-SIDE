import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/useUsers";
import Loading from "../../pages&components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const [userInfo, userLoading] = useUser();

  if (userLoading) {
    return <Loading />;
  }

  if (userInfo?.role === "admin") {
    return children;
  }

  return <Navigate to="/login" />;
};

export default AdminRoute;
