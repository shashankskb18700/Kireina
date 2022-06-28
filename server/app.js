// const { response } = require("express");
// const express = require("express");
import animeVostfr from "anime-vostfr";
import express, { json } from "express";
// const fetch = require("node-fetch");
import fetch from "node-fetch";
import xml2js from "xml2js";
import axios from "axios";
import levenshtein from "fast-levenshtein";
import translate from "translate";
import _, { map } from "underscore";

const app = express();

app.use(express.json());

app.get("/serve", (req, res) => {
  console.log("herer");
  res.set("Access-Control-Allow-Origin", "*");
  return res.status(200).json({
    name: "serverside",
  });
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  // const response = await fetch(
  //   `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.body.name}`
  // );

  // console.log(response.text);

  //ANN api
  const va = await axios.get(
    `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.body.name}`
  );

  //animeVostfr api
  const anotherData = await animeVostfr.loadAnime();

  // var moreData = await animeVostfr.searchAnime(anotherData, `${req.body.name}`);
  var moreData = await animeVostfr.searchAnime(anotherData, req.body.name);
  console.log(moreData);
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

  //
  var bestScore = animeVostfr.bestScoreAnime(anotherData);
  var popularAnime = animeVostfr.popularAnime(anotherData);
  //
  xml2js.parseString(va.data, function (err, result) {
    // fs.writeFileSync("./real.json", JSON.stringify(result, null, 2), "utf-8");
    console.log(result);
    let rre = {
      result: result,
      d: moreData,
      bestScore: bestScore,
      popularAnime: popularAnime,
    };
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

  console.log(wishlisted.data);
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

const port = 5000;

app.listen(port, () => {
  console.log("on port 5000");
});
