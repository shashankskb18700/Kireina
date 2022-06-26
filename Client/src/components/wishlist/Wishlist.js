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
  useEffect(async () => {
    await query();
    props.Wish(idAnime);
  }, [idAnime]);

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
      let wishlistIds = arr.toString();
      wishlistIds = wishlistIds.replaceAll(",", "/");

      setIdAnime(wishlistIds);
      if (idAnime.length > 0) {
        props.Wish(idAnime);
      }
      // setArrayId([...arr]);
    });
    // there will be delay in fetching data thats why some why it is not working
  };

  // console.log(arrayId);
  console.log(idAnime);

  console.log(idAnime);
  return (
    <div>
      <button>wish</button>
      <button onClick={() => props.Wish("5232/2333")}> action creator</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { wishlistItem: state.wishlistData };
};

export default connect(mapStateToProps, { Wish })(Wishlist);
