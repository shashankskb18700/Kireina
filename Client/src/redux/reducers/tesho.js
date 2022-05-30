export const Tesho = (state = [], action) => {
  console.log("tester");
  switch (action.type) {
    case "TESTER":
      return [...state, action.payload];
    default:
      return state;
  }
};
