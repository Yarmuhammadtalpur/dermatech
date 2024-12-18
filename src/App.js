import React, { Suspense } from "react";

import "./App.css";
import RoutesMain from "./Routes/Routes";
// import About from './components/About/About';

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <RoutesMain />
      </Suspense>
    </>
  );
}

export default App;
