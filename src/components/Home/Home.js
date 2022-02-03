import { orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../firebase/fbase";

//

import Search from "../search/search";
import Header from "./HomeComponent/Header";

const Home = () => {
  const [item, setItem] = useState({});
  const { onSnapshot, collection } = dbService;

  useEffect(() => {
    const dataArr = ["headr", "month", "week", "allTime"];

    const arc = [];
    const newObj = {};

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

    dataArr.map(async (a) => {
      console.log(dataObj[a]);

      await onSnapshot(dataObj[a], (snapshot) => {
        console.log(snapshot.docs);
        const arr = snapshot.docs.map((docs) => ({
          id: docs.id,
          ...docs.data(),
        }));
        newObj[a] = arr;
        arc.push(arr);
        console.log(arc);
        setItem(newObj);
      });
    });

    console.log(dataObj);
    console.log(newObj);
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
      <Header imgArray={item.headr} />
      {/* {item[1].month.map((it) => (
        <div key={it.id}>{it.value}</div>
      ))} */}
    </div>
  );
};

export default Home;

//

//

// for each runs completly before running of onSnapshot ,this might be happening because onSnapshot does not run instantly

// snapshot is taking time and thats why all them runs and in the end only allTime is left and it keep on runntig for four time s

// one  option is you can use four snapshot because you already  have four query

//

//

// somehow this query thing is running for 4 time  in earlier and then other code run but why it should not  run whole thing form top to bottom .  and this thing causes issue  , when we are using newObj , and thats why when we reach snapshot a is only all time and we are keep on extracting that from  newObj

// dbService.onSnapshot(dbService.collection(dbService.))
//need to do this thing for all four component
// onSnapshot(collection(dbService.getFirestore(), "header"), (snapshot) => {
//   const arr = snapshot.docs.map((docs) => ({
//     id: docs.id,
//     ...docs.data(),
//   }));
//   setItem(arr);
// });

//________********)______________************)______________

//_______**********__________************____________************____

// const dataObj = {
//   headr: headerQuery,
//   month: monthlyQuery,
//   week: weeklyQuery,
//   allTime: allTimeQuery,
// };

// dataArr.forEach((a) => {
//   newObj[a] = dbService.query(
//     collection(dbService.getFirestore(), "allTime"),
//     orderBy("id", "asc")
//   );
//   // console.log("newObj fans");
//   // console.log(newObj);
// });

// when i sperated query i am getting all the  snapshot but when i take query with the help of for loop and am unable to get snapshot

// so is this means something wrong with query  or    query is a different type of action and snapshot is a different type of action
