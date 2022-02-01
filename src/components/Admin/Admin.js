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

  const obj = {
    header: header,
    monthly: monthly,
    weekly: weekly,
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
    // } else if (name === "monthly") {
    //   addDoc(collection(dbService.getFirestore(), "monthly"), {
    //     monthly,
    //     createdAt: Date.now(),
    //   });

    //   console.log("monthly is talking");
    // } else if (name === "weekly") {
    //   addDoc(collection(dbService.getFirestore(), "weekly"), {
    //     weekly,
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
          name="monthly"
          type="text"
          value={monthly}
          placeholder="monthly"
          onChange={onChange}
          name="monthly"
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
