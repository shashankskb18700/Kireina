export const Wish = (obj) => {
  console.log("running wish .>>>>>********");
  console.log(obj);
  return {
    type: "WISHLIST",
    payload: obj,
  };
};
