import React, { useState } from "react";
import { dbService } from "../../firebase/fbase";

import "./Admin.css";

const Admin = () => {
  const [header, setHeader] = useState("");
  const [monthly, setMontly] = useState("");
  const [weekly, setWeekly] = useState("");
  const [allTime, setAllTime] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "header") {
      setHeader(value);
    } else if (name === "monthly") {
      setMontly(value);
    } else if (name === "weekly") {
      setWeekly(value);
    } else if (name === "allTime") {
      setAllTime(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { addDoc, collection, getFireStore } = dbService;
    // console.log(event.target);
    //button event has neither name nor value)
    const {
      target: { name, value },
    } = event;
    if (name === "header") {
      console.log("header is talking");
    } else if (name === "monthly") {
      console.log("monthly is talking");
    }
    // dbService.addDoc(dbService.collection(dbService.fir))
  };

  console.log(dbService);

  return (
    <div>
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
          name="monthly"
          type="text"
          value={monthly}
          placeholder="montlhy"
          onChange={onChange}
          name="montly"
        />
        {/* <button className="bu">monthly</button> */}
        <input
          type="button"
          value="monthly"
          name="monthly"
          onClick={onSubmit}
          className="bu"
        />

        <input
          name="weekly"
          type="text"
          value={weekly}
          onChange={onChange}
          placeholder="weekly"
        />
        {/* <button className="bu">weekly</button> */}
        <input
          type="button"
          value="weekly"
          name="weekly"
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
    </div>
  );
};

export default Admin;
