// export const clickedAnime = (picked) => {
//   console.log("picked");
//   console.log(picked.$.name);
//   return {
//     type: "CLICK",
//     payload: picked,
//   };
// };

import axios from "axios";
import levenshtein from "fast-levenshtein";
import DomParser from "dom-parser";

// export const clickedAnime = (picked) => async (dispatch) => {
//   console.log("picked");
//   console.log(picked.$.name);

//   const response = await axios.post("/mored", { name: picked.$.name });

//   // const data = { ann: picked, vostfr: response };
//   dispatch({ type: "CLICK", payload: picked });
// };

export const clickedAnime = (picked, vostfr, name) => {
  const titleArr = [];
  vostfr.forEach((element) => {
    titleArr.push(element.title_english);
    // console.log(element.title);
  });
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

  //

  return async (dispatch) => {
    // const response = await axios.post(
    //   "https://evening-thicket-96284.herokuapp.com/mored",
    //   {
    //     name: name,
    //     tit: titleArr,
    //     type: picked.$.type,
    //   }
    // );

    const arr = [];
    // let min = req.body.tit.length;
    titleArr.forEach((element) => {
      arr.push(levenshtein.get(element, name));
      // console.log(levenshtein.get(element, req.body.name));
    });
    let bestTitle = arr.sort((a, b) => a - b)[0];
    // console.log(min);
    let bestOne = "";

    titleArr.forEach((element) => {
      if (levenshtein.get(element, name) === bestTitle) {
        bestOne = element;
      }
    });

    var moreData;
    vostfr.forEach((element) => {
      if (element.title_english === bestOne) {
        moreData = element;
      }

      // console.log(element.title);
    });

    // console.log(levenshtein.get("body", "bod"));

    // const anotherData = await animeVostfr.loadAnime();

    // const vostfrData = await axios.get(
    //   "https://neko-sama.fr/animes-search-vostfr.json"
    // );

    // console.log(vostfrData);
    // if (req.body.type === "Movie") {
    //   var moreData = await animeVostfr.searchMovieAnime(anotherData, bestOne);
    // } else {
    //   var moreData = await animeVostfr.searchAnime(anotherData, bestOne);
    // }

    // var moreData = vostfrData.data.filter((elem) =>
    //   getAnimeByTitle(elem, bestOne)
    // );

    // console.log(moreData);

    //

    ///

    //

    // const valu = await axios.get(`https://www.neko-sama.fr${moreData.url}`);

    const url = { url: moreData.url };

    // offline

    let vs;

    vs = await axios.post("/moreData", url);

    // online
    // vs = await axios.post(
    //   `${process.env.REACT_APP_API_BASE_URL}/moreData`,
    //   url
    // );
    // console.log(vs.data);
    // valu.synop = valu.synop.replace(/l*L*&#\d*;/g, "");

    //language conversion setup
    // translate.engine = "google";
    // translate.key = process.env.GOOGLE;
    // // translate.from = "fr";

    // const text = await translate(valu.synop, {
    //   to: "english",
    //   from: "French",
    // });

    // valu.synop = text;
    // valu.synop = _.unescape(valu.synop);

    let parser = new DomParser();
    let document = parser.parseFromString(vs.data);

    let synop = document
      .getElementsByClassName("synopsis")[0]
      .getElementsByTagName("p")[0].innerHTML;

    let ytb = document.getElementsByTagName("iframe")[0];
    let trailer = ytb ? ytb.getAttribute("src") : false;
    let banner = document.getElementById("head").getAttribute("style");
    banner = banner.substring(banner.indexOf("url("));
    banner = banner.substring(4, banner.indexOf(")"));

    // let result = valu.data.substring(valu.data.indexOf("episodes"));
    // result = result.substring(0, result.indexOf("$(document)"));
    // result = eval(result);

    // console.log(synop + " " + ytb + " " + banner);
    //
    // console.log(valu.data);

    // console.log("Synopsis: ", synop);
    // console.log("Banner: ", banner);
    // console.log("Youtube embed trailer link: ", trailer);
    // console.log("Episodes: ");
    // res.send(JSON.stringify(valu));

    // console.log("banner form clicke" + vs.banner);
    // console.log(vs.trailer);
    // console.log(mdata);

    // const vs = await axios.post("/moreData", url);
    //   .then((vs) => {
    //   const data = {
    //     banner: vs.banner,
    //     synop: vs.synop,
    //     trailer: vs.trailer,
    //     // episode: result,
    //   };
    //   const response = { data: data };

    //   dispatch({
    //     type: "CLICK",
    //     payload: { vostr: response, ann: picked, name: name, url: url },
    //   });
    // });
    console.log(vs);

    const data = {
      banner: banner,
      synop: synop,
      trailer: trailer,
      // episode: result,
    };
    const response = { data: data };

    //

    //

    // for offline

    // const response = await axios.post("/mored", {
    //   name: name,
    //   tit: titleArr,
    //   type: picked.$.type,
    // });

    dispatch({
      type: "CLICK",
      payload: { vostr: response, ann: picked, name: name },
    });
  };
  // console.log("picked");
  // console.log(picked.$.name);
  // return {
  //   type: "CLICK",
  //   payload: picked,
  // };
};
