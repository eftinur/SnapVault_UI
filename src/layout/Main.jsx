import { Outlet } from "react-router-dom";
import Navbar from "../comps/Navbar";


const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
