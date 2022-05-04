// export const clickedAnime = (picked) => {
//   console.log("picked");
//   console.log(picked.$.name);
//   return {
//     type: "CLICK",
//     payload: picked,
//   };
// };

import axios from "axios";

// export const clickedAnime = (picked) => async (dispatch) => {
//   console.log("picked");
//   console.log(picked.$.name);

//   const response = await axios.post("/mored", { name: picked.$.name });

//   // const data = { ann: picked, vostfr: response };
//   dispatch({ type: "CLICK", payload: picked });
// };

export const clickedAnime = (picked) => {
  return async function (dispatch, getState) {
    const response = await axios.post("/mored", { name: picked.$.name });
    dispatch({ type: "CLICK", payload: { vostr: response, ann: picked } });
  };
  // console.log("picked");
  // console.log(picked.$.name);
  // return {
  //   type: "CLICK",
  //   payload: picked,
  // };
};
