export const WishListReducer = (state = "", action) => {
  console.log("wishlis reducer ++++++++++");

  switch (action.type) {
    case "WISHLIST":
      return action.payload.data;
    default:
      return state;
  }
};
