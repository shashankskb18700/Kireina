import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./search/search";
import Auth from "./Auth/Auth";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <Search />
          </Route>
        ) : (
          <>
            <Route exact path="/auth">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
