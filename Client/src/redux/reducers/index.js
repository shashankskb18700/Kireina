import { combineReducers } from "redux";
import { SearchReducer } from "./SerchReducer";
import { AuthDetails } from "./AuthDetails";
import { Clicked } from "./Clicked";
import { Tesho } from "./tesho";

export default combineReducers({
  srchRedu: SearchReducer,
  AuthDetail: AuthDetails,
  Clickd: Clicked,
  Te: Tesho,
});

// now you have to figure out how to use xml data , because that's what you are getting so we need to change it
