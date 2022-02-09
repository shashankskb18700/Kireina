// const { response } = require("express");
// const express = require("express");
import express from "express";
// const fetch = require("node-fetch");
import fetch from "node-fetch";
import xml2js from "xml2js";
import axios from "axios";
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
  const va = await axios.get(
    `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.body.name}`
  );
  // console.log(va.data);
  // res.send("request complete");
  xml2js.parseString(va.data, function (err, result) {
    // fs.writeFileSync("./real.json", JSON.stringify(result, null, 2), "utf-8");
    console.log(result);
    res.send(JSON.stringify(result, null, 2));
  });
  // console.log(va);
  // console.log("i am runnig");
  // res.status(200).send("data updated");
});

const port = 5000;

app.listen(port, () => {
  console.log("on port 5000");
});
