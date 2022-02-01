import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./search/search";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";
import Home from "./Home/Home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <>
            <Route exact path="/auth">
              <Auth />
            </Route>
          </>
        )}
        <Route exact path="/admin">
          <Admin />
        </Route>

        {/* <Route exact path="/home">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
};

// hash router use hash before any url so to make it work you have to use browser router , and no matter what if you are on home , even you want to go  auth , you won't be able to do so because , in code you set isLogged in and it checks for your logged in or not and then it shows page

export default AppRouter;
