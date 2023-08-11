import { Outlet } from "react-router-dom";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
