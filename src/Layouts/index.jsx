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
      <div
        style={{
          width: "98.9vw",
          overflowX: "hidden",
          boxSizing: "border-box",
          margin: "0",
          padding: "0",
        }}
      >
        <Outlet />
      </div>
      {/* 
          <Footer />
        </div>
      </div> */}
    </>
  );
}

export default index;
