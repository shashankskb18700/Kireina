import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Search from "./search/search";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";
import Home from "./Home/Home";
import TesFu from "../tesFu";
import AnimeSearched from "./search/AnimeSearched/AnimeSearched";

const AppRouter = ({ isLoggedIn }) => {
  console.log("form router ");
  console.log(isLoggedIn);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/auth"
        render={() => (isLoggedIn ? <Redirect to="/" /> : <Auth />)}
      />

      {/* {isLoggedIn ? (
        <>
          <Route exact path="/">
            <Home />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/auth">
            <Auth />
          </Route>
        </>
      )} */}
      <Route path="/admin">
        <Admin />
      </Route>
      <Route exact path="/test">
        <TesFu />
      </Route>
      {/* <Route exact path="/home">
          <Home />
        </Route> */}
      <Route exact path="/animeD">
        <AnimeSearched />
      </Route>
    </Switch>
  );
};

// hash router use hash before any url so to make it work you have to use browser router , and no matter what if you are on home , even you want to go  auth , you won't be able to do so because , in code you set isLogged in and it checks for your logged in or not and then it shows page

export default AppRouter;
