import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios.get("/api/get-token").then(function (data) {
      console.log(data)
      if (data.data.token) {
        setIsAuth(data.data.token);
      }
      return isAuth
    });
  }, [isAuth]);

  if (isAuth === undefined) {
    return <LoginPage />;
  }

  return isAuth && admin && isAuth !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  ) : (
    <Navigate t="/login" />
  );
};

export default ProtectedRoutesComponent;
