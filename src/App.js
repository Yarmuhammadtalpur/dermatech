import React, { Suspense } from "react";

import RoutesMain from "./Routes/Routes";
import "./Layouts/style.css";
import "./App.css";
// import About from './components/About/About';

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <RoutesMain />
      </Suspense>
    </>
  );
}

export default App;
