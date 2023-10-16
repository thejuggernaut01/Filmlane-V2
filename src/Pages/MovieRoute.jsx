import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";

const MovieRoute = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MovieRoute;
