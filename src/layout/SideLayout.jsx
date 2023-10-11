import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const SideLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        
        <Outlet></Outlet>

        <Footer/>
      </div>
    </>
  );
};

export default SideLayout;
