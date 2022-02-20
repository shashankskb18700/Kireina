export const Tesho = (state = [], action) => {
  console.log("tesho se baat kar raha hu ");
  switch (action.type) {
    case "TESTER":
      return [...state, action.payload];
    default:
      return state;
  }
};
