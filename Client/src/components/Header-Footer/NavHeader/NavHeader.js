import React from "react";
import Search from "../../search/search";
import { authService } from "../../../firebase/fbase";
import { Link } from "react-router-dom";

import "./NavHeader.css";

const NavHeader = () => {
  let authStatus = authService.getAuth().currentUser;
  const signOut = () => {
    let auth = authService.getAuth();
    authService.signOut(auth, () => {
      console.log("signOUt");
    });
  };

  console.log(authStatus);

  return (
    <div>
      <div className="NavHeader">
        <h2 className="title-name">Kireina</h2>
        <div className="searchCont">
          {window.location.href === `http://localhost:3000/animeD` ||
          window.location.href === `https://kireinanime.web.app/animeD` ? (
            <Search />
          ) : (
            ""
          )}
        </div>
        {console.log(window.location.href)}
        <div className="navigator">
          <Link to="/">
            <i className="fas fa-home nav"></i>
          </Link>

          <Link to="/wishlist">
            <i className="fas fa-heart nav"></i>
          </Link>

          <i className="fas fa-user nav"></i>

          {authStatus ? (
            <button
              style={{
                backgroundColor: `inherit`,
                color: "white",
                outline: "none",
                border: "none",
              }}
              onClick={() => signOut()}
            >
              <i className="fas fa-sign-out-alt  fa-lg nav"></i>
            </button>
          ) : (
            <Link to="/auth">
              <i className="fas fa-sign-in-alt nav"></i>
            </Link>
          )}
        </div>
      </div>
      <div className="searchContMobile">
        {window.location.href === `http://localhost:3000/animeD` ||
        window.location.href === `https://kireinanime.web.app/animeD` ? (
          <Search />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavHeader;
