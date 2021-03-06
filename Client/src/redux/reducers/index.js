import { combineReducers } from "redux";
import { SearchReducer } from "./SerchReducer";
import { AuthDetails } from "./AuthDetails";
import { Clicked } from "./Clicked";
import { TopAnime } from "./topAnimeReducer";
import { WishListReducer } from "./WishlistReducer";

export default combineReducers({
  srchRedu: SearchReducer,
  AuthDetail: AuthDetails,
  Clickd: Clicked,
  TopAnime: TopAnime,
  wishlistData: WishListReducer,
});

// now you have to figure out how to use xml data , because that's what you are getting so we need to change it
