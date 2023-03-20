import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Register from "./userAccounts/Register";
import Login from "./userAccounts/Login";
import accountContext from "./userAccounts/accountContext";
import BookUpload from "./BookUpload";
import Home from "./Home";
import AccountDetails from "./userAccounts/AccountDetails";
import AccountList from "./userAccounts/AccountList";
import EditAccount from "./userAccounts/EditAccount";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState("USER");
  const [userEmail, setUserEmail] = useState("");

  return (
    <accountContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userType,
        setUserType,
        userEmail,
        setUserEmail,
      }}
    >
      <Router>
        <div className="App">
          <NavBar />
        </div>
        <div style={{ margin: "90px" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/upload" element={<BookUpload />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/account-details" element={<AccountDetails />}></Route>
            <Route path="/all-accounts" element={<AccountList />}></Route>
            <Route
              path="/edit-account/:email"
              element={<EditAccount />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </accountContext.Provider>
  );
}

export default App;
