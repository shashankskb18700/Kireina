import React, { useState, useEffect } from "react";
// import firebase from "../firebase/fbase";
import { authService } from "../firebase/fbase";

import Search from "./search/search.js";
import Auth from "./Auth/Auth";
import AppRouter from "./Router";
import NavHeader from "./Header-Footer/NavHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      setInit(true);
    });
  }, []);
  // console.log(firebase);
  console.log(authService.getAuth().currentUser);
  return (
    <div>
      <div>
        <NavHeader />
      </div>
      <div>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "loading"}</div>
      {/* <Auth /> */}

      {/* <Search /> */}
    </div>
  );
};

export default App;
