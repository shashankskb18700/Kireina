import axios from "axios";

export const backend = (title) => {
  return async (dispatch) => {
    const name = { name: title };
    console.log(name);

    const getAnimeByTitle = (elem, name) => {
      name = name.toLowerCase().trim();

      let title = elem.title
        ? elem.title.toLowerCase().trim().includes(name)
        : false;
      let title_english = elem.title_english
        ? elem.title_english.toLowerCase().trim().includes(name)
        : false;
      let title_romanji = elem.title_romanji
        ? elem.title_romanji.toLowerCase().trim().includes(name)
        : false;
      let others = elem.others
        ? elem.others.toLowerCase().trim().includes(name)
        : false;

      return title || title_english || title_romanji || others;
    };

    // const vostfrData = await axios.get(
    //   "https://neko-sama.fr/animes-search-vostfr.json"
    // );
    const nm = { name: title };

    //offline
    const vostData = await axios.post("/vostfr", nm); //.

    // online
    // const vostData = await axios.post(
    //   `${process.env.REACT_APP_API_BASE_URL}/vostfr`,
    //   nm
    // );

    // console.log("using backend fordata");
    // console.log(vostData);

    // const additional = vostfrData.data.filter((elem) =>
    //   getAnimeByTitle(elem, title)
    // );

    //

    // offline
    // console.log(additional);

    //offline
    const data = await axios.post("/search", name);

    // online
    // const data = await axios.post(
    //   `${process.env.REACT_APP_API_BASE_URL}/search`,
    //   name
    // );

    const dataObject = {
      result: data.data.result,
      d: vostData.data,
      wallpaper: data.data.wallpaper,
    };

    // console.log("------------------------------------");
    // console.log(data.data);
    // console.log("------------------------------");
    // console.log(dataObject);
    dispatch({
      type: "BACKEND",
      payload: dataObject,
      // payload: data.data,
    });
  };
};

// export const backend = (title) => {
//   return {
//     type: "BACKEND",
//     payload: title,
//   };
// };
