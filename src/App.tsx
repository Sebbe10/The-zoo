import React from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";

import { Home } from "./Home/home";

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
