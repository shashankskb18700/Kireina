// export const Wish = (wishlistSting) => {
//   console.log(wishlistSting);
//   return {
//     type: "WISHLIST",
//     payload: wishlistSting,
//   };
// };

import axios from "axios";

export const Wish = (title) => {
  console.log(title);
  return async (dispatch) => {
    const name = { name: title };
    const data = await axios.post("/wishlist", name);
    console.log(data.data);
    dispatch({
      type: "WISHLIST",
      payload: data,
    });
  };
};
