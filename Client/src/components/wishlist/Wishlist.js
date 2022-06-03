import React, { useEffect, useState } from "react";
import NavHeader from "../Header-Footer/NavHeader/NavHeader";

import { connect } from "react-redux";
import { dbService } from "../../firebase/fbase";
import { authService } from "../../firebase/fbase";
import { orderBy } from "firebase/firestore";

import { Wish } from "../../redux/action/wishlistActionCreator";

const Wishlist = (props) => {
  const [idAnime, setIdAnime] = useState("");
  const [arrayId, setArrayId] = useState([]);

  let userName = authService.getAuth().currentUser.email;
  console.log(props.wishlistItem);

  let animId = props.wishlistItem;
  // too many times same data is being sent of firebase
  // if (arrayId.indexOf(userName) >= 0) {

  // console.log(arrayId);
  // if (arrayId.indexOf(userName) >= 0) {
  //   //delete element form firebase database
  //   console.log("delete it form the array");
  // } else {
  //   setId(props.wishlistItem);
  //   const { addDoc, collection } = dbService;
  //   console.log("sending data");

  //   addDoc(collection(dbService.getFirestore(), userName), {
  //     value: id,
  //     createdAt: Date.now(),
  //     id: Date.now(),
  //   });
  // }

  const { collection, onSnapshot } = dbService;
  useEffect(() => {
    console.log("use effect");
    query();
  }, []);

  const query = async () => {
    const wishlistQuery = dbService.query(
      collection(dbService.getFirestore(), userName),
      orderBy("id", "asc")
    );

    await onSnapshot(wishlistQuery, (snapshot) => {
      const arr = snapshot.docs.map((docs) => docs.data().value);
      console.log(arr);
      // const arra = [...arrayId];
      // arra
      //arrayId is getting completly changed ;

      setArrayId([...arrayId, ...arr]);
    });
    // console.log(onSanpshot);
  };

  console.log(arrayId);
  // when idAnime is not  equal , it hasn't been setted ,a when it setted ti does not run
  // if (arrayId.indexOf(props.wishlistItem) < 0) {

  // i think props.wishlist lost it value after one iteration and it became undefined thats why it kept on running

  // not this not the case but some how it is runnig for 50 times
  if (arrayId.indexOf(animId) < 0) {
    console.log("inside of ch");
    console.log(props.wishlistItem);

    if (props.wishlistItem) {
      const { addDoc, collection } = dbService;
      console.log("sending data");
      console.log(idAnime);
      console.log(props.wishlistItem);

      addDoc(collection(dbService.getFirestore(), userName), {
        value: props.wishlistItem, // if seetin props wishlitItem , then it is saying invalid data undefined
        createdAt: Date.now(),
        id: Date.now(),
      });
      query();
      // setIdAnime(props.wishlistItem);
    }
  }
  // console.log(idAnime);
  return (
    <div>
      <button>wish</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { wishlistItem: state.wishlistData };
};

export default connect(mapStateToProps)(Wishlist);
