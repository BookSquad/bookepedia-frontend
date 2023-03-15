import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Register from "./userAccounts/Register";
import BookUpload from "./BookUpload"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <div style={{ margin: "90px" }}>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/upload" element={<BookUpload />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
