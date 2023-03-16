import React from "react";

const accountContext = React.createContext({
  loggedIn: true,
  setLoggedIn: (value) => {
    this.loggedIn = value;
  },
  userType: "user",
  setUserType: (user) => {
    this.userType = user;
  },
});

export default accountContext;
