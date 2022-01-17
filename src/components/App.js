import React from "react";

import Search from "./search/search.js";

import Auth from "./Auth/Auth";
// import firebase from "../firebase/fbase";
import { authService } from "../firebase/fbase";

const App = () => {
  // console.log(firebase);
  console.log(authService.getAuth().currentUser);
  return (
    <div>
      <Auth />

      {/* <Search /> */}
    </div>
  );
};

export default App;
