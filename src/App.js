import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Achieve from './achieve';




function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achieve" element={<Achieve />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;