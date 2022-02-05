import React from "react";
import Search from "../../search/search";
import { authService } from "../../../firebase/fbase";

import "./NavHeader.css";

const NavHeader = () => {
  const signOut = () => {
    let auth = authService.getAuth();
    authService.signOut(auth, () => {
      console.log("signOUt");
    });
  };

  return (
    <div className="NavHeader">
      <h2>Kireina</h2>
      <div className>
        <Search />
      </div>

      <div className="navigator">
        <i class="fas fa-home"></i>
        <i class="fas fa-heart"></i>

        <i class="fas fa-user"></i>
        <i class="fas fa-sign-in-alt"></i>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default NavHeader;
