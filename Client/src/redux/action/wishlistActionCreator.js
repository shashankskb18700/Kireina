export const Wish = (obj) => {
  return {
    type: "WISHLIST",
    payload: obj.$.id,
  };
};
