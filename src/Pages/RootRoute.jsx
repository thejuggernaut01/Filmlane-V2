import { Outlet } from "react-router-dom";
import MainNavigation from "../Layout/MainNavigation";

const RootRoute = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootRoute;
