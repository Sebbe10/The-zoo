import React from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";

import { Home } from "./Home/home";

// import Appp from "./Animal/animal";
// import Animal from "./Animal/animal";

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
