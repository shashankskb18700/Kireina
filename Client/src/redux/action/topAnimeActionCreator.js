import axios from "axios";

export const TopAnimeActionCreator = (animeIdArray, animeIdObject) => {
  // console.log("tester");
  // console.log(vAL);
  console.log(animeIdArray);
  let topAiringString = animeIdObject["topAiring"];
  let topUpcomingString = animeIdObject["topUpcoming"];
  let topAllTimeString = animeIdObject["allTime"];

  return async (dispatch) => {
    animeIdArray = animeIdArray.splice(1);
    console.log(animeIdArray);
    let animeIdString = animeIdArray.toString();
    animeIdString = animeIdString.replaceAll(",", "/");

    // /whislist  will give same result ,for top anime , what actually happening here  is ,  array it converted to string so that api need to be called once after it itereate through object array and seperate it in different array ;
    let data = "";
    console.log(animeIdString);

    const name = { name: animeIdString };
    if (animeIdString.length > 0) {
      // data = await axios.post(
      //   "https://evening-thicket-96284.herokuapp.com/wishlist",
      //   name
      // );

      //offline
      data = await axios.post("/wishlist", name);

      // online
      // data = await axios.post(
      //   `${process.env.REACT_APP_API_BASE_URL}/wishlist`,
      //   name
      // );
    }

    console.log(data.data.wishlisted.ann.anime);

    let allArray = data.data.wishlisted.ann.anime;

    let topAiring = [];
    let topUpcoming = [];
    let topAllTime = [];

    for (let i = 0; i < allArray.length; i++) {
      console.log();

      let id = allArray[i].$.id;
      if (topAiringString.includes(id)) {
        topAiring.push(allArray[i]);
      } else if (topUpcomingString.includes(id)) {
        topUpcoming.push(allArray[i]);
      } else {
        topAllTime.push(allArray[i]);
      }
    }

    console.log(topAiring);
    console.log(topUpcoming);
    console.log(topAllTime);
    const topData = {
      topAiring: topAiring,
      topUpcoming: topUpcoming,
      topAllTime: topAllTime,
    };
    dispatch({
      type: "TOPANIME",
      payload: topData,
    });
  };
};
