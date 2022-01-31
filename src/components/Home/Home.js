import { orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../firebase/fbase";

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
    const q = dbService.query(
      collection(dbService.getFirestore(), "header"),
      orderBy("id", "asc")
    );

    onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      setItem(arr);
    });
  }, []);

  console.log("form my side");
  console.log(item);
  return (
    <div>
      <h1> home</h1>
      {item.map((it) => (
        <div key={it.id}>{it.value}</div>
      ))}
    </div>
  );
};

export default Home;
