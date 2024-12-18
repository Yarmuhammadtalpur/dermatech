import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function index() {
  return (
    <div className="parent-div ">
      <div className="posNavbar pos-abs">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default index;
