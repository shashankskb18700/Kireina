export const Wish = (wishlistSting) => {
  console.log(wishlistSting);
  return {
    type: "WISHLIST",
    payload: wishlistSting,
  };
};
