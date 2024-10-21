import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const SimpleLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default SimpleLayout;
