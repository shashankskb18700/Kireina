import { orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../firebase/fbase";
import Search from "../search/search";

const Home = () => {
  const [item, setItem] = useState([]);
  const { onSnapshot, collection } = dbService;

  useEffect(() => {
    // dbService.onSnapshot(dbService.collection(dbService.))
    //need to do this thing for all four component
    // onSnapshot(collection(dbService.getFirestore(), "header"), (snapshot) => {
    //   const arr = snapshot.docs.map((docs) => ({
    //     id: docs.id,
    //     ...docs.data(),
    //   }));
    //   setItem(arr);
    // });
    const headerQuery = dbService.query(
      collection(dbService.getFirestore(), "header"),
      orderBy("id", "asc")
    );

    const monthlyQuery = dbService.query(
      collection(dbService.getFirestore(), "monthly"),
      orderBy("id", "asc")
    );

    const weeklyQuery = dbService.query(
      collection(dbService.getFirestore(), "weekly"),
      orderBy("id", "asc")
    );

    const allTimeQuery = dbService.query(
      collection(dbService.getFirestore(), "allTime"),
      orderBy("id", "asc")
    );

    const dataObj = {
      headr: headerQuery,
      month: monthlyQuery,
      week: weeklyQuery,
      allTime: allTimeQuery,
    };
    const dataArr = ["headr", "month", "week", "allTime"];

    console.log("again comming back let see item this time");
    console.log(item);
    const arc = [];

    dataArr.forEach((a) => {
      console.log("now entered in it again");
      console.log(item);
      onSnapshot(dataObj[a], (snapshot) => {
        const arr = snapshot.docs.map((docs) => ({
          id: docs.id,
          ...docs.data(),
        }));
        // this a   in  set in not taking value of a
        // let tempObj = new Object();
        // tempObj[a] = arr;
        // console.log("item fighters");
        // console.log(item);
        arc.push(arr);
        console.log(arc);
        setItem(arc);
      });
    });

    // onSnapshot(headerQuery, (snapshot) => {
    //   const arr = snapshot.docs.map((docs) => ({
    //     id: docs.id,
    //     ...docs.data(),
    //   }));
    //   setItem({ headr: arr, ...item });
    // });
  }, []);

  console.log("form my side");
  console.log(item);

  return (
    <div>
      <h1> home</h1>
      <Search />
      {/* {item[1].month.map((it) => (
        <div key={it.id}>{it.value}</div>
      ))} */}
    </div>
  );
};

export default Home;
