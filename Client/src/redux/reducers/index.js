import { combineReducers } from "redux";
import { SearchReducer } from "./SerchReducer";
import { AuthDetails } from "./AuthDetails";

export default combineReducers({
  srchRedu: SearchReducer,
  AuthDetail: AuthDetails,
});

// now you have to figure out how to use xml data , because that's what you are getting so we need to change it
