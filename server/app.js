// const { response } = require("express");
// const express = require("express");
// const animeVostfr = require("anime-vostfr");
const express = require("express");
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
const xml2js = require("xml2js");
const axios = require("axios");
const levenshtein = require("fast-levenshtein");
const translate = require("translate");
// const _,
//   { map } = require("underscore");
const cors = require("cors");
const { readFile } = require("fs/promises");
const YouTube = require("youtube-sr").default;
const google = require("googlethis");

// import { DomParser } from "dom-parser";

const app = express();

app.use(express.json());

const whitelist = ["https://kireinanime.web.app", "https://neko-sama.fr"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const { AnimeWallpaper, AnimeSource } = require("anime-wallpaper");
const wallpaper = new AnimeWallpaper();
// "https://neko-sama.fr"

// if you want to use it in offline means on local  host comment next line of code ;
// app.use(cors(corsOptions));

// app.use(cors({ origin: "https://kireinanime.web.app/", credentials: true }));

app.get("/", async (req, res) => {
  // const htmlfil = await fs.readFileSync("./htmlResume.html", "utf-8");
  // await pdf
  //   .create(htmlfil, options)
  //   .toFile("./Resume.pdf", function (err, res) {
  //     if (err) return console.log(err);
  //     console.log(res);
  //     // { filename: '/app/businesscard.pdf' }
  //   });
  res.set("Access-Control-Allow-Origin", "*");
  // res.send(l);

  // res.status(200).send("hello");
});
app.get("/serve", (req, res) => {
  console.log("herer");
  res.set("Access-Control-Allow-Origin", "*");
  return res.status(200).json({
    name: "serverside",
  });
});

app.post("/search", async (req, res) => {
  console.log(req.body);
  // const response = await fetch(
  //   `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.body.name}`
  // );

  // console.log(response.text);

  //ANN api
  const va = await axios.get(
    `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.body.name}`
  );

  let coverPic = "";

  try {
    coverPic = await wallpaper.search(
      { title: req.body.name },
      AnimeSource.WallHaven
    );
  } catch (e) {
    console.log(e);
  }

  //----------------------------------------------------------------------------
  // const displayInfo = function (info) {
  //   console.log(`[INFO]  ${info}`);
  // };
  // const displayError = function (err) {
  //   console.log(`[ERROR]  ${err}`);
  // };

  // let j = await axios.get(
  //   "https://neko-sama.fr/anime/info/7892-koe-no-katachi-vostfr"
  // );
  // console.log(j);

  // var d;

  // displayInfo("Connexion en cours...");
  // //VF same methods as vostfr
  // api
  //   .loadAnimeVF()
  //   .then(async (data) => {
  //     displayInfo("Connexion effectuée...");
  //     console.log(data);
  //   })
  //   .catch((err) => displayError(err));

  // api
  //   .loadAnime()
  //   .then(async (data) => {
  //     displayInfo("Connexion effectuée...");

  //     var another = api.searchAnime(data, req.body.name);
  //     res.send(another);
  //   })
  //   .catch((err) => displayError(err));

  //----------------------------------------------------------------------

  //animeVostfr api

  // const dataVF = await animeVostfr.loadAnimeVF();
  // const anotherData = await animeVostfr.loadAnime(); ///***  */

  // var moreData = await animeVostfr.searchAnime(anotherData, `${req.body.name}`);
  //

  // var moreData = await animeVostfr.searchAnime(anotherData, req.body.name);
  // console.log(moreData); ///***  */

  //
  // res.send(JSON.stringify(moreData));
  // console.log(va.data);
  // res.send("request complete");

  //

  // const valu = await animeVostfr
  //   .getMoreInformation(moreData[0].url)
  //   .catch((err) => displayError(err));

  ///

  // console.log("Synopsis: ", valu.synop);
  // console.log("Banner: ", valu.banner);
  // console.log("Youtube embed trailer link: ", valu.trailer);
  // console.log("Episodes: ", valu.eps);

  // //
  // var bestScore = animeVostfr.bestScoreAnime(anotherData); ///***  */
  // var popularAnime = animeVostfr.popularAnime(anotherData); ///***  */

  xml2js.parseString(va.data, function (err, result) {
    // fs.writeFileSync("./real.json", JSON.stringify(result, null, 2), "utf-8");
    console.log(result);

    let rre = {
      result: result,
      wallpaper: coverPic,
      // d: moreData,
      //
      //
      // only offline
      // d: j,
      //
      //
      // bestScore: bestScore,
      // popularAnime: popularAnime,
    };
    // res.set("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "https://kireinanime.web.app/"); // update to match the domain you will make the request from
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept"
    // );
    res.send(JSON.stringify(rre, null, 2));
  });

  // console.log(va);
  // console.log("i am runnig");
  // res.status(200).send("data updated");
  // res.end(JSON.stringify(moreData));
});

app.post("/wishlist", async (req, res) => {
  console.log(req.body);
  const wishlisted = await axios.get(
    `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${req.body.name}`
  );

  // console.log(wishlisted.data);
  xml2js.parseString(wishlisted.data, function (err, result) {
    // fs.writeFileSync("./real.json", JSON.stringify(result, null, 2), "utf-8");
    console.log(result);
    let wishlistedItem = {
      wishlisted: result,
    };
    res.send(JSON.stringify(wishlistedItem, null, 2));
  });
});

app.post("/mored", async (req, res) => {
  console.log(req.body);

  const arr = [];
  let min = req.body.tit.length;
  req.body.tit.forEach((element) => {
    arr.push(levenshtein.get(element, req.body.name));
    // console.log(levenshtein.get(element, req.body.name));
  });
  let bestTitle = arr.sort((a, b) => a - b)[0];
  // console.log(min);
  let bestOne = "";

  req.body.tit.forEach((element) => {
    if (levenshtein.get(element, req.body.name) === bestTitle) {
      bestOne = element;
    }
  });

  // console.log(levenshtein.get("body", "bod"));

  const anotherData = await animeVostfr.loadAnime();

  if (req.body.type === "Movie") {
    var moreData = await animeVostfr.searchMovieAnime(anotherData, bestOne);
  } else {
    var moreData = await animeVostfr.searchAnime(anotherData, bestOne);
  }

  // console.log(moreData);
  const valu = await animeVostfr.getMoreInformation(moreData[0].url);
  valu.synop = valu.synop.replace(/l*L*&#\d*;/g, "");

  translate.engine = "google";
  translate.key = process.env.GOOGLE;
  // translate.from = "fr";

  const text = await translate(valu.synop, {
    to: "english",
    from: "French",
  });

  valu.synop = text;
  // valu.synop = _.unescape(valu.synop);

  console.log(valu);
  console.log("Synopsis: ", valu.synop);
  console.log("Banner: ", valu.banner);
  console.log("Youtube embed trailer link: ", valu.trailer);
  console.log("Episodes: ", valu.eps);
  res.send(JSON.stringify(valu));
});

app.post("/vostfr", async (req, res) => {
  console.log(req.body);
  let title = req.body.name;
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

  // var vostfrData = JSON.parse(
  //   await readFile(new URL("./vostfrData.json", import.meta.url))
  // );
  var vostfrData = [];

  // console.log(vostfrData);

  const additional = vostfrData.filter((elem) => getAnimeByTitle(elem, title));

  // console.log(additional);

  res.send(JSON.stringify(additional));
});

app.post("/moreData", async (req, res) => {
  // console.log(req.body);

  let moreDetails = {};
  // try {
  //   moreDetails = await animeVostfr.getMoreInformation(req.body.url);
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    moreDetails = await cloudscraper(`https://www.neko-sama.fr${req.body.url}`);
  } catch (e) {
    console.log(e);
  }

  // try {
  //   moreDetails = CloudflareBypasser.request(
  //     `https://www.neko-sama.fr${req.body.url}`
  //   );
  // } catch (e) {
  //   console.log(e);
  // }

  // let parser = new DomParser();
  // let document = parser.parseFromString(moreDetails);
  // let synop = document
  //   .getElementsByClassName("synopsis")[0]
  //   .getElementsByTagName("p")[0].innerHTML;
  // let ytb = document.getElementsByTagName("iframe")[0];
  // let banner = document.getElementById("head").getAttribute("style");
  // banner = banner.substring(banner.indexOf("url("));
  // banner = banner.substring(4, banner.indexOf(")"));

  // let result = html.substring(html.indexOf("episodes"));
  // result = result.substring(0, result.indexOf("$(document)"));
  // result = eval(result);

  // let parser = new DomParser();
  // let document = parseFromString(moreDetails.data);
  // let synop = document
  //   .getElementsByClassName("synopsis")[0]
  //   .getElementsByTagName("p")[0].innerHTML;
  // let ytb = document.getElementsByTagName("iframe")[0];
  // let trailer = ytb ? ytb.getAttribute("src") : false;
  // let banner = document.getElementById("head").getAttribute("style");
  // banner = banner.substring(banner.indexOf("url("));
  // banner = banner.substring(4, banner.indexOf(")"));

  console.log("moreDetails ---------------------------------------------");
  // banner = moreDetails.banner;
  // synop = moreDetails.synop;
  // trailer = moreDetails.trailer;
  // const data = { banner: banner, synop: synop, trailer: trailer };
  // console.log("req.body.url" + req.body.url);
  //   return{
  //     synop: synop,
  //     banner: banner,
  //     trailer: ytb ? ytb.getAttribute('src') : false,
  //     eps: result
  // };
  // console.log("synop" + synop);
  // console.log("banner" + banner);
  // console.log("ytb" + ytb);
  // console.log(moreDetails.synop);
  // console.log(moreDetails.trailer);

  res.send(JSON.stringify(moreDetails));

  // res.send("");
});

app.post("/trailer", async (req, res) => {
  const name = req.body.name;
  const videos = await YouTube.search(req.body.name, { limit: 25 });
  let url = "";
  const options = {
    page: 0,
    safe: false, // Safe Search
    parse_ads: false, // If set to true sponsored results will be parsed
    additional_params: {
      // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
      hl: "en",
    },
  };

  const response = await google.search(req.body.name, options);
  // console.log(
  //   videos.map((m, i) => `[${++i}] ${m.title} (${m.url})`).join("\n")
  // );

  videos.map((m, i) => {
    if (m.title.toLocaleLowerCase().indexOf("trailer") > -1) {
      url = m.url;
      url = url.replace("watch", "embed");
      console.log(url);
    }
  });
  console.log(response.knowledge_panel.description);

  const additionalData = {
    trailer: url,
    synopsis: response.knowledge_panel.description,
  };

  res.send(additionalData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("on port 5000");
});
