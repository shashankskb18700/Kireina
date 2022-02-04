import React, { useState } from "react";
import { dbService } from "../../firebase/fbase";

import "./Admin.css";

const Admin = () => {
  const [header, setHeader] = useState("");
  const [topAiring, setTpAir] = useState("");
  const [UpComing, setUpComing] = useState("");
  const [allTime, setAllTime] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "header") {
      setHeader(value);
    } else if (name === "topAiring") {
      setTpAir(value);
    } else if (name === "UpComing") {
      setUpComing(value);
    } else if (name === "allTime") {
      setAllTime(value);
    }
  };

  const obj = {
    header: header,
    topAiring: topAiring,
    UpComing: UpComing,
    allTime: allTime,
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { addDoc, collection } = dbService;

    const {
      target: { name },
    } = event;

    try {
      await addDoc(collection(dbService.getFirestore(), name), {
        value: obj[name],
        createdAt: Date.now(),
        id: Date.now(),
      });
    } catch (e) {
      console.log(e);
    }

    // console.log(window[name]);
    // if (name === "header") {
    //   addDoc(collection(dbService.getFirestore(), "header"), {
    //     header,
    //     createdAt: Date.now(),
    //   });

    //   console.log("header is talking");
    // } else if (name === "topAiring") {
    //   addDoc(collection(dbService.getFirestore(), "topAiring"), {
    //     topAiring,
    //     createdAt: Date.now(),
    //   });

    //   console.log("topAiring is talking");
    // } else if (name === "UpComing") {
    //   addDoc(collection(dbService.getFirestore(), "UpComing"), {
    //     UpComing,
    //     createdAt: Date.now(),
    //   });
    // } else if (name === "allTime") {
    //   addDoc(collection(dbService.getFirestore(), "allTime"), {
    //     allTime,
    //     createdAt: Date.now(),
    //   });
    // }
    // dbService.addDoc(dbService.collection(dbService.fir))
  };

  console.log(dbService);

  return (
    <div className="admin">
      <h1> I am a admin</h1>
      <form className="adminF" onSubmit={onSubmit}>
        <input
          name="header"
          type="text"
          value={header}
          placeholder="header"
          onChange={onChange}
        />
        {/* <button className="bu" name="header">
          header
        </button> */}
        <input
          type="button"
          value="header"
          name="header"
          onClick={onSubmit}
          className="bu"
        />

        <input
          name="topAiring"
          type="text"
          value={topAiring}
          placeholder="topAiring"
          onChange={onChange}
          name="topAiring"
        />
        {/* <button className="bu">topAiring</button> */}
        <input
          type="button"
          value="topAiring"
          name="topAiring"
          onClick={onSubmit}
          className="bu"
        />

        <input
          name="UpComing"
          type="text"
          value={UpComing}
          onChange={onChange}
          placeholder="UpComing"
        />
        {/* <button className="bu">UpComing</button> */}
        <input
          type="button"
          value="UpComing"
          name="UpComing"
          onClick={onSubmit}
          className="bu"
        />

        <input
          name="allTime"
          value={allTime}
          type="text"
          placeholder="alltime"
          onChange={onChange}
        />
        {/* <button className="bu">all time</button> */}
        <input
          type="button"
          value="allTime"
          name="allTime"
          onClick={onSubmit}
          className="bu"
        />
      </form>

      <br />
      <h1>
        {" "}
        only add link of a photo and to get them in order you have to update
        them in order{" "}
      </h1>
    </div>
  );
};

export default Admin;
