export const TopAnime = (state = [], action) => {
  console.log("tester");
  switch (action.type) {
    case "TOPANIME":
      return [...state, action.payload];
    default:
      return state;
  }
};
