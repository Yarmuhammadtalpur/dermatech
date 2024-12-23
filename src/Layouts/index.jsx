import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function index() {
  return (
    <>
      {/* <div className="parent-divLayout ">
        <div className="posNavbar pos-abs">
          <Navbar /> */}
      <>
        <Outlet />
      </>
      {/* 
          <Footer />
        </div>
      </div> */}
    </>
  );
}

export default index;
