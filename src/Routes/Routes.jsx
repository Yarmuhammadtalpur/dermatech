import React, { lazy, useEffect } from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
// layout
import Layout from "../Layouts/index";

const Home = lazy(() => import("../components/Home/Home"));
const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));

function RoutesMain() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={"Not Found"} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutesMain;
